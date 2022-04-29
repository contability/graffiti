
/*
    기본적인 React Hook을 익혔다면 컴포넌트 성능을 최적화하는 방법에 관심을 갖자
    리액트 컴포넌트 최적화에 사용하는 대표적인 hook은 useMemo와 useCallback이 있다.
    여기서는 useMemo를 다룬다

    /////////////////////////////////////////useMemo
    Memo = Memoization
    값을 메모리에 저장해서 필요할 때 마다 연산을 다시 거치지 않고 메모리에서 바로 꺼내다 쓰는 기법

    맨 처음 계산을 할 때 캐싱을 해둬서 그 값이 필요할 때 마다 다시 계산을 하는게 아니라
    캐시에서 꺼내서 사용하는 것

    기억해둬야 할 사항은
    함수형 컴포넌트는 함수라는 것.

    그리고 렌더링이란건 그 함수가 호출된다는 뜻.

    //////////////////////// 기존 렌더링 될 때와의 차이점
    렌더링 -> Component 함수 호출 -> 모든 내부 변수 초기화
    를 useMemo를 사용하면 

    첫 렌더링 -> Component 함수 호출, Memoization -> 렌더링 -> Component 함수 호출, Memoize된 값을 재사용

    ////////////////////// 형태는
    useMemo(memoization 해줄 값을 계산해서 return해주는 콜백 함수, 의존성 배열);

    const value = useMemo(() => {
        return 함수();
    }, [item]);

    ///////////////////// 주의
    useMemo는 꼭 필요할 때만 사용하기

    남용하면 성능에 무리가 간다

    값을 재활용 하기 위해 메모리에 싣는거라
    필요 없는 자잘한 것까지 해두면 오히려 성능 저하를 일으킨다

    easyCalculate는 너무 간단하고 빠르게 끝날 수 있는 함수인데 이걸 실행함에도 렌더링 될 때 hardCalculate도 다시 실행 되기 때문에 오래걸려버림

    이럴 때 useMemo 사용
 */

import { useMemo, useState } from "react";

const hardCalculate : any = (number : number) => {
    console.log('어려운 계산!');
    for(let i = 0; i < 999999999; i++){}    // 생각하는 시간
    return number + 10000;
}

const easyCalculate : any = (number : number) => {
    console.log('과하게 쉬운 계산!');
    return number + 1;
}      

export default function HookUseMemo(){
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // 이 컴포넌트가 얘 떄문에 렌더링이 느려짐. 그래서 useMemo를 사용한다
    //const hardSum = hardCalculate(hardNumber);

    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber);
    }, [hardNumber])
    // 이렇게 짜면 hardNumber가 변화할 때만 오래걸리지 easyCalculate는 바로바로 반응한다.

    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" 
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))} 
            />
            <span> + 10000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input type="number" 
                value={easyNumber}
                onChange={(e) => setEasyNumber(parseInt(e.target.value))}       /*  */
            />
            <span> + 1 = {easySum}</span>
        </div>
    );
}