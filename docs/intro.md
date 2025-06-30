# EduBridgeTrace

### *Decentralized Degree & Recruitment Management Platform*
> *"Connect – Authenticate – Empower"*


[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)


## 📖 Tổng quan

**EduBridgeTrace** là một dự án mã nguồn mở kết hợp công nghệ **Web2** (Laravel, MySQL, Redis) với **Web3** (Ethereum, IPFS, Filecoin) để xây dựng một hệ sinh thái chứng nhận học thuật và tuyển dụng minh bạch, không thể giả mạo.

## 👥 Đối tượng người dùng

| 👩‍🏫 Giảng viên | 🎓 Sinh viên | 💼 Nhà trường | 🏢 Nhà tuyển dụng |
|----------------|-------------|-------------------|-------------------|
| Phát hành và xác minh chứng chỉ | Lưu trữ & chia sẻ hồ sơ bất biến | Đảm bảo chất lượng học thuật | Xác thực & đánh giá ứng viên |

### Demo Accounts

**ADMIN:**
- Email: admin@gmail.com
- Password: 123456

**STUDENT:**
- Email: anh.nm220001@dtu.edu.vn
- Password: 123456

**SCHOOL:**
- Email: admin@dtu.edu.vn
- Password: 123456

**LECTURER:**
- Email: nguyenquoclong@dtu.edu.vn
- Password: 123456

**BUSINESS:**
- Email: hr@fpt.com.vn
- Password: 123456

## 🏗️ Kiến trúc hệ thống

### Frontend
- Vue 3, Bootstrap 5
- SPA interface cho 4 loại người dùng
- Phản hồi nhanh, đa thiết bị

### Web3 Gateway
- `web3.js` / `ethers.js` + MetaMask
- Ký và gửi giao dịch, đọc blockchain
- UX quen thuộc, bảo mật private key

### Cache
- AWS ElastiCache (Redis)
- Key-value store, pub/sub
- Tăng tốc truy vấn, lưu trữ phiên

### Backend (Containers)
- Laravel
- API REST/GraphQL
- Apache / Nginx

### Database
- AWS RDS (MySQL 8)
- Dữ liệu quan hệ (users, courses, recruitment)
- Backup tự động, Multi-AZ

### Object Storage
- AWS S3
- File frontend tĩnh, CV, media
- Bảo mật IAM, versioning

### Smart Contracts
- Solidity + OpenZeppelin
- NFT-degree, utility token
- Triển khai trên Ethereum & Testnet

### Distributed Storage
- IPFS + Pinata
- Lưu trữ metadata bằng cấp, file lớn
- Hash bất biến, CDN gateway miễn phí

### Long-term Storage
- Filecoin
- Storage deal cho dữ liệu "hot"
- Cam kết độ bền, chi phí thấp

## 🔐 Bảo mật

- Xác thực đa yếu tố
- Mã hóa dữ liệu nhạy cảm
- Kiểm soát quyền truy cập
- Audit logs

## 💡 Tính năng chính

### Quản lý văn bằng
- Phát hành chứng chỉ NFT
- Xác minh tức thì
- Lưu trữ phi tập trung

### Tuyển dụng
- Hồ sơ ứng viên blockchain
- Xác thực tự động
- Kết nối doanh nghiệp-trường

### Liên kết trường
- Chia sẻ dữ liệu học thuật
- Chuyển tiếp tín chỉ
- Xác thực liên trường

## 📞 Liên hệ

### Team Members
| Role      | Name                    | Email                                                                 |
| --------- | ----------------------- | --------------------------------------------------------------------- |
| Leader    | **Nguyễn Quốc Long**     | [quoclongdng@gmail.com](mailto:quoclongdng@gmail.com)                 |
| Developer | **Lê Thanh Trường**      | [thanhtruong23111999@gmail.com](mailto:thanhtruong23111999@gmail.com) |
| Developer | **Võ Văn Việt**          | [vietvo371@gmail.com](mailto:vietvo371@gmail.com)                     |
| Developer | **Nguyễn Văn Nhân**      | [vannhan130504@gmail.com](mailto:vannhan130504@gmail.com)             |
| Developer | **Nguyễn Ngọc Duy Thái** | [kkdn011@gmail.com](mailto:kkdn011@gmail.com)                         |

## 📝 License

Released under the MIT License – see [LICENSE](/LICENSE) file for details.

© 2025 EduBridgeTrace – Build trust, unlock opportunity.
