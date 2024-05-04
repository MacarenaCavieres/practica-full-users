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
        return res.json(createUser);
    } catch (error) {
        console.error(error);
        return res.json({ msg: error });
    }
};

const updateUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const { name, email } = req.body;
        const user = await User.update(uid, name, email);

        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.json({ msg: error });
    }
};

const removeUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const users = await User.userDelete(uid);

        return res.json(users);
    } catch (error) {
        console.error(error);
        return res.json({ msg: error });
    }
};

export const usersMethod = {
    getAllUsers,
    getUser,
    postUser,
    updateUser,
    removeUser,
};
