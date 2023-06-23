//////////////////////////////////////////////////// 만들 액션 종류의 정의해줌
// ex) https://pokeapi.co/api/v2/pokemon/1 이런 식으로 요청할거임.
// 응답으로 오는 모든 데이터를 커버하진 않을거고 골라서 몇 개만 할거임. 안그러면 노가다스러워질 것 같음

// 데이터 호출 성공했을 경우
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
// 데이터 호출 실패했을 경우
export const POKEMON_FAIL = 'POKEMON_FAIL';

// 응답으로 올 ability 타입
export type PokemonAbility = {
    ability : {
        name : string
        url: string
    },
    is_hidden: boolean
    slot : number
}

// 응답으로 올 sprites 타입
export type PokemonSprites = {
    front_default: string
}

// 포켓몬 타입
export type PokemonType = {
    abilities : PokemonAbility[],
    sprites : PokemonSprites
}

export interface pokemonFailDispatch{
    type: typeof POKEMON_FAIL
}

export interface pokemonSuccessDispatch{
    type: typeof POKEMON_SUCCESS
    payload : {
        // 응답으로 올 abilities는 위에 정의해둔 PokemonAbility의 배열이다
        abilities : PokemonAbility[],
        sprites : PokemonSprites
    }
}

// 포켓몬 디스패치의 타입은 실패 혹은 성공이다
export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch;


