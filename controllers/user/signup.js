const { userModel } = require("../../models/userSchema");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    const user = req.body;
    const hashedPass = await bcrypt.hash(user.password, 10);
    const response = await userModel.create({ ...user, password: hashedPass });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { signup };
