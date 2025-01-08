const { postModel } = require("../../models/postSchema");

const getPostsOfOneUser = async (req, res) => {
    const { userId } = req.params;
  try {
    const posts = await postModel.find({userId: userId}).populate({
        path: "userId",
        select: "username profileImage",
    });
    res.send(posts);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getPostsOfOneUser };
