import useFetch from "../hooks/useFetch";
import {useRef} from "react";
import { useNavigate } from "react-router-dom";


export default function CreateWord(){
    const days = useFetch('http://localhost:3001/days');
    let maxDay = Math.max.apply(null, days);

    const engRef = useRef(null);        //useRef : DOM에 접근하게 해줌
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();         // 기본 이벤트 막음.
        
        // 이렇게 하면 form에서 submit 할 때 각각 ref 건 DOM에서 값 가져와서 확인 가능
        // 약간 ajaxForm의 beforeSubmit 느낌 남
        // ref.current : 해당 요소에 접근
        // ref.current.value : 그 요소에 입력된 값
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        // CREATE
        fetch(`http://localhost:3001/words`,{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
                
            })
        }).then(res => {
            if(res.ok){
                alert('생성이 완료 되었습니다');
                navigate(`/day/${dayRef.current.value}`);
            }
        });
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
            <button>저장</button>
        </form>
    );
}