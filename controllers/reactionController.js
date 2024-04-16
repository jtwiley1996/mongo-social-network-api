const Thought = require('../models/thought');

module.exports = {
  // Add a reaction
  async addReaction(req, res) {
    console.log('Adding a reaction');
    console.log('Thought ID:', req.params.thoughtId);
    console.log('Request Body:', req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      console.log('Updated Thought:', thought);
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }

      res.json(thought);
    } catch (err) {
      console.error('Error adding reaction:', err);
      res.status(500).json(err);
    }
  },
  
  // Remove reaction
  async removeReaction(req, res) {
    try {
      const remove = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true },
        
      );
      if (!remove) {
        return res
          .status(404)
          .json({ message: 'No reaction found with that ID :(' });
      }
      res.json(remove);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
