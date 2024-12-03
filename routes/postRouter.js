const express = require("express");
const { create } = require("../controllers/post/create");
const postRouter = express();
postRouter.post("/create", create);
const { postModel } = require("../models/postSchema");
postRouter.get("/posts", async (req, res) => {
  const post = await postModel
    .find()
    .populate("comments", "comment userId postId");
  res.send(post);
});

module.exports = { postRouter };
