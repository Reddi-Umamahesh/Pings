import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/userInterface";

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  avatar: {
    type: String,
    // required: true,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  
} , {timestamps: true});

export const User = mongoose.model<IUser>('User',UserSchema)