const { commentModel } = require("../../models/commentSchema");

const getCommentOfOnePost = async (req, res) => {
  const { postId } = req.query;
  const comments = await commentModel.find({ postId });
  res.send(comments);
};
module.exports = { getCommentOfOnePost };
