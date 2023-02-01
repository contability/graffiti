import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { UserState } from '../types/reduxState';

const initialState: UserState = {
  id: 0,
  email: '',
  lastName: '',
  firstName: '',
  birthday: '',
  isLogged: false,
  profileImage: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 로그인한 유저 변경
    // setLoggedUser(state, action: PayloadAction<UserType>) {
    setLoggedUser(state, action: PayloadAction<UserState>) {
      // state = { ...action.payload, isLogged: true };
      state = { ...action.payload };
      return state;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
