const router = require('express').Router();
const { Conversation, Message } = require('../../db');

router.get('/', async (req, res, next) => {
  try {
    const conversations = await Conversation.findAll();
    res.json(conversations);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    let conversation = await Conversation.findById(id);

    if (conversation) {
      conversation = await conversation.update(req.body);
      res.status(200).json(conversation);
    } else {
      const error = new Error('Bad request');
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
