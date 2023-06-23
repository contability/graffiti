import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {RootReducerType} from "./Store";
import {fetchPokemonData} from "./actions/PokemonActions";
import { useDispatch } from 'react-redux';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const pokemonReducer = useSelector((state : RootReducerType) => state.PokemonReducer );
  const dispatch : any = useDispatch();
  
  const handlePokemonName = (eventValue : string) => {
    setPokemonName(eventValue);
  }

  const searchButtonTapped = () => {
    // 이 함수는 그냥 호출하면 안됨.
    // 액션 함수기 때문에 dispatch를 이용해줘야 함
    dispatch(fetchPokemonData(pokemonName));
  }

  return (
    <div className="App">
      <input value={pokemonName} onChange={(e) => {
        handlePokemonName(e.target.value);
      }}/>
      <button onClick={searchButtonTapped}>포켓몬 찾기</button>
      {/* pokemonReducer가 success일 때만 div태그 띄움 */}
      {pokemonReducer.success && <div> 
          <p>pokemonName : {pokemonName}</p>
          {/* pokemon? 이것처럼 Question 마크가 있다면 이 객체가 있을 때만 보여주겠다는 뜻 */}
          {pokemonReducer.pokemon?.abilities.map((ability) => {
            return (
              <div key={ability.ability.name}>
                <p>abilityName : {ability.ability.name}</p>
                <p>abilitySlot : {ability.slot}</p>
              </div>)
          })}
          <img src={pokemonReducer.pokemon?.sprites.front_default} alt={pokemonReducer.pokemon?.sprites.front_default} title={pokemonName} />
          </div>}
    </div>
  );
}

export default App;
