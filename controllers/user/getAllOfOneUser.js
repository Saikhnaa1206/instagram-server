const { userModel } = require("../../models/userSchema");

const getAllOfOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId).populate({
      path: "posts",
      select: "postImage caption ",
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getAllOfOneUser };
