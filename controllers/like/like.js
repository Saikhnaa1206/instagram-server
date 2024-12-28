const { postModel } = require("../../models/postSchema");

const likeToPost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const result = await postModel.findByIdAndUpdate(
      postId,
      {
        $addToSet: {
          likes: userId,
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
