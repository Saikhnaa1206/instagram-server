const express = require("express");
const { create } = require("../controllers/post/create");
const { posts } = require("../controllers/post/posts");
const { getPostsOfOneUser } = require("../controllers/post/getPostsOfOneUser");
const { authToken } = require("../controllers/middleware/authorization");
const postRouter = express();
postRouter.post("/create", authToken, create);
postRouter.get("/posts", authToken, posts);
postRouter.get("/getPostsOfOneUser/:userId", authToken, getPostsOfOneUser);

module.exports = { postRouter };
