import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'features/auth/pages/userSlice';
export const store = configureStore({
  reducer: { userState: userSlice },
});
