const { postModel } = require("../../models/postSchema");
const post = async (req, res) => {
  const post = await postModel
    .findById(req.body.id)
    .populate({
      path: "comments",
      select: "comment userId postId ",
      populate: {
        path: "userId",
        select: "username profileImage",
      },
    })
    .populate({
      path: "likes",
      populate: {
        path: "userId",
        select: "username profileImage",
      },
    })
    .populate({
      path: "userId",
      select: "username profileImage",
    });

  res.send(post);
};
module.exports = { post };
