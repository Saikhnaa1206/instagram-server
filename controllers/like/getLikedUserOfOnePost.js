const { postModel } = require("../../models/postSchema");

const getLikedUserOfOnePost = async (req, res) => {
  const { id } = req.params;
  const likes = await postModel
    .findById(id)
    .populate("userId", "username profileImage");
  res.send(likes);
};
module.exports = { getLikedUserOfOnePost };
