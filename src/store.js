import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import logger from 'redux-logger';

export default createStore(reducer, applyMiddleware(
  createSagaMiddleware(rootSaga), logger()
));
