const mysql = require("mysql");

const connectDatabase = async () => {
  try {
    await mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
    console.log("Connect to database successfully");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};
module.exports = connectDatabase;
