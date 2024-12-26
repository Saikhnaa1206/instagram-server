const { likeModel } = require("../../models/likeSchema");

const getLikedUserOfOnePost = async (req, res) => {
  const { id } = req.params;
  const likes = await likeModel.findOne({ postId: id }).populate({
    path: "userId",
    select: "username profileImage",
  });
  res.send(likes);
};
module.exports = { getLikedUserOfOnePost };
