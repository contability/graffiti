import { useCallback, useState } from "react";
import HookUseCallbackBox from "./HookUseCallbackBox";

/*
    Box 사이즈가 바뀔 때 Box쪽 useEffect의 console에 찍히는 박스 키우기는 정상 동작인데
    change Theme 버튼 눌렀을 때도 재렌더링이 일어나면서 Box쪽 useEffect가 실행된다. 비효율적

    이걸 막아주려면
    box 크기가 바꼈을 때만 useEffect 일어나게 해야할 것

    이 때 createBoxStyle을 useCallback으로 감싸주자
*/

export default function HookUseCallbackTwo(){
    const [size, setSizes] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle : any = useCallback(() => {
        return {
            backgroundColor : 'pink',
            width: `${size}px`,
            height: `${size}px`
        }
    }, [size]);
    
    return(
        <div style={{
            background : isDark ? 'black' : 'white'
        }}>
            <input type="number" value={size} onChange={(e)=>{setSizes(parseInt(e.target.value))}} />
            <button onClick={()=>{setIsDark(!isDark)}}>change Theme</button>
            <HookUseCallbackBox createBoxStyle={createBoxStyle}/>
        </div>
    );
}