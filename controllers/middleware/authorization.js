const jwt = require("jsonwebtoken");
const authToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (!token) resizeBy.json({ message: "no token" });
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decodedToken);
};
module.exports = { authToken };
