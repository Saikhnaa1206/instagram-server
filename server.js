const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { userRouter } = require("../server/routes/userRouter");
const { postRouter } = require("../server/routes/postRouter");
const { commentRouter } = require("../server/routes/commentRouter");
const { likeRouter } = require("../server/routes/likeRouter");

dotenv.config();
const connectDataBase = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  if (res) console.log("db connected");
};
connectDataBase();

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/like", likeRouter);
const PORT = 8080;
app.listen(PORT, console.log(`Your server is running in ${PORT}`));
