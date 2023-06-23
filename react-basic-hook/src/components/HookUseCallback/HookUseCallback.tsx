import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
/*  
    리액트 컴포넌트 성능 최적화 관련한 useCallback

    useCallback(memoization할 callback 함수, 의존성 배열);
    useCallback( () => {
        return value;
    }, [item]);

    useMemo와 마찬가지로 memoization을 통해 컴포넌트를 최적화 시킨다

    차이점은
    useMemo는 useMemo(() => {return value;}, []); 이렇게 있다면 value를 memoization한다면
    useMemo는 useCallback(() => {return value;}, []); 이렇게 있다면 () => {return value;}. 즉 함수 자체를 memoization 한다
    
    함수가 필요할 때 마다 그 함수를 호출

    렌더링 -> Component 함수 호출 -> Memoize 된 함수를 재사용

    처음 컴포넌트가 마운트 될 때 함수 객체 자체를 계속해서 가지고 있으면서 
    이후 렌더링 때는 그 함수 객체 자체를 재사용
 */

export default function HookUseCallback(){
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction : any = useCallback(() => {
        console.log(`someFunc : number : ${number}`);
        return;
    }, [number]);     
    // memoization된 함수 그대로를 저장하기 떄문에 변수 number도 초기화 값인 0으로 아예 기억을 해버린다
    // 그래서 Call someFunc 버튼 눌러도 number는 0인 상태로 콘솔에 찍힘

    // 이때 의존성 배열에 number를 넣어주면 number가 바뀔 때 메모리 재할당함. 

    useEffect(() => {
        console.log('someFunction이 변경되었습니다.');
    }, [someFunction]);

    return (
        <div>
            <input type="number" value={number} onChange={(e)=>{setNumber(parseInt(e.target.value))}}/>
            <button onClick={ () => {setToggle(!toggle)}}>{String(toggle)}</button>
            <br/>
            <button onClick={someFunction}>Call someFunc</button>
            <br/>
            <p>
                <Link to={'/useCallbackTwo'}>
                    <button>useCallbackTwo</button>
                </Link>
            </p>
        </div>

    );
}