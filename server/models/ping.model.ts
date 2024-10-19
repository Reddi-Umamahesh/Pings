import mongoose, { mongo, Schema } from "mongoose";
import { IPing } from "../interfaces/pingInterface";

const PingSchema: Schema<IPing> = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref:'User' },
  body: { type: String, required: true },
  comments: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    body: { type: String }, date: { type: Date }
  }],
  CreatedDate: { type: Date, default: Date.now },
  UpdatedDate: { type: Date, default: Date.now },
  meta: {
    votes: { type: Number, default:0 },
    favs: { type: Number , default:0 },
  },
},{timestamps: true} );

export const Ping = mongoose.model<IPing>("Ping", PingSchema);
