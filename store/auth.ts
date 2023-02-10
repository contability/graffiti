import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types/reduxState';

// export type AuthMode = {
//   authMode: 'signUp' | 'login';
// };

// const initialState: AuthMode = {
//   authMode: 'signUp',
// };

// const auth = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAuthMode(state, action: PayloadAction<'signUp' | 'login'>) {
//       state.authMode = action.payload;
//     },
//   },
// });

// export const authActions = { ...auth.actions };
// export default auth;

const initialState: AuthState = {
  authMode: 'signUp',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthMode(state, action: PayloadAction<'signUp' | 'login'>) {
      state.authMode = action.payload;
    },
  },
});

export const authActions = { ...auth.actions };

export default auth;
