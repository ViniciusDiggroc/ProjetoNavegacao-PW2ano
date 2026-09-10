const express = require("express");
const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
  {
    id: 1,
    nome: "Coca-Cola",
    descricao: "refrigerante.",
    preco: "R$:3.50",
    estoque: "29",
    categoria: "alimenticio"

  },
];

router.get("/", (req, res) => {
    res.render("produtos/index", {
        produtos: produtos
    });
});

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro");
});
 router.post("/", (req, res) => {
    const { nome, descricao, preco, estoque, categoria } = req.body;
    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
        categoria: categoria
    };
    produtos.push(novoProduto);
    res.redirect("/produtos");
 })
 
module.exports = router;
