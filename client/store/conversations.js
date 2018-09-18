// Action types
const SET_ALL_CONVERSATIONS = 'SET_ALL_CONVERSATIONS';
const SET_CONVERSATION = 'SET_CONVERSATION';

const defaultConversations = {};

// Action creators
const setAllConversations = (allConversations = defaultConversations) => ({
  type: SET_ALL_CONVERSATIONS,
  allConversations
});

export const setConversation = conversation => ({
  type: SET_CONVERSATION,
  conversation
});

// Thunk creators
export const getConversations = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get(`/api/conversations`);
    const allConversations = data.reduce((acc, conversation) => {
      acc[conversation.id] = conversation;
      return acc;
    }, {});
    dispatch(setAllConversations(allConversations));
  } catch (error) {
    console.error(error);
  }
};

export const putConversation = ({ id, ...rest }) => async (
  dispatch,
  _,
  axios
) => {
  try {
    const { data } = await axios.put(`/api/conversations/${id}`, rest);
    dispatch(setConversation(data));
  } catch (error) {
    console.error(error);
  }
};

// CONVERSATIONS reducer
export default (state = defaultConversations, action) => {
  switch (action.type) {
    case SET_ALL_CONVERSATIONS:
      return action.allConversations;
    case SET_CONVERSATION:
      return { ...state, [action.conversation.id]: action.conversation };
    default:
      return state;
  }
};
