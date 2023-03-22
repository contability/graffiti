import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRoomState } from '../types/reduxState';

const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
};

const registerRoom = createSlice({
  name: 'registerRoom',
  initialState,
  reducers: {
    setLargeBuildingType(state, action: PayloadAction<string>) {
      state.largeBuildingType = action.payload;
    },

    setBuildingType(state, action: PayloadAction<string>) {
      if (action.payload === '') state.buildingType = null;
      state.buildingType = action.payload;
      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
