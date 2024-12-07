const { commentModel } = require("../../models/commentSchema");

const getCommentOfOnePost = async (req, res) => {
  const comments = await commentModel.find({ postId: req.body.id });
  res.send(comments);
};
module.exports = { getCommentOfOnePost };
