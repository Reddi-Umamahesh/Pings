import { Request, Response } from "express";
import { User } from "../models/user.model";
import {setUser} from '../auth/auth'
export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
    try {
        console.log(req.body)
        const { username, bio, email, password, } = req.body;
        if (!username || !bio || !email || !password) {
            res.status(400).json({
                success : false,
                messsage : "Please fill the feilds"
            })
            return
        }
    const user = await User.findOne({ email });
    if (user) {
        res.status(400).json({
            success : false,
            message: "Email already exists"
        });
        return 
    }
    const newUser = new User({ username,bio, email, password });
    await newUser.save();
        res.status(200).json({
            success : true,
            message: "User created successfully"
        });
      return 
  } catch (error) {
    console.log(error);
        res.status(500).json({
            success : false,
            message: "Error creating user"
        });
      return
  }
};

export const login = async (req: Request , res: Response) => {

    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({
            success: false,
            message: "Please fill the fields"
        })
        return
    }
    const user = await User.findOne({ email, password })
    if (!user) {
        res.status(400).json({
            success: false,
            messege: "Invalid email or password"
        })
        return
    }
    const token = setUser(user)
    res.cookie("token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 *60 * 24, 
      sameSite: "strict", 
    });

    res.status(200).json({
        success: true,
        message : 'login successfull'
    })
    return

}