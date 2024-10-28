import { Router } from "express";
import isAuthentiacted from "../middlewares/isAuthenticated";
import { comment, createPing, deletePing, updatePing } from "../controller/ping.controller";

const router = Router()

router.route("/create").post(isAuthentiacted, createPing);
router.route('/update/:id').post(isAuthentiacted, updatePing);
router.route('/delete/:id').get(isAuthentiacted, deletePing);
router.route('/ping/:id').post(isAuthentiacted, comment);


export default router;