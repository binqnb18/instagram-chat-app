const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }, // Thuộc về bài đăng nào
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người viết bình luận
    text: { type: String, required: true }, // Nội dung bình luận
    createdAt: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Comment", commentSchema);
  