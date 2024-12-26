const { likeModel } = require("../../models/likeSchema");

const getLikedUserOfOnePost = async (req, res) => {
  const { id } = req.params;
  const likes = await likeModel.findOne({ postId: id }).populate("userId");
  res.send(likes);
};
module.exports = { getLikedUserOfOnePost };
