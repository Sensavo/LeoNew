import requests
import json
import os
import sys
from dotenv import load_dotenv
import time

# Load environment variables from frontend/.env to get the backend URL
load_dotenv("frontend/.env")

# Get the backend URL from environment variables
BACKEND_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BACKEND_URL:
    print("Error: REACT_APP_BACKEND_URL not found in environment variables")
    sys.exit(1)

# Ensure the URL ends with /api
API_URL = f"{BACKEND_URL}/api"
print(f"Testing backend API at: {API_URL}")

def test_root_endpoint():
    """Test the root endpoint to ensure it returns 'Hello World'"""
    try:
        response = requests.get(f"{API_URL}/")
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint test passed")
                return True
            else:
                print(f"❌ Root endpoint test failed: Unexpected response: {data}")
                return False
        else:
            print(f"❌ Root endpoint test failed: Status code {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Root endpoint test failed with exception: {str(e)}")
        return False

def test_create_status_check():
    """Test the POST /api/status endpoint to ensure it creates a status check entry"""
    try:
        payload = {"client_name": "backend_test_client"}
        response = requests.post(f"{API_URL}/status", json=payload)
        if response.status_code == 200:
            data = response.json()
            if data.get("client_name") == "backend_test_client" and "id" in data and "timestamp" in data:
                print("✅ Create status check test passed")
                return True, data.get("id")
            else:
                print(f"❌ Create status check test failed: Unexpected response: {data}")
                return False, None
        else:
            print(f"❌ Create status check test failed: Status code {response.status_code}")
            return False, None
    except Exception as e:
        print(f"❌ Create status check test failed with exception: {str(e)}")
        return False, None

def test_get_status_checks(expected_id=None):
    """Test the GET /api/status endpoint to ensure it retrieves status check entries"""
    try:
        response = requests.get(f"{API_URL}/status")
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                if expected_id:
                    # Check if our recently created entry is in the list
                    found = any(item.get("id") == expected_id for item in data)
                    if found:
                        print("✅ Get status checks test passed (found our entry)")
                        return True
                    else:
                        print(f"❌ Get status checks test failed: Our entry with ID {expected_id} not found")
                        return False
                else:
                    print("✅ Get status checks test passed (no specific entry to check)")
                    return True
            else:
                print(f"❌ Get status checks test failed: Expected a list but got: {data}")
                return False
        else:
            print(f"❌ Get status checks test failed: Status code {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Get status checks test failed with exception: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("\n=== Running Backend API Tests ===\n")
    
    # Test the root endpoint
    root_test_result = test_root_endpoint()
    
    # Test creating a status check
    create_test_result, created_id = test_create_status_check()
    
    # Give MongoDB a moment to process the write
    time.sleep(1)
    
    # Test getting status checks
    get_test_result = test_get_status_checks(created_id if create_test_result else None)
    
    # Overall test result
    all_passed = root_test_result and create_test_result and get_test_result
    
    print("\n=== Backend API Test Summary ===")
    print(f"Root Endpoint: {'✅ PASSED' if root_test_result else '❌ FAILED'}")
    print(f"Create Status Check: {'✅ PASSED' if create_test_result else '❌ FAILED'}")
    print(f"Get Status Checks: {'✅ PASSED' if get_test_result else '❌ FAILED'}")
    print(f"Overall Result: {'✅ ALL TESTS PASSED' if all_passed else '❌ SOME TESTS FAILED'}")
    
    return all_passed

if __name__ == "__main__":
    run_all_tests()