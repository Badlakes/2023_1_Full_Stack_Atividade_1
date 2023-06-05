const db = require('../db');

const Review = {
  getAll(callback) {
    db.query('SELECT * FROM reviews', callback);
  },

  getByUserId(userId, callback) {
    db.query('SELECT * FROM reviews WHERE user_id = ?', [userId], callback);
  },

  getByGameId(gameId, callback) {
    db.query('SELECT * FROM reviews WHERE game_id = ?', [gameId], callback);
  },

  create(review, callback) {
    db.query('INSERT INTO reviews (user_id, game_id, rating, comment) VALUES (?, ?, ?, ?)', [review.user_id, review.game_id, review.rating, review.comment], callback);
  }
};

module.exports = Review;
