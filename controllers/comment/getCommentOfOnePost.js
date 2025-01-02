const { commentModel } = require("../../models/commentSchema");

const getCommentOfOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await commentModel.find({ postId: id }).populate({
      path: "userId",
      select: "username profileImage",
    });
    res.send(comments);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getCommentOfOnePost };
