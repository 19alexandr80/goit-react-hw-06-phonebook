import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const incr = createAction('filter/incr');

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    increment(state, action) {
      state.push(action.payload);
    },
    decrement(state, action) {
      return state.filter(({ id }) => {
        return id !== action.payload;
      });
    },
  },
});

const filterReducer = createReducer('', builder =>
  builder.addCase(incr, (state, action) => {
    return action;
  })
);
export const { increment, decrement } = contactsSlise.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlise.reducer,
    filter: filterReducer,
  },
});
console.log(contactsSlise.actions);
