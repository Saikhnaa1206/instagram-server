const express = require("express");
const { likeToPost } = require("../controllers/like/like");
const { authToken } = require("../controllers/middleware/authorization");
const likeRouter = express();
likeRouter.post("/likeToPost", authToken, likeToPost);
module.exports = { likeRouter };
