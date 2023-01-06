const User = require("../models/UserModels");
const argon2 = require("argon2");

const handleRegisterUser = async (req, res) => {
  const { firstName, lastName, email, password, avatarUrl } = req.body;
  try {
    await User.getInfoUser(email, function (err) {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: "Email đăng ký đã được sử dụng" });
      }
    });

    const hashPassword = await argon2.hash(password);
    const newUser = { firstName, lastName, email, hashPassword, avatarUrl };
    await User.addNewUser(newUser, function (err) {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: "Đăng ký tài khoản thất bại" });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Đăng ký tài khoản thành công" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi máy chủ" });
  }
};
module.exports = { handleRegisterUser };
