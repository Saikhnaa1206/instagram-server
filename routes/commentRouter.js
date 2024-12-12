const express = require("express");
const { createComment } = require("../controllers/comment/createComment");
const {
  getCommentOfOnePost,
} = require("../controllers/comment/getCommentOfOnePost");
const { authToken } = require("../controllers/middleware/authorization");
const commentRouter = express();
commentRouter.post("/createComment", authToken, createComment);
commentRouter.get(`/getCommentOfOnePost/:id`, authToken, getCommentOfOnePost);
module.exports = { commentRouter };
