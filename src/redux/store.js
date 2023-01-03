import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authorization/authSlice';
// // ініціалізація персіст стора та дозволяє нам ігнорувати певні типи в нашому застосунку - щоб код не ламася
// // (взіємодія redux-Toolkit та Redux-Persist)
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';


// // Робимо persist для даного slice
// // конфігурація persist
const authPersistConfig = {
  // вказуємо, з яким об'єктом будемо працювати (з authSlice, бо він має властивість name: 'auth')
  key: 'auth',
  storage,
  // зберігаємо до localStorage тільки властивість token
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    // огортаємо auth (authReducer) в persistReducer, з конфігурацією  authPersistConfig - яка буде моніторити кожну зміну token
    // в стейті authSlice і записувати цей token до localStorage
  auth: persistReducer( authPersistConfig, authReducer ),
  contacts: contactsReducer,
  filter: filterReducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // це буквально означає: ігнорується будь-який цих actions і навіть не доходить до reducer
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
});

export const persistor = persistStore(store);

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer, 
//   auth: authReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });


















