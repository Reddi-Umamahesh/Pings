import mongoose from "mongoose";

export interface IUser extends Document {
    username?: string;
    email?: string,
    password?: string,
    bio?: string,
    avatar?: string, 
    followers? :[mongoose.ObjectId]
}

