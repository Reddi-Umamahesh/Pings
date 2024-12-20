import { Request, Response } from "express";
import { User } from "../models/user.model";
import { setUser } from "../auth/auth";
import getDataUri from "../utils/datauri";
import cloudinary from "../utils/cloudinary";
import bcrypt from "bcrypt";
import multer from "multer";
interface ExtenedRequest extends Request {
  userId?: string;
}
const storage = multer.memoryStorage();
export const singleUpload = multer({ storage }).single('avatar');
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    const { username, bio, email, password } = req.body;
    if (!username || !bio || !email || !password) {
      res.status(400).json({
        success: false,
        messsage: "Please fill the feilds",
      });
      return;
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "Email already exists",
      });
      return;
    }
    
    const file = req.file;
    console.log(req.file)
    console.log(req.body.avatar)
    if (!file) {
      res.status(400).json({
        success: false,
        message: "Please upload a profile picture",
      });
      return;
    }
    const { content } = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(content);

    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      bio,
      email,
      password: hashedpassword,
      avatar: cloudResponse.secure_url,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error creating user",
    });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Please fill the fields",
    });
    return;
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({
      success: false,
      messege: "Invalid email or password",
    });
    return;
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  

  if (!isValidPassword) {
    res.status(400).json({
      success: false,
      messege: "Incorrect password",
    });
    return;
  }

  const token = setUser(user);
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60,
    sameSite: "strict",
  });
  const ReqUser = {
    _id : user._id,
    username: user.username,
    bio: user.bio,
    email: user.email,
    avatar: user.avatar,
    followers: user.followers,
  };
  res.status(200).json({
    success: true,
    message: "login successfull",
    token,
    user: ReqUser,
  });
  return;
};

export const updateProfile = async (req: ExtenedRequest, res: Response) => {
  try {
    const { username, email, bio } = req.body;
    const id = req.userId;
    const user = await User.findById(id);
    console.log(id, user);
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User Not Found",
      });
      return;
    }
    const u = await User.findOne({ email });
    if (u) {
      res.status(400).json({
        success: false,
        message: "Email already exist",
      });
      return;
    }
    if (username) user.username = username;
    if (email) user.email = email;
    if (bio) user.bio = bio;
    await user.save();

    const updatedUser = {
      username: user.username,
      bio: user.bio,
      email: user.email,
      avatar: user.avatar,
      followers: user.followers,
    };

    res.status(200).json({
      success: true,
      message: "Profile Updated",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating user",
    });
  }
};
export const logout = async (req: ExtenedRequest, res: Response) => {
  try {
    res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "user logged out successfull",
    });
    return;
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Internal server error",
    });
  }
};
