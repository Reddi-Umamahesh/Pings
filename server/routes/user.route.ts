import express, { Router } from "express";
import { login, register } from "../controller/user.controller";

const router: Router = express.Router();
router.route("/register").post(register);
router.route('/login').post(login)


export default router