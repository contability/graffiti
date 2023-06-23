import React from "react";
import { POKEMON_FAIL, POKEMON_SUCCESS, PokemonType, PokemonDispatchType } from "../actions/PokemonActionTypes";

// InitialState 타입
// 
interface InitialState{
    // 데이터를 제대로 가져왔는지에 대한
    success: boolean
    // 포켓몬 데이터 타입
    // 옵셔널 줬는데 처음엔 포켓몬 값이 NULL 값이기 때문
    pokemon?: PokemonType

    children?: JSX.Element
}


// tsconfig의 isolatedModules 옵션이 true로 되어 있으면 에러가 난다
// 규칙에 맞지 않다고 컴파일 에러 내주는건데
// 모듈화 시키라는 뜻이다.

// 근데 이 InitialState의 경우에는 여기에서만 사용할거기 때문에 export할 필요가 없다
// 걍 false로 설정해버림
const initialState : InitialState = {
    success: false
}

// 리듀서의 반환 값은 언제나 InitialState 값이다
const PokemonReducer = (state=initialState, action:PokemonDispatchType) : InitialState => {
    switch(action.type){
        case POKEMON_FAIL:
            return {
                ...state,
                success: false
            }
            
        case POKEMON_SUCCESS:
            const {abilities, sprites} = action.payload;
            return {
                ...state,
                success:true,
                pokemon: {
                    abilities,
                    sprites
                }
            }
        default:
            return state;
    }
}

export default PokemonReducer;