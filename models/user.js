const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Must Have Name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "User Must Have Email"],
    unique: [true, "Email Already Exist"],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw { message: "Email tidak sah!" };
      }
    },
  },
  password: {
    type: String,
    required: [true, "User Must Have Password"],
    trim: true,
    validate(value) {
      if (!validator.isLength(value, { min: 6 })) {
        throw { message: "Password minimal 6 karakter!" };
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: [true, "Please Give The Token"],
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.statics.cekUser = async (email, pass) => {
  if (!validator.isEmail(email)) throw { message: "Email Not Valid!" };

  const user = await User.findOne({ email });

  if (!user) {
    throw { message: "Email sudah terdaftar!" };
  }

  const matchPass = await bcryptjs.compare(pass, user.password);
  if (!matchPass) {
    throw { message: "Password salah!" };
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcryptjs.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
