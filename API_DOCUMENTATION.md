# 📡 API Documentation

Comprehensive documentation for the WebOS Toolkit Landing Page API endpoints.

## 🔗 Base URL

```
Local Development: http://localhost:8001
Production: [Your production domain]
```

## 📋 Table of Contents

- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Data Models](#data-models)
- [Response Formats](#response-formats)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## 🔐 Authentication

Currently, the API does not require authentication for basic endpoints. This may change in future versions for enhanced security.

## 🚀 Endpoints

### Health Check

Check API availability and basic information.

#### `GET /api/`

**Description:** Returns basic API status information to verify the service is running.

**Request:**
```http
GET /api/
```

**Response:**
```json
{
  "message": "Hello World"
}
```

**Status Codes:**
- `200 OK` - Service is running
- `500 Internal Server Error` - Service error

---

### Status Checks

Manage client status check records.

#### `POST /api/status`

**Description:** Create a new status check record for tracking client activity.

**Request:**
```http
POST /api/status
Content-Type: application/json

{
  "client_name": "string"
}
```

**Request Body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `client_name` | string | Yes | Name or identifier for the client |

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "client_name": "Example Client",
  "timestamp": "2025-01-17T19:03:29.123456Z"
}
```

**Status Codes:**
- `201 Created` - Status check created successfully
- `400 Bad Request` - Invalid request data
- `422 Unprocessable Entity` - Validation error
- `500 Internal Server Error` - Database error

#### `GET /api/status`

**Description:** Retrieve all status check records.

**Request:**
```http
GET /api/status
```

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "client_name": "Example Client 1",
    "timestamp": "2025-01-17T19:03:29.123456Z"
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "client_name": "Example Client 2",
    "timestamp": "2025-01-17T19:04:15.987654Z"
  }
]
```

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return (default: 1000) |

**Status Codes:**
- `200 OK` - Records retrieved successfully
- `500 Internal Server Error` - Database error

---

## 📊 Data Models

### StatusCheck

Complete status check record with auto-generated fields.

```json
{
  "id": "string",           // Auto-generated UUID4
  "client_name": "string",  // Client identifier
  "timestamp": "string"     // ISO 8601 datetime (auto-generated)
}
```

**Field Descriptions:**
- **id**: Unique identifier (UUID4 format)
- **client_name**: Client name or identifier (1-100 characters)
- **timestamp**: Record creation time in UTC

### StatusCheckCreate

Input model for creating new status checks.

```json
{
  "client_name": "string"   // Required: Client identifier
}
```

**Validation Rules:**
- **client_name**: Required, 1-100 characters, non-empty string

---

## 📤 Response Formats

### Success Response

All successful API responses follow this structure:

```json
{
  // Response data varies by endpoint
}
```

### Error Response

Error responses include detailed information:

```json
{
  "detail": "Error description",
  "type": "error_type",
  "code": "error_code"
}
```

**Common Error Types:**
- `validation_error` - Request data validation failed
- `not_found` - Requested resource not found
- `internal_error` - Server-side error occurred

---

## ⚠️ Error Handling

### HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request format |
| 404 | Not Found - Resource not found |
| 422 | Unprocessable Entity - Validation error |
| 500 | Internal Server Error - Server error |

### Error Response Examples

#### Validation Error (422)
```json
{
  "detail": [
    {
      "loc": ["body", "client_name"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

#### Not Found Error (404)
```json
{
  "detail": "Status check not found"
}
```

#### Internal Server Error (500)
```json
{
  "detail": "An internal server error occurred"
}
```

---

## 🚦 Rate Limiting

Currently, no rate limiting is implemented. Future versions may include:
- Per-IP rate limiting
- Per-client rate limiting
- Burst protection

**Recommended Limits:**
- 100 requests per minute per IP
- 1000 requests per hour per client

---

## 🔧 Development

### Interactive Documentation

FastAPI provides automatic interactive documentation:

- **Swagger UI**: `http://localhost:8001/docs`
- **ReDoc**: `http://localhost:8001/redoc`
- **OpenAPI Schema**: `http://localhost:8001/openapi.json`

### Testing with cURL

#### Health Check
```bash
curl -X GET "http://localhost:8001/api/" \
     -H "accept: application/json"
```

#### Create Status Check
```bash
curl -X POST "http://localhost:8001/api/status" \
     -H "accept: application/json" \
     -H "Content-Type: application/json" \
     -d '{"client_name": "Test Client"}'
```

#### Get Status Checks
```bash
curl -X GET "http://localhost:8001/api/status" \
     -H "accept: application/json"
```

### Testing with Python

```python
import requests

# Health check
response = requests.get("http://localhost:8001/api/")
print(response.json())

# Create status check
data = {"client_name": "Python Client"}
response = requests.post("http://localhost:8001/api/status", json=data)
print(response.json())

# Get status checks
response = requests.get("http://localhost:8001/api/status")
print(response.json())
```

---

## 🚀 Production Considerations

### Security
- Implement API key authentication
- Add rate limiting
- Use HTTPS in production
- Validate and sanitize all inputs
- Implement request logging

### Performance
- Add response caching
- Implement database connection pooling
- Monitor response times
- Add database indexes

### Monitoring
- Health check endpoints
- Metrics collection
- Error logging
- Performance monitoring

---

## 📈 Future Enhancements

Planned API improvements:
- Authentication system
- User management endpoints
- Analytics data collection
- Webhook support
- Real-time status updates
- Advanced filtering and pagination

---

## 🔗 Related Documentation

- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Main README](README.md)