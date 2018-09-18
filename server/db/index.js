const db = require('./database');
const Message = require('./message');
const Conversation = require('./conversation');

Message.belongsTo(Conversation, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE'
});
Conversation.hasMany(Message);

module.exports = { db, Conversation, Message };
