# Tổng quan về EduBridgeTrace

> *"Connect – Authenticate – Empower"*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](../LICENSE)
[![Open issues](https://img.shields.io/github/issues/ThanhTruong2311/blockchain_dtudz.svg 'Open issues')](https://gitlab.com/ThanhTruong2311/blockchain_dtudz/-/issues)
[![Open Pull Requests](https://img.shields.io/github/issues-pr/ThanhTruong2311/blockchain_dtudz.svg 'Open Pull Requests')](https://gitlab.com/ThanhTruong2311/blockchain_dtudz/-/merge_requests)
[![Commit activity](https://img.shields.io/github/commit-activity/m/ThanhTruong2311/blockchain_dtudz.svg 'Commit activity')](https://gitlab.com/ThanhTruong2311/blockchain_dtudz/-/graphs)

## 📖 Giới thiệu

**EduBridgeTrace** là một dự án mã nguồn mở kết hợp công nghệ **Web2** (Laravel, MySQL, Redis) với **Web3** (Ethereum, IPFS, Filecoin) để xây dựng một hệ sinh thái chứng nhận học thuật và tuyển dụng minh bạch, không thể giả mạo.

## 🎯 Mục tiêu

- **Xác thực văn bằng**: Lưu trữ và xác minh văn bằng trên blockchain
- **Kết nối giáo dục**: Tạo cầu nối dữ liệu giữa các trường
- **Tuyển dụng minh bạch**: Hệ thống xác thực thông tin ứng viên

## 💡 Tính năng chính

### 🎓 Quản lý văn bằng
- Phát hành chứng chỉ NFT
- Xác minh tức thì
- Lưu trữ phi tập trung

### 👥 Tuyển dụng
- Hồ sơ ứng viên blockchain
- Xác thực tự động
- Kết nối doanh nghiệp-trường

### 🤝 Liên kết trường
- Chia sẻ dữ liệu học thuật
- Chuyển tiếp tín chỉ
- Xác thực liên trường

## 🏗️ Kiến trúc hệ thống

### Frontend
- Vue 3, Bootstrap 5
- SPA interface cho 3 loại người dùng
- Phản hồi nhanh, đa thiết bị

### Backend
- Laravel Framework
- REST/GraphQL API
- Queue workers

### Database & Cache
- MySQL 8 (AWS RDS)
- Redis (AWS ElastiCache)
- IPFS + Filecoin

### Blockchain
- Smart Contracts (Solidity)
- NFT Standards
- MetaMask Integration

## 👥 Đối tượng người dùng

### 👨‍🏫 Giảng viên
- Phát hành và xác minh chứng chỉ
- Quản lý kết quả học tập
- Xác nhận thành tích

### 👨‍🎓 Sinh viên
- Nhận và quản lý chứng chỉ NFT
- Chia sẻ thành tích học tập
- Tạo hồ sơ blockchain

### 🏛️ Nhà trường
- Quản lý văn bằng số
- Xác thực liên trường
- Phân tích dữ liệu

### 🏢 Nhà tuyển dụng
- Xác minh văn bằng
- Tìm kiếm ứng viên
- Đánh giá năng lực

## ⚙️ Yêu cầu hệ thống

| Software     | Minimum Version       |
| ------------ | --------------------- |
| **Laravel**   | 12x                  |
| **Node.js**  | >=6.0.0              |
| **Npm**      | 10.9.2               |
| **MetaMask** | 11.x (Chrome/Firefox)|
| **Axios**    | 1.8.2                |
| **Vite**     | 6.2.4                |

## 🔐 Bảo mật

- Xác thực đa yếu tố
- Mã hóa dữ liệu nhạy cảm
- Smart contract audit
- Access control

## 👥 Team Members

| Role      | Name                    | Email                                                                 |
| --------- | ----------------------- | --------------------------------------------------------------------- |
| Leader    | **Nguyễn Quốc Long**     | [quoclongdng@gmail.com](mailto:quoclongdng@gmail.com)                 |
| Developer | **Lê Thanh Trường**      | [thanhtruong23111999@gmail.com](mailto:thanhtruong23111999@gmail.com) |
| Developer | **Võ Văn Việt**          | [vietvo371@gmail.com](mailto:vietvo371@gmail.com)                     |
| Developer | **Nguyễn Văn Nhân**      | [vannhan130504@gmail.com](mailto:vannhan130504@gmail.com)             |
| Developer | **Nguyễn Ngọc Duy Thái** | [kkdn011@gmail.com](mailto:kkdn011@gmail.com)                         |

## 🤝 Đóng góp

```bash
# 1. Fork repository
git clone git@gitlab.com:ThanhTruong2311/blockchain_dtudz.git
cd blockchain_dtudz

# 2. Create feature branch
git checkout -b feat/my-feature

# 3. Commit changes
git commit -m "feat: add new feature"

# 4. Create Pull Request
git push origin feat/my-feature
```

### Contribution Guidelines
- ✅ Follow [Conventional Commits](https://www.conventionalcommits.org/)
- ✅ Write tests for new code
- ✅ Update documentation
- ✅ Follow code style guide

## 📝 License

Released under the MIT License – see [LICENSE](../LICENSE) file for details.

© 2025 EduBridgeTrace – Build trust, unlock opportunity.




