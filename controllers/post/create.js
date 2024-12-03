const { postModel } = require("../../models/postSchema");
const { userModel } = require("../../models/userSchema");
const create = async (req, res) => {
  try {
    const body = req.body;
    const createPost = await postModel.create(body);
    const result = await userModel.findByIdAndUpdate(body.userId, {
      $push: {
        posts: createPost._id,
      },
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { create };
