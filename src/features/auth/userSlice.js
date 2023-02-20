import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: true,
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // login: (state, action) => {
    //   state.isLoading += action.payload;
    // },
  },
});

// export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
