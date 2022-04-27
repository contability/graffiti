


import { useRef, useState } from "react";
import { Link } from "react-router-dom";

//////////////////////////////////////////////////// UseRef

// const ref = useRef(value);
// 함수형 컴포넌트에서 useRef를 부르면 Ref Object를 반환한다.
// Ref Object는 { current : value } 이렇게 생김

// useRef에 인자로 전달한 초기 값은 Ref Object 안에 current에 저장 됨
// Ref Object는 수정이 가능하기 때문에 언제든 우리가 원하는 값으로 바꿀 수 있음

// 반환된 Ref는 Component의 전 생애주기를 통해 유지가 된다.
// Component가 계속 렌더링 되어도 Component가 unMount 되기 전 까지는 값을 그대로 유지할 수 있다는 뜻.

// UseRef가 유용한 2가지 상황이 있음

// 1. Ref는 State와 비슷하게 어떠한 값을 저장해두는 저장 공간으로 사용 가능
//      state의 변화 -> 렌더링 -> 컴포넌트 내부 변수들이 초기화 되기 때문에 가끔 곤란한 상황이 생긴다
//      반대로 Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨  
//      불필요한 렌더링을 막을 수 있음
//      또 잘 생각해보면 state의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지되는거임
//      값을 변화시키지 않아야 하는 값을 저장할 때 유용하다.

// 2. Dom 요소에 접근
//      input 요소를 클릭하지 않아도 focus를 준다거나 할 수 있음
//      예를들어, 로그인 창에서 id 입력 태그를 클릭하지 않아도 알아서 가있게 하는것 처럼


export default function HookUseRef(){
    const [count, setCount] = useState(0);
    console.log('렌더링...');

    const countRef = useRef(0);
                 // useRef가 뭘 반환했는지 보자

    const increaseCountState = () => {
        setCount(count + 1);            // React에서 state가 변경된다 = Component가 다시 렌더링 된다
                                        // 현재 component는 함수형 component이기 때문에 이 HookUseRef라는 함수가 다시 불러진다는 뜻
    }
    
    const increaseCountRef = () => {                 // 이거 실행되도 아무일도 안일어나는 것 처럼 보인다.
        countRef.current = countRef.current + 1;     // 아무 일도 안일어나는게 아니라 Ref 값은 변화해도 다시 재렌더링 되지 않기 때문에 화면에서는 안보이는거임. 사실은 누를 때 마다 값 증가중임.
        console.log('Ref : ', countRef.current); 
    }
    return (
        <div>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
            <p>
                <Link to={'/useRefTwo'}>
                    <button>useRefTwo</button>
                </Link>
                <Link to={'/useRefThree'}>
                    <button>useRefThree</button>
                </Link>
            </p>
        </div>
    );
}