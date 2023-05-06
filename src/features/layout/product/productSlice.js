import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    get: (state, action) => {
      state.productList = action.payload;
    },
    refresh: (state) => {      
      state.productList = [];
    },
  },
});

export const { get, refresh } = productSlice.actions;

export default productSlice.reducer;
