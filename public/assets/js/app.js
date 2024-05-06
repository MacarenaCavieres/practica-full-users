const resultado = document.querySelector("#resultado");

const form = document.querySelector("#form");

const getUsers = async () => {
    const { data } = await axios.get("/api/v1/users");

    // const res = await fetch('/api/v1/users')
    // const data = await res.json()

    resultado.innerHTML = "";
    data.forEach((user) => {
        resultado.innerHTML += `
        <li>
            ${user.name} - ${user.email}
            <button onclick="removeUser('${user.uid}')">Eliminar</button>
            <button onclick="updateUser('${user.uid}')">Actualizar</button>
        </li>
        `;
    });
};

const updateUser = async (uid) => {
    const { data: user } = await axios.get("/api/v1/users/" + uid);
    const name = prompt("name", user.name);
    const email = prompt("email", user.email);
    await axios.put("/api/v1/users/" + uid, {
        name,
        email,
    });
    getUsers();
};

const removeUser = async (uid) => {
    await axios.delete("/api/v1/users/" + uid);
    getUsers();
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await axios.post("/api/v1/users", {
        name: e.target.name.value,
        email: e.target.email.value,
    });
    getUsers();
});

getUsers();
