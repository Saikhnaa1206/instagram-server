const { commentModel } = require("../../models/commentSchema");

const getCommentOfOnePost = async (req, res) => {
  const { id } = req.params;
  const comments = await commentModel.find({ postId: id });
  res.send(comments);
};
module.exports = { getCommentOfOnePost };
