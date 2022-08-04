import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import verifyEmailAvaliable from "../middlewares/verifyEmailAvaliable.middleware";
import listUsersController from "../controllers/listUsers.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import profileAuthenticationMiddleware from "../middlewares/profileAuthentication.middleware";
import userProfileController from "../controllers/userProfile.controller";
import userEditAuthenticationMiddleware from "../middlewares/userEditAuthentication.middleware";
import updateUserController from "../controllers/updateUser.controller";
import userDeleteMiddleware from "../middlewares/userDelete.middleware";
import deleteUserController from "../controllers/deleteUser.controlles";

const router = Router();

router.post("", verifyEmailAvaliable, createUserController);
router.get("", authenticationMiddleware, listUsersController);
router.get("/profile", profileAuthenticationMiddleware, userProfileController);
router.patch("/:id", userEditAuthenticationMiddleware, updateUserController);
router.delete("/:id", userDeleteMiddleware, deleteUserController);
export default router;
