const router = require('express').Router();
const {
  addReaction,
  removeReaction
} = require('../../controllers/reactionController');

// Route to add a reaction to a thought
router.post('/thoughts/:thoughtId/reactions', addReaction);

// Route to remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
