const { likeModel } = require("../../models/likeSchema");
const { postModel } = require("../../models/postSchema");

const unlikeToPost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const like = await likeModel.findOneAndDelete({
      postId,
      userId,
    });
    console.log(like._id);
    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      {
        $pull: { likes: like._id },
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { unlikeToPost };
