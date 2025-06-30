# API Documentation

## 🔑 Authentication

### POST /api/auth/login
Login with email and password.

```json
{
  "email": "string",
  "password": "string"
}
```

Response:
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "role": "string"
  }
}
```

### POST /api/auth/register
Register new user.

```json
{
  "email": "string",
  "password": "string",
  "role": "string",
  "name": "string"
}
```

## 👨‍🏫 Giảng viên API

### POST /api/exams
Tạo đề thi mới.

```json
{
  "title": "string",
  "content": "string",
  "deadline": "timestamp",
  "courseId": "string"
}
```

### GET /api/exams/{id}
Lấy thông tin đề thi.

### PUT /api/exams/{id}/publish
Công bố đề thi.

### POST /api/results/{examId}/grade
Chấm điểm bài thi.

```json
{
  "studentId": "string",
  "score": "number",
  "feedback": "string"
}
```

## 👨‍🎓 Sinh viên API

### GET /api/exams/available
Lấy danh sách đề thi có thể làm.

### POST /api/exams/{id}/submit
Nộp bài thi.

```json
{
  "answers": [
    {
      "questionId": "string",
      "answer": "string"
    }
  ]
}
```

### GET /api/certificates
Lấy danh sách chứng chỉ.

## 🏛️ Nhà trường API

### POST /api/certificates/issue
Cấp chứng chỉ mới.

```json
{
  "studentId": "string",
  "courseId": "string",
  "grade": "string",
  "metadata": {
    "issueDate": "timestamp",
    "expiryDate": "timestamp"
  }
}
```

### GET /api/students
Lấy danh sách sinh viên.

### GET /api/instructors
Lấy danh sách giảng viên.

## 🏢 Nhà tuyển dụng API

### GET /api/certificates/verify/{id}
Xác thực chứng chỉ.

### GET /api/students/{id}/history
Xem lịch sử học tập của sinh viên.

## 🔒 Blockchain API

### POST /api/blockchain/mint-exam
Tạo NFT cho đề thi.

```json
{
  "examId": "string",
  "ipfsHash": "string"
}
```

### POST /api/blockchain/submit-result
Lưu hash kết quả thi.

```json
{
  "examId": "string",
  "resultHash": "string"
}
```

### POST /api/blockchain/mint-certificate
Tạo NFT chứng chỉ.

```json
{
  "studentId": "string",
  "courseId": "string",
  "ipfsHash": "string"
}
```

## 📁 IPFS API

### POST /api/ipfs/upload
Upload file lên IPFS.

```json
{
  "file": "binary"
}
```

Response:
```json
{
  "hash": "string",
  "url": "string"
}
```

## 🔐 Error Codes

| Code | Description |
|------|-------------|
| 400  | Bad Request |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |
| 500  | Server Error |

## 📝 Response Format

Success Response:
```json
{
  "success": true,
  "data": {},
  "message": "string"
}
```

Error Response:
```json
{
  "success": false,
  "error": {
    "code": "number",
    "message": "string"
  }
}
```

## 🔄 Rate Limiting

- Rate limit: 100 requests per minute
- Blockchain operations: 10 requests per minute
- IPFS uploads: 50 requests per hour

## 🔒 Security

- JWT Authentication
- CORS enabled
- Request validation
- Input sanitization
- Rate limiting
- SSL/TLS required

## 📚 Examples

### Tạo đề thi và mint NFT

```javascript
// 1. Tạo đề thi
const exam = await axios.post('/api/exams', {
  title: 'Final Exam 2024',
  content: '...',
  deadline: Date.now() + 86400000
});

// 2. Upload lên IPFS
const ipfs = await axios.post('/api/ipfs/upload', {
  file: exam.data
});

// 3. Mint NFT
const nft = await axios.post('/api/blockchain/mint-exam', {
  examId: exam.id,
  ipfsHash: ipfs.hash
});
```

### Nộp bài và lưu kết quả

```javascript
// 1. Nộp bài
const submission = await axios.post(`/api/exams/${examId}/submit`, {
  answers: [...]
});

// 2. Tạo hash
const resultHash = web3.utils.keccak256(JSON.stringify(submission));

// 3. Lưu trên blockchain
await axios.post('/api/blockchain/submit-result', {
  examId,
  resultHash
});
``` 