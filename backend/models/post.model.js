import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: { type: String, default: "" }, // Nội dung bài đăng
  image: { type: String, required: true }, // Ảnh bài đăng
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người tạo bài đăng
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Danh sách người dùng đã thích bài viết
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Danh sách bình luận
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Post", postSchema); // Sử dụng export default
