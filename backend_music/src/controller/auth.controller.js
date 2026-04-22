const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  try {
    const { user_name, user_email, user_password, role } = req.body;

    const isUserAlready = await userModel.findOne({
      $or: [
        { user_name },
        { user_email }
      ]
    });

    if (isUserAlready) {
      return res.status(409).json({
        message: "user already exists"
      });
    }

    const hash = await bcrypt.hash(user_password, 10);

    const user = await userModel.create({
      user_name,
      user_email,
      user_password: hash,
      role
    });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true
    });

    res.status(201).json({
      message: "nice to meet you",
      user
    });

  } catch (err) {
    res.status(500).json({ 
        message: "Server error",
        err
     });
  }
}

module.exports = { registerUser };