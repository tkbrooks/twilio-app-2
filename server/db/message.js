const Sequelize = require('sequelize');
const db = require('./database');

const Message = db.define('message', {
  sent: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Message;
