const { likeModel } = require("../../models/likeSchema");

const getLikedUserOfOnePost = async (req, res) => {
  const { id } = req.params;
  const likes = await likeModel.find({ postId: id }).populate({
    path: "userId",
    select: "username profileImage",
  });
  res.send(likes);
};
module.exports = { getLikedUserOfOnePost };
