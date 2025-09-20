CRUD Demo - Part 1: Products & Suppliers Management
📌 Giới thiệu

Đây là project Part 1 của môn Lập trình Hướng Dịch vụ, được xây dựng bằng Node.js + Express + MongoDB + EJS.
Ứng dụng cho phép quản lý Sản phẩm (Products) và Nhà cung cấp (Suppliers) với đầy đủ chức năng CRUD (Create, Read, Update, Delete) thông qua giao diện web và Restful API.

Ngoài ra, project tích hợp Swagger UI để mô tả và kiểm thử API.

⚙️ Công nghệ sử dụng

Node.js (v20) và Express.js

MongoDB với thư viện Mongoose

EJS làm view engine

Bootstrap 5 để xây dựng giao diện nhanh

Swagger UI + swagger-jsdoc để sinh tài liệu API

dotenv để quản lý cấu hình

method-override hỗ trợ PUT/DELETE cho form

🚀 Hướng dẫn cài đặt

Clone repository về máy:

git clone <link-repo>
cd <tên-folder>


Cài đặt dependencies:

npm install


Tạo file .env trong thư mục gốc và thêm nội dung:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/part1_crud


Chạy server:

npm run start


Truy cập:

Giao diện web: http://localhost:3000

Swagger Docs: http://localhost:3000/api-docs

📚 Chức năng chính

Suppliers

Xem danh sách nhà cung cấp

Thêm mới, chỉnh sửa, xóa nhà cung cấp

Products

Xem danh sách sản phẩm

Thêm mới, chỉnh sửa, xóa sản phẩm

Mỗi sản phẩm có tham chiếu đến một nhà cung cấp

📝 Ghi chú

Thông tin cấu hình để trong file .env (không commit lên GitHub).

node_modules và .env đã được bỏ qua trong .gitignore.

Swagger hỗ trợ test API trực tiếp trên trình duyệt.