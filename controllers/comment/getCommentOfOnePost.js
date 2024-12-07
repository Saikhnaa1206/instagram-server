const { commentModel } = require("../../models/commentSchema");

const getCommentOfOnePost = async (req, res) => {
  const { id } = req.query;
  const comments = await commentModel.find({ postId: id });
  res.send(comments);
};
module.exports = { getCommentOfOnePost };
