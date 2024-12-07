const express = require("express");
const { createComment } = require("../controllers/comment/createComment");
const {
  getCommentOfOnePost,
} = require("../controllers/comment/getCommentOfOnePost");
const commentRouter = express();
commentRouter.post("/createComment", createComment);
commentRouter.get("/getCommentOfOnePost", getCommentOfOnePost);
module.exports = { commentRouter };
