import todo from './todo';
import { combineReducers, applyMiddleware, createStore, CombinedState } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  todo,
});

const reducer = (
  state: CombinedState<{ todo: { todos: any } }> | undefined,
  action: { type: string; payload: any },
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

/** 스토어의 타입 */
export type RootState = ReturnType<typeof rootReducer>;

/** 미들웨어 적용을 위한 스토어 enhancer */
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
