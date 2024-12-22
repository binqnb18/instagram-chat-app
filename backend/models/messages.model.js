const messageSchema = new mongoose.Schema({
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true }, // Thuộc về cuộc trò chuyện nào
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người gửi tin nhắn
    text: { type: String }, // Nội dung tin nhắn
    image: { type: String, default: "" }, // Hình ảnh (nếu có)
    isSeen: { type: Boolean, default: false }, // Trạng thái đã đọc
    createdAt: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Message", messageSchema);
   