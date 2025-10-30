const express = require('express');
const app = express();

app.use(express.json())

pets = [];

app.get("/pets", (req, res) => {

    res.json({
        pets
    })

});

app.post("/pets", (req, res) => {
    const nome = req.body.nome;
    const especie = req.body.especie;
    const idade = req.body.idade;

    pets.push({ nome, especie, idade });

    res.json({ pets });
});

app.listen(3000);