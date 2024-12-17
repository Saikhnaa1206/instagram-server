const { postModel } = require("../../models/postSchema");
const posts = async (req, res) => {
  try {
    const post = await postModel.find().populate({
      path: "userId",
      select: "username profileImage",
    });

    res.send(post);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { posts };
