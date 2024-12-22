import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Thông tin cơ bản
  username: { type: String, required: true, unique: true }, // Tên người dùng (duy nhất)
  email: { type: String, required: true, unique: true }, // Email (duy nhất)
  password: { type: String, required: true }, // Mật khẩu (hashed)
  fullName: { type: String, required: false }, // Tên đầy đủ
  avatar: { type: String, default: "" }, // URL ảnh đại diện
  bio: { type: String, default: "" }, // Thông tin giới thiệu ngắn
  gender: { type: String, enum: ["male", "female", "other"], default: "other" }, // Giới tính
  mobile: { type: String, default: "" }, // Số điện thoại
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }, // Vai trò
  status: { type: String, enum: ["Active", "Inactive", "Suspended"], default: "Active" }, // Trạng thái tài khoản

    // Liên kết với các bài viết
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }], // Thêm trường này
    // Liên kết với các bài viết đã bookmark
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],

  // Xác thực và bảo mật
  isVerified: { type: Boolean, default: false }, // Trạng thái xác thực email
  verificationToken: { type: String, default: null }, // Token xác thực email
  verificationTokenExpiresAt: { type: Date, default: null }, // Hạn sử dụng token xác thực email
  resetPasswordToken: { type: String, default: null }, // Token đặt lại mật khẩu
  resetPasswordExpiresAt: { type: Date, default: null }, // Hạn sử dụng token đặt lại mật khẩu

  // Refresh Token cho đăng nhập
  refreshToken: { type: String, default: null }, // Token làm mới phiên đăng nhập

  // Dữ liệu hoạt động
  lastLogin: { type: Date, default: Date.now }, // Lần đăng nhập cuối
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Danh sách người theo dõi
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Danh sách người đang theo dõi
  blocked: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Danh sách người dùng bị chặn

  // Thời gian tạo và cập nhật
  createdAt: { type: Date, default: Date.now }, // Thời gian tạo tài khoản
  updatedAt: { type: Date, default: Date.now }, // Thời gian cập nhật gần nhất
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User; // Dùng export default
