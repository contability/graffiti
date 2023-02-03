// store 파일
// 1. 루트 리듀서 만들기. HYDRATE 액션을 처리하고, 슬라이스 통합
// 2. store 생성 함수 만들기
// 3. next-redux-wrapper 라이브러리의 wrapper를 만들어 export.

import { configureStore, getDefaultMiddleware, Reducer, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { Action, AnyAction, CombinedState, combineReducers } from 'redux';
import logger from 'redux-logger';
import { CommonState, UserState } from '../types/reduxState';
import common from './common';
import user from './user';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

/** 리듀서들 state 타입 정의 */
export interface ReducerStates {
  common: CommonState;
  user: UserState;
}

/** 루트 리듀서 생성.
 * 1) next-redux-wrapper의 HYDRATE 액션 정의
 * 2) 슬라이스 통합
 * next-redux-wrapper의 사용 매뉴얼이므로 그냥 이렇게 해주면 알아서 처리 됨.
 */
const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
  switch (action.type) {
    // next-redux-wrapper의 HYDRATE 액션 처리(그냥 이렇게 해주면 됨)
    case HYDRATE:
      return action.payload;

    // 슬라이스 통합.
    default: {
      const combinedReducer = combineReducers({
        common: common.reducer,
        user: user.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

/** store 생성 함수 */
const makeStore = () => {
  // 필요에 따라 미들웨어 추가.
  const middleware = getDefaultMiddleware();
  if (process.env.NODE_ENV === 'development') middleware.push(logger);

  // store 생성
  const store = configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>, // 리듀서
    middleware, // 미들웨어
    devTools: process.env.NODE_ENV === 'development', // 개발자 도구
  });

  // store 반환
  return store;
};

// type export
export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
export type AppDispatch = AppStore['dispatch']; // dispatch 타입
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;      // Thunk를 위한 타입

// next-redux-wrapper의 wrapper 생성 및 export
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

//  useSelector Custom Hook -> useSelector 사용 시 state 뒤에 붙여야 하는 RootState를 안붙여도 됨.
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// useDispatch Custom Hook -> Thunk 사용 쉽게 하기 위해
// export const useAppDispatch : () => AppDispatch = useDispatch;
