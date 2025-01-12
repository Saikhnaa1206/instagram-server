const { userModel } = require("../../models/userSchema");
const removeOneUser = async (req, res) => {
  try {
    const deletingUserId = req.body.deletingUserId;
    const userId = req.body.userId;
    const a = await userModel.findByIdAndUpdate(userId, {
      $pull: {
        followers: deletingUserId,
      },
      new: true,
    });
    const b = await userModel.findByIdAndUpdate(deletingUserId, {
      $pull: {
        following: userId,
      },
      new: true,
    });
    console.log(b);
    res.send(a);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { removeOneUser };
