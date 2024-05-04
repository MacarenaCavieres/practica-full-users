import { User } from "../models/user.model.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        console.error(error);
        return res.json({ msg: error });
    }
};

const getUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid);
        if (!user) return res.json({ msg: "usuario no encontrado" });

        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.json({ msg: error });
    }
};

const postUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const createUser = await User.create(name, email);
    } catch (error) {
        console.error(error);
        return res.json({ msg: error });
    }
};

export const usersMethod = {
    getAllUsers,
    getUser,
};
