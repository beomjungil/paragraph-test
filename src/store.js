import { createStore } from 'redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(
//export default createStore(reducer, compose(
  applyMiddleware(thunk)
));