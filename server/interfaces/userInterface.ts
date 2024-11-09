import mongoose from "mongoose";

export interface IUser extends Document {
    _id: string;
    username?: string;
    email?: string,
    password: string,
    bio?: string,
    avatar?: string, 
    followers? :[mongoose.ObjectId]
}

