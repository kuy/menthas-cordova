import { createAction } from 'redux-actions';

export const SHOW_DRAWER = 'SHOW_DRAWER';
export const HIDE_DRAWER = 'HIDE_DRAWER';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const showDrawer = createAction(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);
export const toggleDrawer = createAction(TOGGLE_DRAWER);
