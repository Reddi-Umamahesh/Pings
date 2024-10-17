import { IUser } from "../interfaces/userInterface";

const jwt = require('jsonwebtoken')


export const getUser = (token: string) => {
    try {
        if (!token) return null
    return jwt.verify(token, process.env.SECRET_KEY);
    } catch {
        return null
   }
}
export const setUser = (user:IUser) => {
  const payload = {
    id: user._id,
    username: user.username,
  };
  return jwt.sign(payload, process.env.SECRET_KEY);
};

