import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('contacts/increment');
export const decrement = createAction('contacts/decrement');

export const incr = createAction('filter/incr');

const contactsReducer = createReducer([], {
  [increment]: (state, action) => {
    state.push(action.payload);
  },
  [decrement]: (state, action) =>
    state.filter(({ id }) => {
      return id !== action.payload;
    }),
});
const filterReducer = createReducer('', {
  [incr]: (state, action) => {
    return action;
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
