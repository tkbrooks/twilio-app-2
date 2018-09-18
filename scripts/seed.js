#!/usr/bin/env node

const { db, Conversation, Message } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });
  console.log('Database synced!');

  await Conversation.create({ id: '+12482333334' });
  await Conversation.create({ id: '+13452341234' });
  await Conversation.create({ id: '+16785674567' });

  await Promise.all([
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body:
        'Superb, thanks!  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello jello',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body: 'hello YELLOW',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: false,
      body:
        'Superb, thanks!  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.  I am testing a long body message.',
      conversationId: '+12482333334'
    }),
    Message.create({
      sent: true,
      body: 'hello C!',
      conversationId: '+13452341234'
    }),
    Message.create({
      sent: true,
      body: 'HRU?',
      conversationId: '+13452341234'
    }),
    Message.create({
      sent: false,
      body: 'Superb, thanks!',
      conversationId: '+13452341234'
    })
  ]);

  console.log('Seed successful!');
};

seed()
  .then(() => {
    console.log('Closing database connection.');
    db.close();
    console.log('Database connection closed.');
  })
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  });

console.log('Seeding...');
