const db = require('../db');

const User = {
  getAll(callback) {
    db.query('SELECT * FROM users', callback);
  },

  getById(id, callback) {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },

  create(user, callback) {
    db.query('INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)', [user.name, user.age, user.email, user.password], callback);
  }
};

module.exports = User;
