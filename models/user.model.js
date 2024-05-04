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

const update = async (uid, name, email) => {
    const preview = await readFile(pathFile, "utf8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const user = data.find((item) => item.uid === uid);

    if (!user) return "usuario no encontrado";

    user.name = name;
    user.email = email;

    await writeFile(pathFile, JSON.stringify(data));

    return user;
};

const userDelete = async (uid) => {
    const preview = await readFile(pathFile, "utf8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const userQ = data.find((item) => item.uid === uid);

    if (!userQ) return "Usuario no encontrado";

    const users = data.filter((item) => item.uid !== uid);

    await writeFile(pathFile, JSON.stringify(users));
    return users;
};

export const User = {
    findAll,
    findById,
    create,
    update,
    userDelete,
};
