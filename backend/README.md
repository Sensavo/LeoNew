# Backend - WebOS Toolkit API

FastAPI-based backend service providing API endpoints for the WebOS Toolkit landing page.

## 🏗 Architecture

This backend follows FastAPI best practices with:

- **Async/Await**: Non-blocking I/O operations
- **Pydantic Models**: Type-safe data validation
- **MongoDB Integration**: Document-based data storage
- **CORS Configuration**: Cross-origin request handling
- **Environment Configuration**: Secure settings management

## 📡 API Endpoints

### Health Check
```http
GET /api/
```
**Response:**
```json
{
  "message": "Hello World"
}
```

### Status Checks

#### Create Status Check
```http
POST /api/status
Content-Type: application/json

{
  "client_name": "string"
}
```

**Response:**
```json
{
  "id": "uuid4-string",
  "client_name": "string",
  "timestamp": "2025-01-01T00:00:00Z"
}
```

#### Get Status Checks
```http
GET /api/status
```

**Response:**
```json
[
  {
    "id": "uuid4-string",
    "client_name": "string",
    "timestamp": "2025-01-01T00:00:00Z"
  }
]
```

## 📊 Data Models

### StatusCheck
```python
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
```

### StatusCheckCreate
```python
class StatusCheckCreate(BaseModel):
    client_name: str
```

## 🗄 Database Schema

### MongoDB Collections

#### `status_checks`
Document structure:
```json
{
  "_id": "ObjectId",
  "id": "uuid4-string",
  "client_name": "string",
  "timestamp": "ISODate"
}
```

## 🔧 Configuration

### Environment Variables

#### Required Variables
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=webos_toolkit
```

#### Optional Variables
```env
DEBUG=true
LOG_LEVEL=INFO
```

### CORS Configuration
```python
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],  # Configure for production
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🚀 Development

### Local Setup
```bash
# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Access API documentation
open http://localhost:8001/docs
```

### Code Quality
```bash
# Format code
black .

# Sort imports
isort .

# Type checking
mypy .

# Linting
flake8 .
```

### Testing
```bash
# Run tests
pytest

# Run with coverage
pytest --cov=.

# Generate coverage report
pytest --cov=. --cov-report=html
```

## 📈 Performance

### Database Optimization
- **Indexes**: Proper indexing on frequently queried fields
- **Connection Pooling**: Efficient database connections
- **Query Optimization**: Optimized MongoDB queries

### Caching Strategy
- **Response Caching**: Cache frequently requested data
- **Database Query Caching**: Reduce database load
- **Static Asset Caching**: Optimize asset delivery

### Monitoring
- **Health Checks**: Endpoint monitoring
- **Performance Metrics**: Response time tracking
- **Error Logging**: Comprehensive error tracking

## 🔒 Security

### Authentication
- **API Key Authentication**: Secure API access
- **Rate Limiting**: Prevent abuse
- **Input Validation**: Pydantic model validation

### Data Protection
- **Environment Variables**: Secure configuration
- **Database Security**: Connection encryption
- **CORS Configuration**: Controlled cross-origin access

## 🐳 Deployment

### Production Configuration
```bash
# Production server
uvicorn server:app --host 0.0.0.0 --port 8001

# With multiple workers
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4
```

### Docker Deployment
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8001

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

### Environment Setup
- Set production environment variables
- Configure MongoDB connection string
- Update CORS origins for production domain
- Enable logging and monitoring

## 📊 API Documentation

### Interactive Documentation
- **Swagger UI**: Available at `/docs`
- **ReDoc**: Available at `/redoc`
- **OpenAPI Schema**: Available at `/openapi.json`

### Response Formats
All responses follow consistent JSON format:
- Success responses include data
- Error responses include error details
- Timestamps in ISO 8601 format
- UUIDs for unique identifiers

## 🔍 Logging

### Log Configuration
```python
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
```

### Log Levels
- **INFO**: General application events
- **WARNING**: Non-critical issues
- **ERROR**: Application errors
- **DEBUG**: Detailed debugging information

## 🔧 Maintenance

### Database Maintenance
- Regular backups
- Index optimization
- Performance monitoring
- Data cleanup procedures

### Code Maintenance
- Dependency updates
- Security patches
- Performance optimizations
- Documentation updates