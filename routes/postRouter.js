const express = require("express");
const { create } = require("../controllers/post/create");
const { posts } = require("../controllers/post/posts");
const { authToken } = require("../controllers/middleware/authorization");
const postRouter = express();
postRouter.post("/create", authToken, create);
postRouter.get("/posts", authToken, posts);

module.exports = { postRouter };
