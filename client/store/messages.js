// Action types
const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';
const SET_MESSAGE = 'SET_MESSAGE';

const defaultMessages = {};

// Action creators
const setAllMessages = (allMessages = defaultMessages) => ({
  type: SET_ALL_MESSAGES,
  allMessages
});

export const setMessage = message => {
  return { type: SET_MESSAGE, message };
};

// Thunk creators
export const getMessages = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get(`/api/messages`);
    const allMessages = data.reduce((acc, message) => {
      const { conversationId } = message;
      acc[conversationId] = acc[conversationId]
        ? [...acc[conversationId], message]
        : [message];
      return acc;
    }, {});
    dispatch(setAllMessages(allMessages));
  } catch (error) {
    console.error(error);
  }
};

export const postMessage = message => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.post(`/api/messages`, message);
    dispatch(setMessage(data));
  } catch (error) {
    console.error(error);
  }
};

const addMessage = (state, { message }) => {
  const messages = state[message.conversationId]
    ? [...state[message.conversationId], message]
    : [message];

  return { ...state, [message.conversationId]: messages };
};

// Messages reducer
export default (state = defaultMessages, action) => {
  switch (action.type) {
    case SET_ALL_MESSAGES:
      return action.allMessages;
    case SET_MESSAGE:
      return addMessage(state, action);
    default:
      return state;
  }
};
