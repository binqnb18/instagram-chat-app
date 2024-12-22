const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  ], // Danh sách người tham gia
  messages: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Message" }
  ], // Tham chiếu đến các tin nhắn trong cuộc trò chuyện
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Conversation", conversationSchema);
