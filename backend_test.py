#!/usr/bin/env python3
import requests
import json
import time
import os
from datetime import datetime

# Get the backend URL from the frontend .env file
with open('/app/frontend/.env', 'r') as f:
    for line in f:
        if line.startswith('REACT_APP_BACKEND_URL='):
            BACKEND_URL = line.strip().split('=')[1].strip('"\'')
            break

# Ensure the URL doesn't have quotes
BACKEND_URL = BACKEND_URL.strip('"\'')
API_URL = f"{BACKEND_URL}/api"

print(f"Testing backend API at: {API_URL}")

# Test results
tests_passed = 0
tests_failed = 0
test_results = []

def run_test(test_name, test_func):
    global tests_passed, tests_failed
    print(f"\n🧪 Running test: {test_name}")
    start_time = time.time()
    try:
        result = test_func()
        if result:
            tests_passed += 1
            status = "✅ PASSED"
        else:
            tests_failed += 1
            status = "❌ FAILED"
    except Exception as e:
        tests_failed += 1
        status = f"❌ ERROR: {str(e)}"
    
    duration = time.time() - start_time
    print(f"{status} ({duration:.2f}s)")
    test_results.append({
        "name": test_name,
        "status": status,
        "duration": f"{duration:.2f}s"
    })
    return status.startswith("✅")

def test_health_check():
    """Test the health check endpoint"""
    response = requests.get(f"{API_URL}/")
    print(f"Response status: {response.status_code}")
    print(f"Response body: {response.text}")
    
    if response.status_code != 200:
        print(f"❌ Expected status code 200, got {response.status_code}")
        return False
    
    data = response.json()
    if data.get("message") != "Hello World":
        print(f"❌ Expected message 'Hello World', got {data.get('message')}")
        return False
    
    print("✅ Health check endpoint is working correctly")
    return True

def test_create_status_check():
    """Test creating a status check"""
    client_name = f"Test Client {datetime.now().isoformat()}"
    payload = {"client_name": client_name}
    
    response = requests.post(f"{API_URL}/status", json=payload)
    print(f"Response status: {response.status_code}")
    print(f"Response body: {response.text}")
    
    if response.status_code != 200:  # FastAPI returns 200 by default for POST
        print(f"❌ Expected status code 200, got {response.status_code}")
        return False
    
    data = response.json()
    if data.get("client_name") != client_name:
        print(f"❌ Expected client_name '{client_name}', got {data.get('client_name')}")
        return False
    
    if "id" not in data:
        print("❌ Expected 'id' in response")
        return False
    
    if "timestamp" not in data:
        print("❌ Expected 'timestamp' in response")
        return False
    
    print("✅ Create status check endpoint is working correctly")
    return True

def test_get_status_checks():
    """Test retrieving status checks"""
    response = requests.get(f"{API_URL}/status")
    print(f"Response status: {response.status_code}")
    print(f"Response body: {json.dumps(response.json(), indent=2)}")
    
    if response.status_code != 200:
        print(f"❌ Expected status code 200, got {response.status_code}")
        return False
    
    data = response.json()
    if not isinstance(data, list):
        print(f"❌ Expected list response, got {type(data)}")
        return False
    
    # Check if we have at least one status check (we should have created one in the previous test)
    if len(data) == 0:
        print("⚠️ No status checks found. This might be expected if database was reset.")
    else:
        # Verify the structure of the first item
        first_item = data[0]
        required_fields = ["id", "client_name", "timestamp"]
        for field in required_fields:
            if field not in first_item:
                print(f"❌ Expected field '{field}' in status check")
                return False
    
    print("✅ Get status checks endpoint is working correctly")
    return True

def test_cors_configuration():
    """Test CORS configuration"""
    headers = {
        "Origin": "http://example.com",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type"
    }
    
    # Preflight request
    response = requests.options(f"{API_URL}/", headers=headers)
    print(f"Preflight response status: {response.status_code}")
    print(f"Preflight response headers: {dict(response.headers)}")
    
    if response.status_code != 200:
        print(f"❌ Expected status code 200 for preflight, got {response.status_code}")
        return False
    
    if "access-control-allow-origin" not in response.headers:
        print("❌ Expected 'Access-Control-Allow-Origin' header in response")
        return False
    
    # Actual request
    response = requests.get(f"{API_URL}/", headers={"Origin": "http://example.com"})
    
    if "access-control-allow-origin" not in response.headers:
        print("❌ Expected 'Access-Control-Allow-Origin' header in response")
        return False
    
    print("✅ CORS is properly configured")
    return True

def test_api_documentation():
    """Test API documentation endpoints"""
    # Test Swagger UI
    response = requests.get(f"{BACKEND_URL}/docs")
    swagger_available = response.status_code == 200
    print(f"Swagger UI available: {swagger_available} (status: {response.status_code})")
    
    # Test ReDoc
    response = requests.get(f"{BACKEND_URL}/redoc")
    redoc_available = response.status_code == 200
    print(f"ReDoc available: {redoc_available} (status: {response.status_code})")
    
    # Test OpenAPI schema
    response = requests.get(f"{BACKEND_URL}/openapi.json")
    openapi_available = response.status_code == 200
    print(f"OpenAPI schema available: {openapi_available} (status: {response.status_code})")
    
    if swagger_available and redoc_available and openapi_available:
        print("✅ API documentation is accessible")
        return True
    else:
        print("❌ Some API documentation endpoints are not accessible")
        return False

def test_mongodb_integration():
    """Test MongoDB integration by creating and retrieving a status check"""
    # Create a unique client name
    client_name = f"MongoDB Test {datetime.now().isoformat()}"
    payload = {"client_name": client_name}
    
    # Create a status check
    create_response = requests.post(f"{API_URL}/status", json=payload)
    if create_response.status_code != 200:
        print(f"❌ Failed to create status check: {create_response.status_code}")
        return False
    
    created_id = create_response.json().get("id")
    if not created_id:
        print("❌ No ID returned from create operation")
        return False
    
    # Get all status checks
    get_response = requests.get(f"{API_URL}/status")
    if get_response.status_code != 200:
        print(f"❌ Failed to get status checks: {get_response.status_code}")
        return False
    
    # Check if our created status check is in the list
    status_checks = get_response.json()
    found = False
    for check in status_checks:
        if check.get("id") == created_id:
            found = True
            break
    
    if not found:
        print(f"❌ Created status check with ID {created_id} not found in retrieved list")
        return False
    
    print("✅ MongoDB integration is working correctly")
    return True

if __name__ == "__main__":
    print("=" * 50)
    print(f"🚀 Starting WebOS Toolkit Backend API Tests")
    print("=" * 50)
    
    # Run all tests
    run_test("Health Check Endpoint", test_health_check)
    run_test("Create Status Check", test_create_status_check)
    run_test("Get Status Checks", test_get_status_checks)
    run_test("CORS Configuration", test_cors_configuration)
    run_test("API Documentation", test_api_documentation)
    run_test("MongoDB Integration", test_mongodb_integration)
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"📊 Test Summary: {tests_passed} passed, {tests_failed} failed")
    print("=" * 50)
    
    for test in test_results:
        print(f"{test['status']} {test['name']} ({test['duration']})")
    
    print("\n" + "=" * 50)
    
    if tests_failed > 0:
        exit(1)
    else:
        exit(0)