const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
    nome: "mouse gamer",
    preco: 89.90,
    categoria: "Eletrônicos"
    });
});

app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000");
});