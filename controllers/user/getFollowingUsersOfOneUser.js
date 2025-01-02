const { userModel } = require("../../models/userSchema");
const getFollowingUsersOfOneUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const followingUsers = await userModel.findById({ _id: userId }).populate({
      path: "following",
      select: "profileImage username ",
    });
    console.log(followingUsers);
    res.send(followingUsers.following);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getFollowingUsersOfOneUser };
