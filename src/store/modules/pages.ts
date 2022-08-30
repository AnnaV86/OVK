import { createAction, createReducer } from '@reduxjs/toolkit';
import { GET_PAGES, Page } from '../models';

export const getPages = createAction<Array<Page>>(GET_PAGES);

export const pagesReducer = createReducer(Array<Page>, builder => {
	builder.addCase(getPages, (state, action) => action.payload);
});
