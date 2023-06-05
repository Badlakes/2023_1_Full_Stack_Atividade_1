const Review = require('../models/Review');

const ReviewController = {
  getAll(req, res) {
    Review.getAll((err, reviews) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch reviews' });
      } else {
        res.json(reviews);
      }
    });
  },

  getByUserId(req, res) {
    const userId = req.params.userId;

    Review.getByUserId(userId, (err, reviews) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch reviews' });
      } else {
        res.json(reviews);
      }
    });
  },

  getByGameId(req, res) {
    const gameId = req.params.gameId;

    Review.getByGameId(gameId, (err, reviews) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch reviews' });
      } else {
        res.json(reviews);
      }
    });
  },

  create(req, res) {
    const review = req.body;

    Review.create(review, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create review' });
      } else {
        res.status(201).json({ message: 'Review created successfully' });
      }
    });
  }
};

module.exports = ReviewController;
