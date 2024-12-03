const express = require("express");
const { likeToPost } = require("../controllers/like/like");
const likeRouter = express();
likeRouter.post("/likeToPost", likeToPost);
module.exports = { likeRouter };
