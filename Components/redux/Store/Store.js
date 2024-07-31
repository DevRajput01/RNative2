import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
   
  },
});
