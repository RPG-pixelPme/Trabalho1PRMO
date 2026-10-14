const express = require('express'); // Importa o Express
const app = express(); // Inicializa a aplicação
const PORT = 3000; // Define a porta do servidor

// Middleware para aceitar dados em formato JSON no corpo das requisições
app.use(express.json());

// Simulação de um banco de dados em memória
const itens = [
  { id: 1, nome: 'Item Um' },
  { id: 2, nome: 'Item Dois' }
];

// Rota GET para listar os itens
app.get('/api/itens', (req, res) => {
  res.json(itens);
});

// Rota POST para adicionar um novo item
app.post('/api/itens', (req, res) => {
  const novoItem = {
    id: itens.length + 1,
    nome: req.body.nome
  };
  itens.push(novoItem);
  res.status(201).json(novoItem);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
