const { commentModel } = require("../../models/commentSchema");
const { postModel } = require("../../models/postSchema");
const createComment = async (req, res) => {
  try {
    const body = req.body;
    const createComment = await commentModel.create(body);
    const result = await postModel.findByIdAndUpdate(body.postId, {
      $push: {
        comments: createComment._id,
      },
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createComment };
