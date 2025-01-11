const { userModel } = require("../../models/userSchema");
const updateUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body);
    res.send(updatedUser);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { updateUser };
