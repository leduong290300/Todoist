const connectDatabase = require("../config/database");

const UserModels = {
  //* Get info users from system
  getInfoUser: function (email, callback) {
    return connectDatabase.query(
      "select * from users where email=?",
      [email],
      callback,
    );
  },

  //* Add new users to system
  addNewUser: function (user, callback) {
    return connectDatabase.query(
      "insert into users(firstName,lastName,email,password,avatarUrl) values(?,?,?,?,?)",
      [
        user.firstName,
        user.lastName,
        user.email,
        user.password,
        user.avatarUrl,
      ],
      callback,
    );
  },
};
module.exports = UserModels;
