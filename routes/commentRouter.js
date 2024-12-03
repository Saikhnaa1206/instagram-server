const express = require("express");
const { createComment } = require("../controllers/comment/createComment");
const commentRouter = express();
commentRouter.post("/createComment", createComment);
module.exports = { commentRouter };
