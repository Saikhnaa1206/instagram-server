const { postModel } = require("../../models/postSchema");
const captionEdit = async (req, res) => {
  try {
    const { caption, postId } = req.body;
    const updatePost = await postModel.findByIdAndUpdate(postId, {
      caption,
    });
    res.send(updatePost);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { captionEdit };
