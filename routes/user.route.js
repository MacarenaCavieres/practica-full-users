import { Router } from "express";
import { usersMethod } from "../controllers/user.controller.js";

const router = Router();

router.get("/", usersMethod.getAllUsers);

router.get("/:uid", usersMethod.getUser);

export default router;
