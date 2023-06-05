const db = require('../db');

const Game = {
  getAll(callback) {
    db.query('SELECT * FROM games', callback);
  },

  getById(id, callback) {
    db.query('SELECT * FROM games WHERE id = ?', [id], callback);
  },

  create(game, callback) {
    db.query('INSERT INTO games (name, overall_rating) VALUES (?, ?)', [game.name, game.overall_rating], callback);
  }
};

module.exports = Game;
