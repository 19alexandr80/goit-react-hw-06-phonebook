import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// export const increment = createAction('contacts/increment');
// export const decrement = createAction('contacts/decrement');

export const incr = createAction('filter/incr');

// const contactsReducer = createReducer([], builder =>
//   builder
//     .addCase(increment, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(decrement, (state, action) =>
//       state.filter(({ id }) => {
//         return id !== action.payload;
//       })
//     )
// );

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
