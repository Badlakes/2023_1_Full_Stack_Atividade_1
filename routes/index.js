const express = require('express');
const UserController = require('../controllers/UserController');
const GameController = require('../controllers/GameController');
const ReviewController = require('../controllers/ReviewController');

const router = express.Router();

// Users
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById);
router.post('/users', UserController.create);

// Games
router.get('/games', GameController.getAll);
router.get('/games/:id', GameController.getById);
router.post('/games', GameController.create);

// Reviews
router.get('/reviews', ReviewController.getAll);
router.get('/reviews/user/:userId', ReviewController.getByUserId);
router.get('/reviews/game/:gameId', ReviewController.getByGameId);
router.post('/reviews', ReviewController.create);

module.exports = router;
