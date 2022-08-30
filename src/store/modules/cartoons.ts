import { createAction, createReducer } from '@reduxjs/toolkit';
import { Cartoon, GET_CARTOON } from '../models';

export const getCartoons = createAction<Array<Cartoon>>(GET_CARTOON);

export const cartoonsReducer = createReducer(Array<Cartoon>, builder => {
	builder.addCase(getCartoons, (state, action) => action.payload);
});
