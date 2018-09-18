import io from 'socket.io-client';
import store from './store';
import { setConversation } from './store/conversations';
import { setMessage } from './store/messages';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('Socket connection established.');
});

socket.on('newConversation', conversation => {
  store.dispatch(setConversation(conversation));
});

socket.on('newMessage', message => {
  store.dispatch(setMessage(message));
});

socket.on('forceDisconnect', () => {
  console.log('Socket connection forcefully closed.');
});

export default socket;
