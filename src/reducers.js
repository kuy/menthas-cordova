import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  SHOW_DRAWER, HIDE_DRAWER, TOGGLE_DRAWER,
} from './actions';

const initial = {
  app: {
    drawer: false,
  },
};

function app(state = initial.app, action) {
  switch (action.type) {
  case SHOW_DRAWER:
    return { ...state, drawer: true };
  case HIDE_DRAWER:
    return { ...state, drawer: false };
  case TOGGLE_DRAWER:
    let next = action.payload;
    if (typeof next === 'undefined') {
      next = !state.drawer;
    }
    return { ...state, drawer: next };
  default:
    return state;
  }
}

export default combineReducers(
  { app, routing: routerReducer }
);
