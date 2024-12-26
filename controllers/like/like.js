const { likeModel } = require("../../models/likeSchema");
const { postModel } = require("../../models/postSchema");

const likeToPost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const likedUser = await likeModel.create({ postId, userId });
    const result = await postModel.findByIdAndUpdate(
      postId,
      {
        $addToSet: {
          likes: likedUser._id,
        },
      },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { likeToPost };
