import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";


export const signup = async (req, res) => {
    try {
      const { username, email, password, confirmPassword} = req.body;
      if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({
          message: "Username, email, password, and confirmPassword are required",
          success: false,
        });
      }
      if (password !== confirmPassword) {
        return res.status(400).json({
          message: "Passwords do not match",
          success: false,
        });
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          message: "Email is already registered",
          success: false,
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
      // Tạo người dùng mới
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        verificationToken,
        verificationTokenExpires: Date.now() + 600000, // 10 phút
        
      });

      generateTokenAndSetCookie(res, newUser._id);
  
      await newUser.save();
      return res.status(201).json({
        message: "Account created successfully.",
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred during registration",
        success: false,
        error: error.message,
      });
    }
  };

export const login = (req, res) => {
    res.send("login route");
}

export const logout = (req, res) => {
    res.send("logout route");
}