import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Cartoon, Page } from './models';
import { rootReducer } from './rootReducer';

export interface IStore {
	pages: Array<Page>;
	cartoons: Array<Cartoon>;
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk]
});
