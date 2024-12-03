const { likeModel } = require("../../models/likeSchema");
const { postModel } = require("../../models/postSchema");
const likeToPost = async (req, res) => {
  try {
    const body = req.body;
    const like = await likeModel.create(body);
    const result = await postModel.findByIdAndUpdate(body.postId, {
      $addToSet: {
        likes: like._id,
      },
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { likeToPost };
