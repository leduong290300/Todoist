const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@todoist.p8qzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log(`Connect database successfully`);
  } catch (error) {
    process.exit(1);
  }
};
module.exports = connectDatabase;
