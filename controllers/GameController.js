const Game = require('../models/Game');

const GameController = {
  getAll(req, res) {
    Game.getAll((err, games) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch games' });
      } else {
        res.json(games);
      }
    });
  },

  getById(req, res) {
    const gameId = req.params.id;

    Game.getById(gameId, (err, game) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch game' });
      } else {
        if (game.length === 0) {
          res.status(404).json({ error: 'Game not found' });
        } else {
          res.json(game[0]);
        }
      }
    });
  },

  create(req, res) {
    const game = req.body;

    Game.create(game, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create game' });
      } else {
        res.status(201).json({ message: 'Game created successfully' });
      }
    });
  }
};

module.exports = GameController;
