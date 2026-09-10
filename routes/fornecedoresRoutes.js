const express = require("express");
const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
  {
    id: 1,
    nome: "Coca-Cola",
    razaosocial: "Coca-Cola Indústrias Ltda.",
    cnpj: "674643687745",
    email: "coca-cola@gmail.com",
    telefone: "55+ (11) 67364-6239",
    cidade: "Indaiatuba",
    estrutura: "",
  },
  {
    id: 2,
    nome: "Nubank",
    razaosocial: "Coca-Cola Indústrias Ltda.",
    cnpj: "674643687745",
    email: "NuBank@gmail.com",
    telefone: "55+ (11) 67364-6239",
    cidade: "Indaiatuba ",
    estrutura: ""
  },
  {
    id: 3,
    nome: "Magazine Luiza",
    razaosocial: "Magazine Luiza S/A",
    cnpj: "674643687745",
    email: "MagazineLuiza@gmail.com",
    telefone: "55+ (11) 67364-6239",
    cidade: "Indaiatuba",
    estrutura: ""
  }
];

router.get("/", (req, res) => {
    res.render("fornecedores/index", {
        fornecedores: fornecedores
    });
});

router.get("/cadastro", (req, res) => {
    res.render("fornecedores/form-cadastro");
});
 router.post("/", (req, res) => {
    const { nome, razaosocial, cnpj, email, telefone, cidade, estrutura } = req.body;
    const novoFornecedor = {
        id: fornecedores.length + 1,
        nome: nome,
        razaosocial: razaosocial,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        cidade: cidade,
        estrutura: estrutura
    };
    fornecedores.push(novoFornecedor);
    res.redirect("/fornecedores");
 })
 
module.exports = router;

