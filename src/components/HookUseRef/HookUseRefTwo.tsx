import { useRef, useState } from "react";

/////////////////////////////////////// useRef와 그냥 변수의 차이

// Ref의 변화도 렌더링을 일으키지 않고
// 변수의 변화도 렌더링을 일으키지 않는다

// 렌더링을 일으킬 하나의 state를 추가해줘서 화면을 업데이트 한다

// 렌더! 버튼을 누르면 rendere state에 변화를 주면서 화면을 재렌더링 시킨다

// 여기서 차이가 생기는데
// ref의 증가된 값은 화면에 적용되지만 일반 변수는 똑같이 0이다

// 생각해보면 간단한데 렌더링이란건 컴포넌트를 만들어내는 밑에 HookUseRefTwo 함수가 다시 불린다는 것

// 그럼 당연히 일반 변수인 countVar는 0으로 초기화 될 것
// 하지만 Ref는 컴포넌트의 전생애주기를 통해 유지되니까 증가값이 렌더링 되는거다


export default function HookUseRefTwo(){
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar : number = 0;

    const doRendering = () => {
        setRenderer(renderer + 1);
    }
    
    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('ref: ', countRef.current);
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('var: ', countVar);
    }

    // 현재 설명하는 현상에 대한 추가 확인 함수
    const printResults = () => {
        // 이 함수가 불려지면 그 때의 countRef 값과 일반 변수의 값을 콘솔에 찍음
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    }
    
    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>
            <button onClick={doRendering}>렌더!</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
            <button onClick={printResults}>Ref Var 값 출력</button>
        </div>
    );
}