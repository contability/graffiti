import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import common from './common';
import user from './user';

const rootReducer = combineReducers({
  common: common.reducer,
  user: user.reducer,
});

// 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    if (state === initialRootState) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return state;
  }
  return rootReducer;
};

// 타입 지원되는 커스텀 useSelector
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => {
  const store = configureStore({
    reducer,

    /* 
    ## A non-serializable value was detected in an action, in the path: `type` 에러 대응.

    - action에 직렬화가 불가능한 값을 전달했다는 뜻으로 해석할 수 있고 (여기서 직렬화는 redux에서 값을 주고받을 때 object 형태의 값을 string 형태로 변환하는 것을 의미)
    - 역직렬화는 직렬화의 반대로, 문자열 형태의 객체를 다시 object 형태로 되돌리는 과정. (JSON.parse)
    - Redux는 state, action에 직렬화가 불가능한 값을 전달할 수 없기 때문에 에러가 발생한 것.
    - 대응 방법 중 하나로 미들웨어 추가 했음.
    */
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
  });
  initialRootState = store.getState();
  return store;
};

export const wrapper = createWrapper(initStore);
