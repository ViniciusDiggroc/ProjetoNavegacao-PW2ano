const express = require("express");
const path = require("path");
const app = express();

// ========================================
// CONFIGURAÇÃO DO EJS
// ========================================
app.set("view engine", "ejs");
app.set(
    "views",
    path.join(__dirname, "views")
);

// ========================================
// MIDDLEWARES
// ========================================
// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));

// Permite receber requisições com JSON
app.use(express.json());

// ========================================
// ROTAS
// ========================================
const categoriaRoutes = require("./routes/categoriaRoutes");
app.use("/categorias", categoriaRoutes);
const clientesRoutes = require("./routes/clientesRoutes");
app.use("/clientes", clientesRoutes);
const fornecedoresRoutes = require("./routes/fornecedoresRoutes");
app.use("/fornecedores", fornecedoresRoutes);
const produtoRoutes = require("./routes/produtoRoutes");
app.use("/produtos", produtoRoutes);


// ========================================
// ROTA PRINCIPAL
// ========================================
app.get("/", (req, res) => {
    res.render("index");
});


const PORT = process.env.PORT || 3000;
// ========================================
// SERVIDOR
// ========================================
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});