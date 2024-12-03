const express = require("express");
const { signup } = require("../controllers/user/signup");
const { follow } = require("../controllers/user/follow");
const { unfollow } = require("../controllers/user/unfollow");
const userRouter = express();
userRouter.post("/signup", signup);
userRouter.post("/follow", follow);
userRouter.post("/unfollow", unfollow);
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
