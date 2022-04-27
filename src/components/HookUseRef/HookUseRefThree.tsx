

import { useEffect, useRef, useState } from "react";

/* 
    ------------------------------------------------------------------------------------ 언제 Ref가 굉장히 유리할까?

    // 이번엔 저 올려 버튼을 막 눌렀을 때 렌더링이 총 몇 번 진행이 됐는지 콘솔로 확인할거다.
    // 위에꺼를 단순히 어떻게 구현 해볼지 생각해보면 useEffect 사용하면 렌더링 될 때 마다 실행될테니까 사용하면 되지 않나 할텐데
    // 그렇게 해보면 무한 재렌더링에 빠진다.
*/



export default function HookUseRefThree(){
    const [count,  setCount] = useState(1);

    /////////////////////////////////////////////////////// 무한 재렌더링
    // const [renderCount, setRenderCount] = useState(0);

    // useEffect(() => {
    //     console.log('렌더링!');
    //     setRenderCount(renderCount + 1);
    // });

    // 이유는 올려 버튼을 누르면 count state가 변하면서 렌더링이 일어나고
    // 위에 useEffect가 실행되는데
    // 그러면 useEffect 안에 renderCount의 값도 변화하면서 또 렌더링되고 계속 무한히 렌더링 되는 것
    ///////////////////////////////////////////////////////


    // 위 상황을 Ref로 구현하면?
    const renderCount = useRef(1);
    
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수 : ', renderCount.current);
    });
    // 당연히 정상적으로 실행된다. Ref는 렌더링을 발생시키지 않으니까
    
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => {setCount(count + 1)}}>올려</button>
        </div>
    );
}