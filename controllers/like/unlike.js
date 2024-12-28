const { postModel } = require("../../models/postSchema");

const unlikeToPost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      {
        $pull: { likes: userId },
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { unlikeToPost };
