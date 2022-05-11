import { combineReducers } from "redux";
import PokemonReducer from "./PokemonReducer";

// 실제 프로젝트에서는 하나의 리듀서만 가지는 경우는 거의 없다
// 모든 리듀서를 관장하는 루트 리듀서 생성
const rootReducer = combineReducers({
    PokemonReducer
});

export default rootReducer;