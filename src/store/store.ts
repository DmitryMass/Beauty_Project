import { contactsApi } from './api/contactsApi';
import { visitMasterApi } from './api/visitMasterApi';
import { employeesSliceReducer } from './slices/employeeSlice';
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
import {
  adminApi,
  adminGroupApi,
  adminGroupMembersApi,
  adminVacancyApi,
} from './api/adminApi';

import { studyApi } from './api/studyApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['employeeWorkTime'],
};

const reducers = combineReducers({
  employees: persistReducer(persistConfig, employeesSliceReducer),
  [adminApi.reducerPath]: adminApi.reducer,
  [studyApi.reducerPath]: studyApi.reducer,
  [visitMasterApi.reducerPath]: visitMasterApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [adminVacancyApi.reducerPath]: adminVacancyApi.reducer,
  [adminGroupApi.reducerPath]: adminGroupApi.reducer,
  [adminGroupMembersApi.reducerPath]: adminGroupMembersApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      adminApi.middleware,
      studyApi.middleware,
      visitMasterApi.middleware,
      contactsApi.middleware,
      adminVacancyApi.middleware,
      adminGroupApi.middleware,
      adminGroupMembersApi.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
