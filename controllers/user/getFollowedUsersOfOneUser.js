const { userModel } = require("../../models/userSchema");
const getFollowedUsersOfOneUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const followedUsers = await userModel.findById({ _id: userId }).populate({
      path: "followers",
      select: "profileImage username ",
    });
    res.send(followedUsers.followers);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getFollowedUsersOfOneUser };
