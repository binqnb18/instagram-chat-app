const userChatSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người dùng
    chats: [
      {
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true }, // ID cuộc trò chuyện
        lastMessage: { type: String, default: "" }, // Tin nhắn cuối cùng
        updatedAt: { type: Date, default: Date.now },
        isSeen: { type: Boolean, default: false }, // Trạng thái đã đọc
      }
    ],
  }, { timestamps: true });
  
  module.exports = mongoose.model("UserChat", userChatSchema);
  