import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  SHOW_DRAWER, HIDE_DRAWER, TOGGLE_DRAWER,
  REQUEST_FETCH_CATEGORY, SUCCESS_FETCH_CATEGORY, FAILURE_FETCH_CATEGORY,
  REQUEST_FETCH_NEWS, SUCCESS_FETCH_NEWS, FAILURE_FETCH_NEWS,
} from './actions';

const initial = {
  app: {
    drawer: false,
    selected: 'top',
  },
  categories: {
    data: null,
    names: [],
    status: null,
    error: false,
  },
  news: {
    data: null,
    status: null,
    error: false,
  }
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

function categories(state = initial.categories, action) {
  switch (action.type) {
  case REQUEST_FETCH_CATEGORY:
    return { ...state, status: 'working', error: false };
  case SUCCESS_FETCH_CATEGORY:
    const { name, description, categories } = action.payload.data;
    return { ...state, data: { ...state.data, [name]: { description } }, names: categories, status: 'done', error: false };
  case FAILURE_FETCH_CATEGORY:
    return { ...state, status: 'done', error: true };
  default:
    return state;
  }
}

function news(state = initial.news, action) {
  switch (action.type) {
  case REQUEST_FETCH_NEWS:
    return { ...state, status: 'working', error: false };
  case SUCCESS_FETCH_NEWS:
    return { ...state, data: action.payload.data, status: 'done', error: false };
  case FAILURE_FETCH_NEWS:
    return { ...state, status: 'done', error: true };
  default:
    return state;
  }
}

function newsByCategory(state = {}, action) {
  switch (action.type) {
  case REQUEST_FETCH_NEWS:
  case SUCCESS_FETCH_NEWS:
  case FAILURE_FETCH_NEWS:
    const category = action.payload.name;
    return { ...state, [category]: news(state[category], action) };
  default:
    return state;
  }
}

export default combineReducers(
  { app, categories, newsByCategory, routing: routerReducer }
);
