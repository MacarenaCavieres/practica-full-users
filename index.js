import express from "express";
import routerUsers from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/v1/users", routerUsers);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
