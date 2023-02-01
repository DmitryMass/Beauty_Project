import { studySliceReducer } from './slices/studySlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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

import { setupListeners } from '@reduxjs/toolkit/query';
import { adminApi } from './api/adminApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  studySlice: persistReducer(persistConfig, studySliceReducer),
  [adminApi.reducerPath]: adminApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(adminApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
