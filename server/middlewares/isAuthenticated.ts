import { Request, Response , NextFunction } from "express"
import jwt ,{ JwtPayload} from "jsonwebtoken";

interface ExtenedRequest extends Request{
    userId?: string
}
const isAuthentiacted = async (
  req: ExtenedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log("hiii")
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({
        message: "You are not authenticated",
      });
        return;
    }
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as JwtPayload;
    if (!decoded) {
       res.status(401).json({
        message: "You are not authenticated",
       });
        return;
    }
    req.userId = decoded.id as string;
  
    next();
  } catch (error) {
     res.status(401).json({
      message: "something went wrong please try again",
     });
      return
  }
};
export default isAuthentiacted