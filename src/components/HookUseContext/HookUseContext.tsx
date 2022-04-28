import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import HookUseContextPage from "./HookUseContextPage";

/*
    ////////////////////////////////////////////////////////////////////////////////////// useContext

    prop drilling의 비효율은 몇 번이고 들었다
    redux도 있지만 useContext도 가능

    ex) 최상단인 App이 가진 어떠한 Data를 얘 필요한 사람~ 이렇게 모든 컴포넌트들에게 알리고
        필요한 컴포넌트에선 useContext로 가져다 쓸 수 있게 되는 것
        
    추가로 Context를 사용하면 prop은 필요 없는거 아닌가? 할 수 있지만

    Context를 사용하면 컴포넌트 재사용이 어려워질 수 있다.
    Context는 꼭 필요할때만 사용한다

    Context의 목적은 다양한 컴포넌트들에게
    "전역적인 데이터"를 전달하기 위함

    React 공홈에도 Prop Drilling을 피하기 위한 목적이라면 
    Component Composition(컴포넌트 합성)을 먼저 고려해보라 권장한다.
*/

export default function HookUseContext(){
    const [isDark, setIsDark] = useState(false);            // 전역적인 state인 isDark. 만약 이 앱이 굉장히 컸다면 수많은 컴포넌트들이 이 isDark라는 데이터를 필요로 할 거다

    return (
        <ThemeContext.Provider value ={{isDark, setIsDark}}>                 {/* context의 provider는 value라는 prop을 하나 받는다.  그리고 이 value라는애한테  다른 컴포넌트들한테 전달하고자 하는 데이터를 보내면 됨*/}
            <HookUseContextPage isDark={isDark} setIsDark={setIsDark} />;        // props로 isDark, setIsDark 넘겨줌
        </ThemeContext.Provider>
    );
    
}