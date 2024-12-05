const posts = async (req, res) => {
  const post = await postModel
    .find()
    .populate("comments", "comment userId postId");
  res.send(post);
};
module.exports = { posts };
