const User = require('./models/User');
const Game = require('./models/Game');
const Comment = require('./models/Comment');

// Função para criar um novo usuário
const createUser = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const user = await User.create({ name, age, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao criar o usuário' });
  }
};

// Função para criar um novo jogo
const createGame = async (req, res) => {
  try {
    const { name, notaGeral } = req.body;
    const game = await Game.create({ name, notaGeral });
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao criar o jogo' });
  }
};

// Função para criar um novo comentário
const createComment = async (req, res) => {
  try {
    const { userId, gameId, comentario } = req.body;
    const comment = await Comment.create({ userId, gameId, comentario });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao criar o comentário' });
  }
};

module.exports = { createUser, createGame, createComment };
