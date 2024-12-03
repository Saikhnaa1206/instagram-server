const { userModel } = require("../../models/userSchema");
const unfollow = async (req, res) => {
  try {
    const userId = req.body.userId;
    const unfollowingUserId = req.body.unfollowingUserId;

    const unfollowing = await userModel.findByIdAndUpdate(userId, {
      $pull: {
        following: unfollowingUserId,
      },
      new: true,
    });

    const unfollower = await userModel.findByIdAndUpdate(unfollowingUserId, {
      $pull: {
        followers: userId,
      },
      new: true,
    });
    console.log(unfollower);
    res.send(unfollowing);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { unfollow };
