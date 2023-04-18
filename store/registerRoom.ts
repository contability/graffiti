import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRoomState } from '../types/reduxState';
import { BedType } from '../types/room';

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
      const bedroomCount = action.payload;
      let { bedList } = state;

      state.bedroomCount = bedroomCount;

      if (bedroomCount < bedList.length) {
        // 기존 침대 갯수가 더 많으면 초과 부분 잘라내기
        bedList = state.bedList = state.bedList.slice(0, bedroomCount);
      } else {
        // 변경될 침대 개수가 더 많으면 나머지 침실 채우기
        for (let i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
          bedList.push({ id: i, beds: [] });
        }
      }

      state.bedList = bedList;

      return state;
    },

    setBedCount(state, action: PayloadAction<number>) {
      state.bedCount = action.payload;
      return state;
    },

    setBedTypeCount(state, action: PayloadAction<{ bedroomId: number; type: BedType; count: number }>) {
      const { bedroomId, type, count } = action.payload;
      const bedroom = state.bedList[bedroomId - 1];
      const prevBeds = bedroom.beds;
      const index = prevBeds.findIndex(bed => bed.type === type);
      if (index === -1) {
        // 타입이 없다면
        state.bedList[bedroomId - 1].beds = [...prevBeds, { type, count }];
        return state;
      }

      // 타입이 존재한다면
      if (count === 0) state.bedList[bedroomId - 1].beds.splice(index, 1);
      else state.bedList[bedroomId - 1].beds[index].count = count;

      return state;
    },

    setPublicBedTypeCount(state, action: PayloadAction<{ type: BedType; count: number }>) {
      const { type, count } = action.payload;
      const index = state.publicBedList.findIndex(bed => bed.type === type);

      //* 타입이 없다면
      if (index === -1) {
        state.publicBedList = [...state.publicBedList, { type, count }];
        return state;
      }

      //* 타입이 존재한다면
      if (count === 0) state.publicBedList.splice(index, 1);
      else state.publicBedList[index].count = count;

      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
