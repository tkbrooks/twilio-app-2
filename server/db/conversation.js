const Sequelize = require('sequelize');
const db = require('./database');

const Conversation = db.define('conversation', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  alias: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  sendToPhone: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

Conversation.beforeValidate(instance => {
  if (!instance.alias) {
    instance.alias = instance.id;
  }
});

module.exports = Conversation;
