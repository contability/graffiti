import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todo from './todo';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

/////////////////////////////////////////////// reducx
// const rootReducer = combineReducers({
//   todo,
// });

// const reducer = (state: any, action: any) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       ...action.payload,
//     };
//     return nextState;
//   }
//   return rootReducer(state, action);
// };

// /** 스토어의 타입 */
// export type RootState = ReturnType<typeof rootReducer>;

// /** 미들웨어 적용을 위한 스토어 enhancer */
// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension');
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// const initStore = () => {
//   return createStore(reducer, bindMiddleware([]));
// };

// export const wrapper = createWrapper(initStore);

/////////////////////////////////////////////////// redux toolkit
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

/** 스토어의 타입 */
export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
  return configureStore({
    reducer,
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
