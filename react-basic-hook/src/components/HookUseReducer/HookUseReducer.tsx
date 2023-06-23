import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

/*
    useReducer

    useState 말고 얘도 state를 관리하는 앤데
    여러개의 하위 값을 포함하는 복잡한 객체 state를 관리해야할 때 useReducer가 유리하다

    reducer를 사용하는데 3가지를 알아야 함

    Reducer, Dispatch, Action 

    철수가 은행에 방문해서 "만원 출금 해주세요" ->
    은행의 철수 거래 내역에서 만원이 빠져나간걸로 기록(철수가 직접 하지 않고 은행이 대신 update)

    거래내역을 state라고 보면
    철수가 직접 수정하지 않고 은행이 철수의 요구대로 대신 state 해줌
    이 때 은행은 Reducer임

    즉, state를 변경하고 싶다면 꼭 Reducer를 통해서 해야 하는 거임

    그리고 여기서 "만원 출금 해주세요" 요구 하는 것을 dispatch라고 볼 수 있고
    "만원 출금 해주세요"라는 내용이 Action임

    요구라는 dispatch 안에 내용이라는 Action을 담아서 Reducer에게 보내서 state를 변경함

    Dispatch(Action) ----> Reducer(State, Action) ----> state Update

    형태 : 
    useReducer는 2개의 인자를 받는다
    const [item, dispatch] = useReducer(reducer, item의 초기 값);
*/

//reducer - state를 업데이트 하는 역할(은행)
//dispatch - state 업데이트를 위한 요구
//action - 요구의 내용

const ACTION_TYPES = {
    deposit : 'deposit',
    withDraw : 'withDraw'
}

const reducer : any = (state : any, action : any) => {        
    // /reducer는 2가지 인자를 받는다. 첫번째는 현재 state, 두번째는 Action
    // 여기에서만 state가 수정된다
    console.log('reducer가 일을 합니다!');
    console.log('state: ',state,' action: ',action);
    
    switch (action.type){
        case ACTION_TYPES.deposit :    // 예금
            return state + action.payLoad
        case 'withDraw':
            return state - action.payLoad
        default :               //디폴트
            return state
    }
}

// 코드를 더 깔끔하게 만들려면
// action에 있는 type들을 
// constructor로 빼줌


export default function HookUseReducer(){
    const [number, setNumber] = useState(0);
    const [money, dispatch] : any = useReducer(reducer, 0);

    return (
        <div>
            <h2>useReducer 은행에 오신 것을 환영합니다</h2>
            <p>잔고: {money}원</p>
            <input type="number" 
            value={number} 
            onChange={(e)=>{setNumber(parseInt(e.target.value))}}  
            step="1000"/>
            <button onClick={()=>{
                dispatch({
                    type: ACTION_TYPES.deposit,
                    payLoad : number
                });         // dispatch에다가 action을 실어 보내는데 보통 Object로 보낸다
                }}>예금</button>
            <button onClick={()=>{
                dispatch({
                    type: ACTION_TYPES.withDraw,
                    payLoad : number
                });
            }}>출금</button>
            <p>
                <Link to={'/useReducerTwo'}>
                    <button>useReducerTwo</button>
                </Link>
            </p>
        </div>
    );
}