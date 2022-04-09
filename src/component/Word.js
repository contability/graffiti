import { useState } from "react";

export default function Word({word}){
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);     // 반대값으로 바꿔주기
    }
    function toggleDone(){
        setIsDone(!isDone);
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}        {/* 단어의 뜻은 isShow가 true일 때만 보여지도록 하겠다 */}
            </td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>   {/* isShow에 따라 버튼 텍스트 달라지게 */}
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}