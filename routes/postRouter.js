const express = require("express");
const { create } = require("../controllers/post/create");
const { posts } = require("../controllers/post/posts");
const { getPostsOfOneUser } = require("../controllers/post/getPostsOfOneUser");
const { authToken } = require("../controllers/middleware/authorization");
const { deletePost } = require("../controllers/post/delete");
const postRouter = express();
postRouter.post("/create", authToken, create);
postRouter.post("/delete", authToken, deletePost);
postRouter.get("/posts", authToken, posts);
postRouter.get("/getPostsOfOneUser/:userId", authToken, getPostsOfOneUser);

module.exports = { postRouter };
