import { createContext } from "react";

///////////////////////////////////////////////////// context를 만들어줄 ThemeContext
// 리액트 context를 만들려면

// 1. createContext 임포트 받기

export const ThemeContext : any = createContext(null);        // 이렇게 하면 context 하나 만들어진거임
/*
    지금 null로 초기값을 주고 -> context provider에 value prop으로 값들을 하위 컴포넌트들에게 전달하는 방식이 사용됐다.

    그러지 않고 초기값을 
    createContext('hello'); 라고 초기값을 넣어주고 -> context provider 삭제 -> 아무 컴포넌트나 가서 useContext 사용해서 값 받아보면 -> hello라고 전달 된다
    
    context provider를 삭제한다는건 넘겨주는 value가 없다는 뜻이고
    그렇게 되면 초기값으로 넣어준게 return 되는 것이다.

    이제 다시 처음에 null로 주고 구현했던 context 방법으로 돌아가서 생각해보면
    그것도 context provider 없애고 다른 컴포넌트에서 context 값 받아주면?
    null이 뜸.

    context provider는 value를 전달하는 역할을 했던거임

*/ 

