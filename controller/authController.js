import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;

    //validation
    if (!name || !email || !password || !phone || !address || !answer) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    //Checking User
    const existingUser = await userModel.findOne({ email });

    //existing user
    if (existingUser) {
      res.status(200).send({
        success: true,
        message: "User already exists please login",
      });
    }

    //register user password encreting and decrepting
    const hashPasswords = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashPasswords,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      massage: "User Register Successfully.",
      user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      err,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Validation;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Email or password is required",
      });
    }

    // find existing user on email
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Email not registered",
      });
    }

    //Compare password with existing password
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "password is incorrect",
      });
    }

    //JWT token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRETE, {
      expiresIn: "7d",
    });
    res.status(201).send({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email || !answer || !newPassword) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await userModel.findOne({ email, answer });
    // Validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "wrong Email or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const testController = async (req, res) => {
  try {
    res.send("User was provided");
  } catch (error) {
    console.log(error);
  }
};
