import { configureStore } from '@reduxjs/toolkit';
import {
  createAction,
  createReducer,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// =---------------===================

export const incr = createAction('filter/incr');

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    increment(state, action) {
      state.value.push(action.payload);
    },
    decrement(state, action) {
      state.value = state.value.filter(({ id }) => {
        return id !== action.payload;
      });
    },
  },
});

const persistedReducer = persistReducer(persistConfig, contactsSlise.reducer);

const filterReducer = createReducer('', builder =>
  builder.addCase(incr, (state, action) => {
    return action;
  })
);
export const { increment, decrement } = contactsSlise.actions;

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
