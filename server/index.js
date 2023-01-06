const express = require("express");
const bodyparser = require("body-parser");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const UserRouter = require("./router/UserRouter");
const TaskRouter = require("./router/TaskRouter");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
connectDatabase();

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/tasks", TaskRouter);

app.listen(port, console.log("Done"));

module.exports = app;
