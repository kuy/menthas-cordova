import { createAction } from 'redux-actions';

export const SHOW_DRAWER = 'SHOW_DRAWER';
export const HIDE_DRAWER = 'HIDE_DRAWER';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const showDrawer = createAction(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);
export const toggleDrawer = createAction(TOGGLE_DRAWER);

export const REQUEST_FETCH_CATEGORY = 'REQUEST_FETCH_CATEGORY';
export const SUCCESS_FETCH_CATEGORY = 'SUCCESS_FETCH_CATEGORY';
export const FAILURE_FETCH_CATEGORY = 'FAILURE_FETCH_CATEGORY';

export const requestFetchCategory = createAction(REQUEST_FETCH_CATEGORY);
export const successFetchCategory = createAction(SUCCESS_FETCH_CATEGORY);
export const failureFetchCategory = createAction(FAILURE_FETCH_CATEGORY);

export const REQUEST_FETCH_NEWS = 'REQUEST_FETCH_NEWS';
export const SUCCESS_FETCH_NEWS = 'SUCCESS_FETCH_NEWS';
export const FAILURE_FETCH_NEWS = 'FAILURE_FETCH_NEWS';

export const requestFetchNews = createAction(REQUEST_FETCH_NEWS);
export const successFetchNews = createAction(SUCCESS_FETCH_NEWS);
export const failureFetchNews = createAction(FAILURE_FETCH_NEWS);
