import { readFile, writeFile } from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, "../data/users.json");

const findAll = async () => {
    const preview = await readFile(pathFile, "utf8");
    const data = preview.trim() ? JSON.parse(preview) : [];
    return data;
};

const findById = async (uid) => {
    const preview = await readFile(pathFile, "utf8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const user = data.find((item) => item.uid === uid);

    return user;
};

const create = async (name, email) => {
    const preview = await readFile(pathFile, "utf8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const newUser = {
        name,
        email,
        uid: nanoid(7),
    };

    data.push(newUser);

    await writeFile(pathFile, JSON.stringify(data));

    return newUser;
};

export const User = {
    findAll,
    findById,
    create,
};
