import { Router } from "express";
import isAuthentiacted from "../middlewares/isAuthenticated";
import { createPing } from "../controller/ping.controller";

const router = Router()

router.route("/create").post(isAuthentiacted, createPing);

export default router;