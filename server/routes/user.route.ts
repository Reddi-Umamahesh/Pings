import express, { Router } from "express";
import { login, logout, register, updateProfile} from "../controller/user.controller";
import isAuthentiacted from "../middlewares/isAuthenticated";
import { singleUpload } from "../middlewares/multer";

const router: Router = express.Router();
router.route("/register").post(singleUpload ,register);
router.route('/login').post(login)
router.route('/profile/update').post(isAuthentiacted, updateProfile)
router.route("/logout").get(isAuthentiacted , logout);

export default router