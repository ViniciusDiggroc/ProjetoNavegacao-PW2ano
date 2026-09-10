const express = require("express");
const router = express.Router();

let clientes = [
  {
    id: 1,
    nome: "João",
    email: "joao@gmail.com",
    telefone: "(11) 99999-9999",
    cidade: "Guarulhos",
    estrutura: "Academia"
  }
];

// Listar clientes
router.get("/", (req, res) => {
    res.render("clientes/index", {
        clientes: clientes
    });
});

// Formulário de cadastro
router.get("/cadastro", (req, res) => {
    res.render("clientes/form-cadastro");
});

// Cadastrar cliente
router.post("/", (req, res) => {
    const { nome, email, telefone, cidade, estrutura } = req.body;

    const novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade,
        estrutura: estrutura
    };

    clientes.push(novoCliente);

    res.redirect("/clientes");
});

module.exports = router;