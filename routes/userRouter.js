const express = require("express");
const { signup } = require("../controllers/user/signup");
const { login } = require("../controllers/user/login");
const { follow } = require("../controllers/user/follow");
const { unfollow } = require("../controllers/user/unfollow");
const { getAllOfOneUser } = require("../controllers/user/getAllOfOneUser");
const { authToken } = require("../controllers/middleware/authorization");
const userRouter = express();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/follow", authToken, follow);
userRouter.post("/unfollow", authToken, unfollow);
userRouter.get("/getAllOfOneUser/:userId", authToken, getAllOfOneUser);
const { userModel } = require("../models/userSchema");
userRouter.get("/users", async (req, res) => {
  const post = await userModel.find().populate({
    path: "posts",
    select: "postImage caption ",
    populate: { path: "comments", select: "comment" },
  });
  res.send(post);
});
module.exports = { userRouter };
