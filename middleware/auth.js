const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const header = req.header("Authorization");
    const token = header.split(" ");

    if (token[0] != "Bearer") throw new Error("Invalid Format");

    const decoded = jwt.verify(token[1], process.env.SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) throw new Error("User Not Found");

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ message: "Anda Belum Login" });
  }
};

module.exports = auth;
