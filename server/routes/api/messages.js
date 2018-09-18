const accountSid =
  process.env.accountSid || require('../../secrets').accountSid;
const authToken = process.env.authToken || require('../../secrets').authToken;

const router = require('express').Router();
const { Conversation, Message } = require('../../db');

const { MessagingResponse } = require('twilio').twiml;
const client = require('twilio')(accountSid, authToken);

router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

// SMS to someone
router.post('/', async (req, res, next) => {
  try {
    const from = require('../../secrets').twilioNumber;
    const to = req.body.conversationId;
    const body = req.body.body;

    await client.messages.create({ to, from, body });
    const dbMessage = await Message.create(req.body);
    res.status(201).json(dbMessage);
  } catch (error) {
    next(error);
  }
});

// *******************************************************************

const forwardMessage = async ({ conversationId, body }) => {
  try {
    const { myNumber, twilioNumber } = require('../../secrets');
    const forwardBody = `Received message from ${conversationId}\n\n${body}`;

    await client.messages.create({
      to: myNumber,
      from: twilioNumber,
      body: forwardBody
    });

    console.log('Forwarded message successfully');
  } catch (error) {
    console.error(error);
  }
};

// Message from someone via Twilio
router.post('/twilio', async (req, res, next) => {
  try {
    const { From, Body } = req.body;
    const { io } = req.app;
    const messageObj = { sent: false, body: Body, conversationId: From };

    const [conversation, created] = await Conversation.findOrCreate({
      where: { id: From }
    });

    const message = await Message.create(messageObj);

    // Socket emit the message to the connected client
    if (created) {
      io.emit('newConversation', conversation);
    }
    io.emit('newMessage', message);

    if (conversation.sendToPhone) {
      forwardMessage(message);
    }

    const twiml = new MessagingResponse();
    res.status(200).send(twiml.toString());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
