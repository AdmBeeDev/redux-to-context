import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // importe esta função
import rootReducer from '../reducers';

const store = createStore(rootReducer,
  composeWithDevTools());

export default store;
