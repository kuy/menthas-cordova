import { take, put, call, fork, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import { BASE, categoryFromPath } from './utils';

function api(url) {
  return fetch(BASE + url)
    .then(res => res.json())
    .catch(e => console.log('api: failed', e));
}

function loadCategory(name = 'top') {
  return api(`/${name}/params`)
    .then(json => ({ ...json.category }));
}

function loadNews(name = 'top', offset = 0) {
  return api(`/${name}/list?offset=${offset}`)
    .then(json => ({ ...json.items }));
}

function* fetchCategory(name) {
  yield put(actions.requestFetchCategory({ name }));
  const data = yield call(loadCategory, name);
  yield put(actions.successFetchCategory({ name, data }));
}

function* fetchNews(name) {
  yield put(actions.requestFetchNews({ name }));
  const data = yield call(loadNews, name);
  yield put(actions.successFetchNews({ name, data }));
}

function* categoryChange() {
  while (true) {
    const { payload: { pathname } } = yield take(LOCATION_CHANGE);
    const name = categoryFromPath(pathname, null);
    if (name === null) {
      continue;
    }

    const category = yield select(state => state.categories[name]);
    if (typeof category === 'undefined') {
      yield fork(fetchCategory, name);
    }

    const news = yield select(state => state.newsByCategory[name]);
    if (typeof news === 'undefined') {
      yield fork(fetchNews, name);
    }
  }
}

export default function* root() {
  yield fork(categoryChange);
};
