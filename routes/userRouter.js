const express = require("express");
const { signup } = require("../controllers/user/signup");
const { login } = require("../controllers/user/login");
const { follow } = require("../controllers/user/follow");
const { unfollow } = require("../controllers/user/unfollow");
const { getAllOfOneUser } = require("../controllers/user/getAllOfOneUser");
const { authToken } = require("../controllers/middleware/authorization");
const { updateUser } = require("../controllers/user/updateUser");
const {
  getFollowedUsersOfOneUser,
} = require("../controllers/user/getFollowedUsersOfOneUser");
const {
  getFollowingUsersOfOneUser,
} = require("../controllers/user/getFollowingUsersOfOneUser");
const userRouter = express();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/follow", authToken, follow);
userRouter.post("/unfollow", authToken, unfollow);
userRouter.get(
  "/getFollowedUsersOfOneUser/:userId",
  authToken,
  getFollowedUsersOfOneUser
);
userRouter.get(
  "/getFollowingUsersOfOneUser/:userId",
  authToken,
  getFollowingUsersOfOneUser
);
userRouter.get("/getAllOfOneUser/:userId", authToken, getAllOfOneUser);
userRouter.put("/updateUser", authToken, updateUser);
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
