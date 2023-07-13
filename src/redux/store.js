import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('value/increment');
export const decrement = createAction('value/decrement');

const myReducer = createReducer(50, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

const contactsReducer = createReducer(50, {
  [increment]: (state, action) => state.push(action.payload),
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    value: myReducer,
    // contacts: [],
    // filter: '',
  },
});
