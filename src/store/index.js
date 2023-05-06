import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'features/auth/pages/userSlice';
import productSlice from 'features/layout/product/productSlice';
export const store = configureStore({
  reducer: { userState: userSlice , productState: productSlice},
});
