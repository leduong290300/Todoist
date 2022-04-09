const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModels");

const AuthController = {
  /**
   * @params /api/auth/register
   * @description Đăng ký tài khoản
   */
  handleRegisteAccount: async (req, res) => {
    const { username, password } = req.body;
    try {
      const userExits = await User.findOne({ username: username });
      if (userExits)
        return res
          .status(400)
          .json({ success: false, message: "Tên đăng nhập đã được sử dụng" });

      const hashPassword = await argon2.hash(password);
      const newUser = new User({ username, password: hashPassword });
      await newUser.save();

      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.ACCESS_TOKEN,
      );
      return res.json({
        success: true,
        message: "Đăng ký tài khoản thành công",
        accessToken: accessToken,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Xảy ra lỗi" });
    }
  },

  /**
   * @params /api/auth/login
   * @description Đăng nhập tài khoản
   */
  handleLoginAccount: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username: username });
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "Tài khoản không tồn tại" });

      const passwordValid = await argon2.verify(user.password, password);
      if (!passwordValid)
        return res.status(400).json({
          success: false,
          message: "Tên đăng nhập hoặc mật khẩu không chính xác",
        });

      if (user && passwordValid) {
        const accessToken = jwt.sign(
          { userId: user._id },
          process.env.ACCESS_TOKEN,
        );
        const { password, ...others } = user._doc;
        res.json({
          success: true,
          message: "Đăng nhập tài khoản thành công",
          accessToken: accessToken,
          user: others,
        });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: "Xảy ra lỗi" });
    }
  },

  /**
   * @params /api/auth
   * @description Xác thực người dùng
   */
  verifyAuth: async (req, res) => {
    try {
      const user = await User.findById(req.userId).select("-password");
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "Người dùng không tồn tại" });
      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Lỗi máy chủ" });
    }
  },
};
module.exports = AuthController;
