const express = require('express');
const router = express.Router();

const { createUser, createGame, createComment } = require('./controllers');

// Rota para adicionar um novo usuário
router.post('/users', createUser);

// Rota para adicionar um novo jogo
router.post('/games', createGame);

// Rota para adicionar um novo comentário
router.post('/comments', createComment);

module.exports = router;
