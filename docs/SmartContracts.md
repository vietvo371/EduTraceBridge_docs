# Smart Contracts Documentation

## 📝 Overview

EduBridgeTrace sử dụng các smart contract để quản lý quyền truy cập, đề thi, kết quả và chứng chỉ trên blockchain:

1. DZAccessControl - Quản lý phân quyền và địa chỉ sinh viên
2. DZBlockChain - Quản lý thông tin blockchain
3. DZCertificate - Quản lý chứng chỉ
4. DZExamManager - Quản lý đề thi
5. DZReviewManager - Quản lý phúc khảo
6. DZScoreManager - Quản lý điểm số
7. DZStudentAnswer - Quản lý bài làm sinh viên
8. DZTestManager - Quản lý bài thi
9. DZTraceLogger - Ghi log hệ thống

## 🔐 DZAccessControl Contract

Contract quản lý phân quyền và địa chỉ sinh viên.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "./Errors.sol";

abstract contract DZAccessControl {
    // Mapping quản lý roles
    mapping(bytes32 => mapping(address => bool)) private _roles;
    mapping(bytes32 => bytes32) private _roleAdmins;

    // Định nghĩa các role
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant LECTURER_ROLE = keccak256("LECTURER_ROLE");
    bytes32 public constant STUDENT_ROLE = keccak256("STUDENT_ROLE");
    bytes32 public constant EMPLOYER_ROLE = keccak256("EMPLOYER_ROLE");

    // Mapping quản lý địa chỉ sinh viên
    mapping(uint256 => address) public studentAddresses;
    mapping(address => uint256) public addressToStudentId;

    // Events
    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);
    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);
    event StudentAddressSet(uint256 indexed student_id, address indexed studentAddress, address setBy);
    event StudentAddressUpdated(uint256 indexed student_id, address indexed oldAddress, address indexed newAddress, address updatedBy);

    // Modifier kiểm tra quyền
    modifier onlyRole(bytes32 role) {
        require(hasRole(role, msg.sender), "Access denied");
        _;
    }

    // Khởi tạo quyền ban đầu
    function _initializeAccessControl(address deployer) internal {
        _grantRole(DEFAULT_ADMIN_ROLE, deployer);
        _grantRole(ADMIN_ROLE, deployer);
        _setRoleAdmin(LECTURER_ROLE, ADMIN_ROLE);
        _setRoleAdmin(STUDENT_ROLE, ADMIN_ROLE);
        _setRoleAdmin(EMPLOYER_ROLE, ADMIN_ROLE);
    }

    // Kiểm tra quyền
    function hasRole(bytes32 role, address account) public view returns (bool) {
        return _roles[role][account];
    }

    // Cấp quyền
    function _grantRole(bytes32 role, address account) internal {
        if (!hasRole(role, account)) {
            _roles[role][account] = true;
            emit RoleGranted(role, account, msg.sender);
        }
    }

    // Thu hồi quyền
    function _revokeRole(bytes32 role, address account) internal {
        if (hasRole(role, account)) {
            _roles[role][account] = false;
            emit RoleRevoked(role, account, msg.sender);
        }
    }

    // Thiết lập admin cho role
    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal {
        _roleAdmins[role] = adminRole;
    }

    // Các hàm quản lý quyền
    function grantRole(bytes32 role, address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(role, account);
    }

    function revokeRole(bytes32 role, address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(role, account);
    }

    // Cấp quyền cho từng role cụ thể
    function grantLecturerRole(address account) public onlyRole(ADMIN_ROLE) {
        _grantRole(LECTURER_ROLE, account);
    }

    function grantStudentRole(address account) public onlyRole(ADMIN_ROLE) {
        _grantRole(STUDENT_ROLE, account);
    }

    function grantEmployerRole(address account) public onlyRole(ADMIN_ROLE) {
        _grantRole(EMPLOYER_ROLE, account);
    }

    // Thu hồi quyền cho từng role cụ thể
    function revokeLecturerRole(address account) public onlyRole(ADMIN_ROLE) {
        _revokeRole(LECTURER_ROLE, account);
    }

    function revokeStudentRole(address account) public onlyRole(ADMIN_ROLE) {
        _revokeRole(STUDENT_ROLE, account);
    }

    function revokeEmployerRole(address account) public onlyRole(ADMIN_ROLE) {
        _revokeRole(EMPLOYER_ROLE, account);
    }

    // Quản lý địa chỉ sinh viên
    function setStudentAddress(uint256 _student_id, address _studentAddress) public onlyRole(ADMIN_ROLE) {
        if(_student_id == 0) revert Errors.E003();
        if(_studentAddress == address(0)) revert Errors.E005();
        if(studentAddresses[_student_id] != address(0)) revert Errors.E203();
        if(addressToStudentId[_studentAddress] != 0) revert Errors.E202();

        studentAddresses[_student_id] = _studentAddress;
        addressToStudentId[_studentAddress] = _student_id;

        emit StudentAddressSet(_student_id, _studentAddress, msg.sender);
    }

    function updateStudentAddress(uint256 _student_id, address _newAddress) public onlyRole(ADMIN_ROLE) {
        if(_student_id == 0) revert Errors.E003();
        if(_newAddress == address(0)) revert Errors.E005();
        if(studentAddresses[_student_id] == address(0)) revert Errors.E201();
        if(addressToStudentId[_newAddress] != 0) revert Errors.E202();

        address oldAddress = studentAddresses[_student_id];
        delete addressToStudentId[oldAddress];
        studentAddresses[_student_id] = _newAddress;
        addressToStudentId[_newAddress] = _student_id;

        emit StudentAddressUpdated(_student_id, oldAddress, _newAddress, msg.sender);
    }

    // Truy vấn thông tin sinh viên
    function getStudentAddress(uint256 _student_id) public view returns (address) {
        return studentAddresses[_student_id];
    }

    function getStudentIdByAddress(address _address) public view returns (uint256) {
        return addressToStudentId[_address];
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