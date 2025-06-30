# Hướng dẫn cài đặt EduBridgeTrace

## ⚙️ Yêu cầu hệ thống

| Software     | Minimum Version       |
| ------------ | --------------------- |
| **Laravel**   | 12x                  |
| **Node.js**  | >=6.0.0              |
| **Npm**      | 10.9.2               |
| **MetaMask** | 11.x (Chrome/Firefox)|
| **Axios**    | 1.8.2                |
| **Vite**     | 6.2.4                |

## 🚀 Cài đặt

### 🌐 Production

```bash
# 1. Clone source code
git clone git@gitlab.com:ThanhTruong2311/blockchain_dtudz.git
cd blockchain_dtudz

# 2. Create config file
cp .env.example .env
# ✏️ Fill in Database, RPC endpoints, Pinata API key

# 3. Build & Deploy
./scripts/deploy-ecs.sh
```

### 💻 Local Development

```bash
# Backend Setup
composer i 
npm i
php artisan migrate
php artisan db:seed
npm run watch
php artisan server
```

## 👥 Tài khoản Demo

### ADMIN
- Email: admin@gmail.com
- Password: 123456

### STUDENT

**Account 1**
- Email: anh.nm220001@dtu.edu.vn
- Password: 123456

**Account 2**
- Email: binh.tv220002@sis.hust.edu.vn
- Password: 123456

### SCHOOL

**Account 1**
- Email: admin@dtu.edu.vn
- Password: 123456

**Account 2**
- Email: admin@uet.vnu.edu.vn
- Password: 123456

### LECTURER

**Account 1**
- Email: nguyenquoclong@dtu.edu.vn
- Password: 123456

**Account 2**
- Email: lehoangnam@hust.edu.vn
- Password: 123456

### BUSINESS

**Account 1**
- Email: hr@fpt.com.vn
- Password: 123456

**Account 2**
- Email: tuyen.dung@viettel.com.vn
- Password: 123456

## 🔍 Kiểm tra cài đặt

### 1. Frontend
- Truy cập: http://localhost:3000
- Kiểm tra kết nối MetaMask
- Test đăng nhập/đăng ký

### 2. Backend
- Health check: http://localhost:8000/health
- Swagger docs: http://localhost:8000/api-docs
- Test API endpoints

### 3. Database
- Kiểm tra migrations
- Verify seeded data
- Test connections

## 🐛 Xử lý lỗi thường gặp

### Laravel Issues
- Composer dependencies
- Migration errors
- Permission issues

### Frontend Issues
- Node version conflicts
- Build errors
- MetaMask connection

### Database Issues
- Connection strings
- Migration failures
- Seeding errors

## 🤝 Đóng góp

```bash
# 1. Fork the repository and clone to local
git clone git@gitlab.com:ThanhTruong2311/blockchain_dtudz.git
cd blockchain_dtudz

# 2. Create a new branch for the feature
git checkout -b feat/my-awesome-feature

# 3. Commit following Conventional Commits
git add .
git commit -m "feat: add new awesome feature"

# 4. Push and create a Pull Request
git push origin feat/my-awesome-feature
# 🔀 Create a Pull Request on GitLab
```

### 📋 Contribution Guidelines
- ✅ Follow [Conventional Commits](https://www.conventionalcommits.org/)
- ✅ Write tests for new code
- ✅ Ensure code passes all CI/CD checks
- ✅ Update documentation if needed

## 📚 Tài liệu tham khảo

- [Laravel Documentation](https://laravel.com/docs)
- [Vue.js Documentation](https://vuejs.org/)
- [MetaMask Documentation](https://docs.metamask.io/)
- [IPFS Documentation](https://docs.ipfs.tech/)

## 💡Nhà phát triển

- 📧 Email: thanhtruong23111999@gmail.com

- 📱 Hotline: 0376 659 652

*" 🏫 DTU_DZ - DUY TAN UNIVERSITY - SCS ✨"*

## 📞 Liên hệ
- Lê Thanh Trường       :  <u>thanhtruong23111999@gmail.com</u>
- Võ Văn Việt           :  <u>vietvo371@gmail.com</u>
- Nguyễn Ngọc Duy Thái  :  <u>kkdn011@gmail.com</u>

## 📚 Tài liệu
- [Hướng dẫn cài đặt](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)

## 🔄 Quy trình phát triển
1. Fork repo này
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`) 
5. Tạo Pull Request

## 🐛 Báo lỗi
Nếu bạn phát hiện lỗi, vui lòng tạo issue mới với:
- Mô tả chi tiết lỗi
- Các bước tái hiện
- Screenshots nếu có
- Môi trường (browser, OS...)

## 📜 Changelog
Xem [CHANGELOG](https://github.com/NguyenThai11103/DTU-Relieflink-documents/blob/main/CHANGELOG.md) để biết lịch sử thay đổi.

## ⚖️ Code of Conduct
Xem [CODE_OF_CONDUCT](https://github.com/NguyenThai11103/DTU-Relieflink-documents/blob/main/CODE_OF_CONDUCT.md) để biết các quy tắc và hành vi được chấp nhận.

## Báo cáo lỗi & Góp ý
- Issues: [GitHub Issues](https://github.com/Truongpyeo/DTURelifeLink/issues)
- Security: Đối với các vấn đề bảo mật nhạy cảm, vui lòng liên hệ trực tiếp qua email: <u>thanhtruong23111999@gmail.com</u>


### 📝 License
Dự án được phân phối dưới giấy phép [MIT License](https://github.com/NguyenThai11103/DTU-Relieflink-documents/blob/main/LICENSE
)


*"Được phát triển với ❤️ bởi Nhóm DTU-DZ"*
