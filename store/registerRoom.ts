import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRoomState } from '../types/reduxState';

const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
  maximumGuestCount: 1,
  bedroomCount: 0,
  bedCount: 1,
  bedList: [],
  publicBedList: [],
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

    setRoomType(state, action: PayloadAction<'entire' | 'private' | 'public'>) {
      state.roomType = action.payload;
      return state;
    },

    setIsSetUpForGuest(state, action: PayloadAction<boolean>) {
      state.isSetUpForGuest = action.payload;
      return state;
    },

    setMaximumGuestCount(state, action: PayloadAction<number>) {
      state.maximumGuestCount = action.payload;
      return state;
    },

    setBedroomCount(state, action: PayloadAction<number | 0>) {
      state.bedroomCount = action.payload;
      return state;
    },

    setBedCount(state, action: PayloadAction<number>) {
      state.bedCount = action.payload;
      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
