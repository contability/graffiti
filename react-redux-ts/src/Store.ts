
// 비동기 통신 사용을 위한 applyMiddleWare 
import { createStore, applyMiddleware} from "redux";

import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));

// ReturnType 함수
export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;