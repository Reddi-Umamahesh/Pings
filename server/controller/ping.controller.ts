import { Request, Response } from "express";
import { User } from "../models/user.model";
import { Ping } from "../models/ping.model";

interface ExtenedRequest extends Request {
  userId?: string;
}
export const createPing = async (
  req: ExtenedRequest,
  res: Response
): Promise<void> => {
  try {
    const { title, content } = req.body;
    const id = req.userId;

    const ping = new Ping({ title: title, author: id, body: content });
    await ping.save();
    res.status(201).json({
      sucess: true,
      message: "Ping created successfully",
    });
    return;
  } catch (error) {
    res.status(500).json({ sucess: false, message: "Error creating ping" });
    return;
  }
};

export const updatePing = async (req: ExtenedRequest, res: Response) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId;
    const pingId = req.params.id;
    const ping = await Ping.findById(pingId);
    if (!ping) {
      res.status(404).json({ sucess: false, message: "Ping not found" });
      return;
    }
    if (userId && userId != ping.author.toString()) {
      res.status(403).json({
        sucess: false,
        message: "You are not the author",
      });
      return;
    }
    if (title) ping.title = title;
    if (content) ping.body = content;
    await ping.save();
    res
      .status(200)
      .json({ sucess: true, message: "Ping updated successfully" });
    return;
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Error updating ping",
    });
  }
};

export const deletePing = async (req: Request, res: Response) => {
  try {
    const pingId = req.params.id;
    const ping = await Ping.findById(pingId);
    if (!ping) {
      res.status(404).json({ sucess: false, message: "Ping not found" });
      return;
    }
    await Ping.findByIdAndDelete(pingId);
    res
      .status(200)
      .json({ sucess: true, message: "Ping deleted successfully" });
    return;
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Error deleting ping",
    });
  }
};

export const comment = async (req: ExtenedRequest, res: Response) => {
  try {
    const pingId = req.params.id;
    const msg = req.body.comment;
    const ping = Ping.findById(pingId)
    const message = {
      userId: req.userId,
      body : msg
    }
    ping.updateOne(
      { $push: { comments: message } },
      { new : true}
    ).then(updatedPing => {
      if (!updatePing) {
        res.status(404).json({ succcess: false, message: 'Ping not found' })
        return
      }
      res.status(200).json({ success: true, message: "Comment added successfully" });
      return 
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}