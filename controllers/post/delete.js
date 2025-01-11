const { postModel } = require("../../models/postSchema");
const { userModel } = require("../../models/userSchema");
const deletePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const deletedPost = await postModel.findByIdAndDelete(postId);
    const result = await userModel.findByIdAndUpdate(userId, {
      $pull: {
        posts: postId,
      },
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { deletePost };
