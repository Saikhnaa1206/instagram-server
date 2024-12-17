const express = require("express");
const { likeToPost } = require("../controllers/like/like");
const { authToken } = require("../controllers/middleware/authorization");
const {
  getLikedUserOfOnePost,
} = require("../controllers/like/getLikedUserOfOnePost");
const likeRouter = express();
likeRouter.post("/likeToPost", authToken, likeToPost);
likeRouter.get(`/getLikedUserOfOnePost/:id`, authToken, getLikedUserOfOnePost);
module.exports = { likeRouter };
