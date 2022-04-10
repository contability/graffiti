import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


export default function DayList(){
    const [count, setCount] = useState(0);
    const [day, setDay] = useState([]);

    // function onclick(){
    //     setCount(count + 1);
    // };

    // function onclick2(){
    //     setDays([...days, {id: Math.random(), day: 1}]);
    // };

    // useEffect( () => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []);

    const days = useFetch('http://localhost:3001/days');
    
    return(
        <>
            <ul className="list_day">
                {/* 날짜만큼 반복문 써서 li로 뿌려줄건데 이 때 map을 쓰면 편하다 
                    map()은 배열을 받아서 또 다른 배열로 반환되는건데 이 때 이거를 JSX로 작성해주면 됨
                */}
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>    {/* html은 a href지만 JSX는 Link to다. 저렇게 쓰면 a tag로 랜더링 됨. */}
                    </li>
                ))}
            </ul>
            {/* <button onClick={onclick}>{count}</button>
            <button onClick={onclick2}>Day Change</button> */}
        </>
    );  
}