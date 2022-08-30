import { combineReducers } from '@reduxjs/toolkit';
import { cartoonsReducer } from './modules/cartoons';
import { pagesReducer } from './modules/pages';

export const rootReducer = combineReducers({
	pages: pagesReducer,
	cartoons: cartoonsReducer
});
