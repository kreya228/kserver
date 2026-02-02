console.log("hello");

const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];


app.get("/", (req, res) => {
    res.send("express");
});

app.get("/users", (req, res) => {
    res.status(200).json(users);
});
app.get("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "i have learning node js" });
    }

    res.status(200).json(user);
});

app.use(express.json());
app.listen(1500, () => {
    console.log("Server started on port 1500");
});

// app.post("/users", (req, res) => {
//     const newUser = {
//         id: users.length + 1,
//         name: req.body.name,
//         role: req.body.role
//     };

//     users.push(newUser);

//     res.status(201).json({
//         message: "User created",
//         user: newUser
//     });
// });
// app.put("/users/:id", (req, res) => {
//     const userId = Number(req.params.id);
//     const index = users.findIndex(u => u.id === userId);

//     if (index === -1) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     users[index] = {
//         id: userId,
//         name: req.body.name,
//         role: req.body.role
//     };

//     res.status(200).json({
//         message: "User replaced",
//         user: users[index]
//     });
// });
// app.delete("/users/:id", (req, res) => {
//     const userId = Number(req.params.id);
//     const index = users.findIndex(u => u.id === userId);

//     if (index === -1) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     users.splice(index, 1);

//     res.status(204).end();
// });