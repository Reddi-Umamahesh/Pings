import mongoose, { Document } from "mongoose";


export interface IComment {
    userId : mongoose.ObjectId,
    body: string,
    date: Date
}
export interface IMeta{
    votes: number,
    favs : number
}
export interface IPing extends Document{
    title: string,
    author: mongoose.ObjectId,
    body: string,
    comments: [IComment]
    CreatedDate: Date,
    UpdatedDate: Date,
    meta : IMeta
}