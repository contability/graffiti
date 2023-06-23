/*
    ////////////////////////////////////////////////// useRef로 DOM 요소에 직접 접근하기
    // const ref = useRef(value);
    // -> {current: value} 이렇게 되는데
    // 이 ref를 접근하고자 하는 요소 태그에 ref 속성으로 넣어주기만 하면 됨

    // 텍스트박스에 focus를 줄 때 많이 사용 됨
    // 예를 들어 login창 같은거

    // 바닐라스크립트의 Document.querySelector() 같은 기능
*/

import { useEffect, useRef } from "react";



// input 태그를 자동으로 포커싱하게 만들거임
export default function HookUseRefDom(){

    // useRef에 아무 value도 주지 않는다.
    // 어차피 아래에서 저 input 태그 넣어줄거임
    const inputRef : any = useRef();            // 이렇게 하면 저 앞에 있는 input에 자동 포커싱 됨

    useEffect(()=>{                                     // 첫 렌더링 때 input 태그에 focusing
        //console.log(inputRef);
        inputRef.current.focus();               
    },[]);

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`);
        inputRef.current.focus();                   // 로그인 버튼 누르고 나면 얼럿 뜨고 나서 다시 input 태그 포커싱
    }


  return (
        <div>
             <input ref={inputRef} type="text" placeholder="userName" />         {/*  ref의 current 안에 input이 들어감 */}
            <button onClick={login}>로그인</button>
        </div>
    );
}