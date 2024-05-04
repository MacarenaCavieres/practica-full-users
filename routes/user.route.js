import { Router } from "express";
import { usersMethod } from "../controllers/user.controller.js";

const router = Router();

router.get("/", usersMethod.getAllUsers);

router.get("/:uid", usersMethod.getUser);

router.post("/", usersMethod.postUser);

router.put("/:uid", usersMethod.updateUser);

router.delete("/:uid", usersMethod.removeUser);

export default router;
