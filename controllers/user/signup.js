const { userModel } = require("../../models/userSchema");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const response = await userModel.create({
      email,
      username,
      password: hashedPass,
    });
    const token = jwt.sign(
      {
        userId: response._id,
        username: response.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.json({
      user: {
        id: response._id,
        username: response.username,
        email: response.email,
        profileImage: response.profileImage,
      },
      token,
    });
  } catch (error) {
    res.send(error);
  }
};
module.exports = { signup };
