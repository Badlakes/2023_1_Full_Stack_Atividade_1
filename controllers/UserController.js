const User = require('../models/User');

const UserController = {
  getAll(req, res) {
    User.getAll((err, users) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
      } else {
        res.json(users);
      }
    });
  },

  getById(req, res) {
    const userId = req.params.id;

    User.getById(userId, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user' });
      } else {
        if (user.length === 0) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json(user[0]);
        }
      }
    });
  },

  create(req, res) {
    const user = req.body;

    User.create(user, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
      } else {
        res.status(201).json({ message: 'User created successfully' });
      }
    });
  }
};

module.exports = UserController;
