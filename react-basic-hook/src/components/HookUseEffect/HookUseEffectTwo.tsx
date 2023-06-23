import { useState } from "react";
import HookUseEffectTimer from "./HookUseEffectTimer";

// Timer가 true일 때만 타이머를 보여주고 싶다.

// 처음 toggleTimer를 눌러서 Timer Component를 마운트 시키면
// Timer 컴포넌트 내부의 useEffect로 만든 타이머가 돌기 시작하는데

// 다시 toggleTimer를 눌러서 false로 만들고 Timer Component를 UnMount 시켜도
// 타이머는 계속 돈다

// 이유는 Timer 내부의 타이머를 정리해주지 않아서 그렇다고 한다.

// 정리를 하려면
// Timer 내부의 useEffect의 return 값으로 함수를 넣어주면 됨
// 즉, useEffect 내부에 return 값으로 함수를 넣어주면 해당 component가 UnMount 될 때 실행 됨

export default function HookUseEffectTwo(){
    const [showTimer, setShowTimer] = useState(false);

    const toggleTimer = () => {
        setShowTimer(!showTimer);
    }

    return (
        <div>
            {showTimer && <HookUseEffectTimer/>}                 {/* showTimer가 true일 때 Timer 컴포넌트를 보여주겠다 */}
            <button onClick={toggleTimer}>Toggle Timer</button>
        </div>
    );
}