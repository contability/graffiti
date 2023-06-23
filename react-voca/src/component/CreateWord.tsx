import useFetch from "../hooks/useFetch";
import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { IDay } from "./DayList";


export default function CreateWord(){
    const days : IDay[] = useFetch('http://localhost:3001/days');
    let maxDay = Math.max.apply(null, days);

    const engRef = useRef<HTMLInputElement>(null);        //useRef : DOM에 접근하게 해줌
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    const navigate = useNavigate();

    // isLoading이 false일 때만 onSubmit 로직 실행
    // 통신중일 땐 버튼 클릭해도 이벤트 진행 안되게 막기 위함
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e : React.FormEvent){
        e.preventDefault();         // 기본 이벤트 막음.
        
        // 이렇게 하면 form에서 submit 할 때 각각 ref 건 DOM에서 값 가져와서 확인 가능
        // 약간 ajaxForm의 beforeSubmit 느낌 남
        // ref.current : 해당 요소에 접근
        // ref.current.value : 그 요소에 입력된 값
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        //isLoading이 false이고 ref들의 current가 존재한다면
        if(!isLoading && dayRef.current && engRef.current && korRef.current){
            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

             // CREATE
            fetch(`http://localhost:3001/words`,{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                day,
                eng,
                kor,
                isDone : false
                
            })
        }).then(res => {
            if(res.ok){
                alert('생성이 완료 되었습니다');
                navigate(`/day/` + dayRef.current.value);
                setIsLoading(false);
            }
        });
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{opacity : isLoading ? 0.3 : 1}}>
                {isLoading ? "Saving..." : "저장"}
            </button>
        </form>
    );
}