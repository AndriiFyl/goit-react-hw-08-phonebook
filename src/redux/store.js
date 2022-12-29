import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authorization/authSlice';


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer, 
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


// export const store = configureStore({
//   reducer: {
//   contacts: contactsReducer,
//   filter: filterReducer,
//   }
// });
















