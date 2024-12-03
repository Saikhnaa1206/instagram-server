const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { userRouter } = require("./routes/userRouter");
const { postRouter } = require("./routes/postRouter");
const { commentRouter } = require("./routes/commentRouter");
const { likeRouter } = require("./routes/likeRouter");
dotenv.config();

const app = express();
app.use(cors());
const connectDataBase = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  if (res) console.log("db connected");
};
connectDataBase();

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/like", likeRouter);
const PORT = 8080;
app.listen(PORT, console.log(`Your server is running in ${PORT}`));
