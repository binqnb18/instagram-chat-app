const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Người dùng sở hữu token
    refreshToken: {
      type: String,
      required: true,
    }, // Refresh Token
    createdAt: {
      type: Date,
      default: Date.now,
    }, // Thời gian tạo token
    expiresAt: {
      type: Date,
      required: true,
    }, // Thời gian hết hạn token
  },
  { timestamps: true } // Tự động thêm createdAt và updatedAt
);

module.exports = mongoose.model("Token", tokenSchema);
