const { userModel } = require("../../models/userSchema");
const follow = async (req, res) => {
  try {
    const followingUserId = req.body.followingUserId;
    const userId = req.body.userId;
    const following = await userModel.findByIdAndUpdate(userId, {
      $addToSet: {
        following: followingUserId,
      },
      new: true,
    });
    const follower = await userModel.findByIdAndUpdate(followingUserId, {
      $addToSet: {
        followers: userId,
      },
      new: true,
    });
    console.log(follower);
    res.send(following);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { follow };
