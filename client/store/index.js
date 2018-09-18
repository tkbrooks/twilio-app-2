import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

// Reducers
// import user from './user';
import messages from './messages';
import conversations from './conversations';

const reducer = combineReducers({ messages, conversations });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk.withExtraArgument(axios), logger)
);

export default store;
