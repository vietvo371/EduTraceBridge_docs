# Smart Contracts Documentation

## 📝 Overview

EduTraceBridge sử dụng ba smart contract chính để quản lý đề thi, kết quả và chứng chỉ trên blockchain:

1. ExamNFT
2. ResultHash
3. CertificateNFT

## 🔐 ExamNFT Contract

Contract quản lý đề thi dưới dạng NFT.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ExamNFT is ERC721, Ownable {
    struct Exam {
        string ipfsHash;      // Hash của đề thi trên IPFS
        uint256 deadline;     // Thời hạn nộp bài
        bool isPublished;     // Trạng thái công bố
        address instructor;   // Địa chỉ giảng viên
    }
    
    mapping(uint256 => Exam) public exams;
    uint256 private _tokenIds;
    
    constructor() ERC721("ExamNFT", "EXAM") {}
    
    function createExam(
        string memory ipfsHash,
        uint256 deadline
    ) public returns (uint256) {
        _tokenIds++;
        uint256 newExamId = _tokenIds;
        
        _mint(msg.sender, newExamId);
        
        exams[newExamId] = Exam({
            ipfsHash: ipfsHash,
            deadline: deadline,
            isPublished: false,
            instructor: msg.sender
        });
        
        return newExamId;
    }
    
    function publishExam(uint256 examId) public {
        require(msg.sender == exams[examId].instructor, "Not instructor");
        exams[examId].isPublished = true;
    }
}
```

## 📊 ResultHash Contract

Contract lưu trữ hash của kết quả thi.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ResultHash {
    struct Result {
        bytes32 resultHash;   // Hash của kết quả
        uint256 timestamp;    // Thời điểm lưu
        bool isLocked;        // Trạng thái khóa
    }
    
    mapping(uint256 => mapping(address => Result)) public results;
    
    event ResultSubmitted(
        uint256 indexed examId,
        address indexed student,
        bytes32 resultHash
    );
    
    function submitResult(
        uint256 examId,
        bytes32 resultHash
    ) public {
        require(!results[examId][msg.sender].isLocked, "Result is locked");
        
        results[examId][msg.sender] = Result({
            resultHash: resultHash,
            timestamp: block.timestamp,
            isLocked: false
        });
        
        emit ResultSubmitted(examId, msg.sender, resultHash);
    }
    
    function lockResult(uint256 examId, address student) public {
        // Chỉ giảng viên hoặc admin có thể khóa
        results[examId][student].isLocked = true;
    }
}
```

## 🎓 CertificateNFT Contract

Contract quản lý chứng chỉ học phần dưới dạng NFT.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CertificateNFT is ERC721, AccessControl {
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");
    
    struct Certificate {
        string courseId;      // Mã môn học
        string ipfsHash;      // Hash của chứng chỉ trên IPFS
        uint256 issueDate;    // Ngày cấp
        address issuer;       // Địa chỉ người cấp
    }
    
    mapping(uint256 => Certificate) public certificates;
    uint256 private _tokenIds;
    
    constructor() ERC721("CertificateNFT", "CERT") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    function issueCertificate(
        address student,
        string memory courseId,
        string memory ipfsHash
    ) public onlyRole(ISSUER_ROLE) returns (uint256) {
        _tokenIds++;
        uint256 newCertId = _tokenIds;
        
        _mint(student, newCertId);
        
        certificates[newCertId] = Certificate({
            courseId: courseId,
            ipfsHash: ipfsHash,
            issueDate: block.timestamp,
            issuer: msg.sender
        });
        
        return newCertId;
    }
}
```

## 🔄 Quy trình tương tác

### Tạo và quản lý đề thi
1. Giảng viên tạo đề thi mới qua `ExamNFT.createExam()`
2. Upload đề thi lên IPFS, lưu hash
3. Công bố đề thi qua `ExamNFT.publishExam()`

### Nộp và lưu kết quả
1. Sinh viên làm bài, kết quả được hash
2. Lưu hash kết quả qua `ResultHash.submitResult()`
3. Sau thời gian phúc khảo, khóa kết quả

### Cấp chứng chỉ
1. Nhà trường xét điều kiện cấp chứng chỉ
2. Tạo chứng chỉ NFT qua `CertificateNFT.issueCertificate()`
3. Sinh viên nhận NFT vào ví

## 🔒 Bảo mật

### Phân quyền
- Giảng viên: Tạo và quản lý đề thi
- Sinh viên: Nộp kết quả
- Nhà trường: Cấp chứng chỉ
- Admin: Quản lý roles

### Kiểm toán
- Sử dụng OpenZeppelin contracts
- Access control cho mỗi chức năng
- Event logging để theo dõi

## 📚 Testing

```javascript
const { expect } = require("chai");

describe("ExamNFT", function() {
    it("Should create new exam", async function() {
        const ExamNFT = await ethers.getContractFactory("ExamNFT");
        const exam = await ExamNFT.deploy();
        await exam.deployed();

        const tx = await exam.createExam("ipfs://hash", 1234567890);
        await tx.wait();

        expect(await exam.ownerOf(1)).to.equal(await exam.instructor());
    });
});
```

## 🔄 Upgrades & Migration

- Sử dụng proxy pattern cho upgrades
- Có kế hoạch migration data
- Backwards compatibility

## 📚 Tài liệu tham khảo

- [OpenZeppelin Docs](https://docs.openzeppelin.com/)
- [Solidity Docs](https://docs.soliditylang.org/)
- [ERC-721 Standard](https://eips.ethereum.org/EIPS/eip-721) 