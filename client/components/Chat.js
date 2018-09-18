import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';

const Chat = ({ active }) => (
  <div id="chat">
    <Messages active={active} />
    <ChatInput active={active} />
  </div>
);

export default Chat;
