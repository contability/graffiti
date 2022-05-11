import axios from "axios";
import {Dispatch} from 'redux';
import {PokemonDispatchType, POKEMON_FAIL, POKEMON_SUCCESS} from "./PokemonActionTypes";
// 데이터를 불러오는 리덕스 액션 함수를 먼저 만듦

// 비동기 함수라서 async 붙여줬음
// dispatch: Dispatch 해두면 generic이라 좀 더 디테일하게 정의하기 위해 <PokemonDispatchType> 붙여줌
export const fetchPokemonData = (pokemonName:string) => async(dispatch : Dispatch<PokemonDispatchType>) => {
    console.log("fetch : " , pokemonName);
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = res.data;

        dispatch({
            type: POKEMON_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: POKEMON_FAIL
        });
    }
}