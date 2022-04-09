const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const AuthRouter = require("./router/AuthRouter");
const PostRouter = require("./router/PostRouter");
const connectDatabase = require("./config/database");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
connectDatabase();
app.use(express.json());

app.use("/api/auth", AuthRouter);
app.use("/api/post", PostRouter);

app.listen(PORT);
