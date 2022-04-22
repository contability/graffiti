import logo from './logo.svg';
import './App.css';
import './style.css';
import { useState } from 'react';
import { createStore} from 'redux';
import {Provider, useSelector, useDispatch, connect} from 'react-redux';
//스토어를 생성할 때 반드시 주입해줘야 하는 것. reducer
function reducer(currentState, action){     // 스토어 안에 state를 어떻게 바꿀 것인가를 결정하는게 reducer. 그래서 현재 state값, 바꿀 값 이렇게 2개를 인자로 받는다.
  if(currentState === undefined){     // state가 정의되지 않았다면
    return {
      number : 1          // 기본 state값을 return
    }
  }
  const newState = {...currentState};   // 과거의 state를 불변하게 두고 대신에 복제하여 새로운 state를 수정한다.
  if(action.type === 'PLUS'){         // useDispatch로 온거 
    newState.number++;
  }
  return newState;
}
const store = createStore();      // store는 변하면 안됨

function App() {
  const[number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1 number={number}/>
        <Provider store={store}>       {/*이렇게 둘러싼 곳 안쪽에다 state값을 제공하겠다는 뜻. 한 번에 여러 개도 됨*/}
          <Right1/>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props){
  return(
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}/>
    </div>
  );
}

function Left2(props){
  return(
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}/>
    </div>
  );
}

function Left3(props){
  return(
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  );
}

function Right1(props){
  return(
    <div>
      <h1>Right1</h1>
      <Right2/>
    </div>
  );
}

function Right2(props){
  return(
    <div>
      <h1>Right2</h1>
      <Right3/>
    </div>
  );
}

function Right3(){
  const number = useSelector((state) => state.number);  //useSelector
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Right3 : {number}</h1>
      <input type="button" value="+" onClick={() => {
        dispatch({ type : 'PLUS' });                    // PLUS라는 Action을 전달하는데 useDispatch는 reducer를 불러온다
      }}/>
    </div>
  );
}
export default App;
