import { Router } from "express";
import {loginUser,logoutUser,registerUser} from "../controllers/user.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverimage",
            maxCount:1
        }
    ])
    ,registerUser)

router.route("/login").post(loginUser)
//secure route
router.route("/logout").post(verifyjwt,logoutUser)
export default router