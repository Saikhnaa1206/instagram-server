const express = require("express");
const { create } = require("../controllers/post/create");
const { posts } = require("../controllers/post/posts");
const { post } = require("../controllers/post/post");
const postRouter = express();
postRouter.post("/create", create);
const { postModel } = require("../models/postSchema");
postRouter.get("/posts", posts);
postRouter.get("/post", post);

module.exports = { postRouter };
