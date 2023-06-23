import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState } from '../types/reduxState';

// slice 파일 생성

// initialState 타입 정의
const initialState: CommonState = {
  validateMode: false,
};

/** thunk */
// export const fetchAsync = createAsyncThunk('', async () => {
//   return;
// });

// slice 생성
const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<generic>으로 지정
    setValidateMode(state, action: PayloadAction<boolean>) {
      state.validateMode = action.payload;
    },
  },
  // thunk 처리
  // extraReducers: {}
});

// Action 익스포트
export const commonActions = { ...common.actions };

// slice 익스포트
export default common;

// *** 참고: extraReducers 를 buidler.addCase 로 작성해도 된다.
// const couterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         plusCounter: (state: CounterState, action: PayloadAction<number>) => {
//             state.value += action.payload;
//         },
//         minusCounter: (state: CounterState, action: PayloadAction<number>) => {
//             state.value -= action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchAsync.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchAsync.fulfilled, (state, action) => {
//                 state.status = 'idle';
//                 state.value = action.payload;
//             })
//             .addCase(fetchAsync.rejected, (state) => {
//                 state.status = 'failed';
//             });
//     }
