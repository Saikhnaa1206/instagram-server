const { postModel } = require("../../models/postSchema");

const getLikedUserOfOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const likes = await postModel
      .findById(id)
      .populate("likes", "username profileImage");
    res.send(likes);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getLikedUserOfOnePost };
