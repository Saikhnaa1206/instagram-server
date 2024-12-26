const { likeModel } = require("../../models/likeSchema");
const { postModel } = require("../../models/postSchema");

const unlikeToPost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const unlikedUser = await likeModel.findOneAndDelete({ postId, userId });
    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      {
        $pull: { likes: unlikedUser._id },
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { unlikeToPost };
