import { useState } from "react";

export default function Word({word : w}){               // word를 w라는 새로운 변수명으로 할당
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);     // 반대값으로 바꿔주기
    }
    function toggleDone(){
        // setIsDone(!isDone);

        // CRUD UPDATE
        fetch(`http://localhost:3001/words/${word.id}`,{            //fetch(url, 객체);
            method : 'PUT',     // update는 PUT
            headers : {         // 헤더
                'Content-Type' : 'application/json'        // 보내는 리소스의 타입을 의미
            },
            body : JSON.stringify({                // 바디에는 JSON 문자열로 변환해서 바꿀 정보 담는다.
                ...word,            //기존 데이터에
                isDone : !isDone    //isDone을 바꿔서 입력한다.

            })
        })
        .then(res => {              // 위에 요청을 보내서 응답이
            if(res.ok){             // ok면
                setIsDone(!isDone); // isDone state 변경
            }
        });
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){                   // window. 안붙여주면 에러남. javascript는 생략 가능했는데 이건 아닌가보다. 차이점 확인
            fetch(`http://localhost:3001/words/${word.id}`,{        // update랑 똑같은데 method만 DELETE
                method : 'DELETE'
            })
            .then( res => {
                if(res.ok){                                         // 응답이 ok라면
                    setWord({id:0});                                // 단순히 id만 0으로 바꿔준다. 현재 컴포넌트는 상위 컴포넌트에서 반복문을 통해 각각 뿌려져있는 상태니까 삭제하고 나면 어차피 word는 빈다. 뭔가 걍 채워준거임.
                }
            });
        }
    }

    if(word.id === 0){
        return null;                                                // 아무것도 표현하지 않는다.
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
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr>
    );
}