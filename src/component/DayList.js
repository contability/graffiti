import dummy from "../db/data.json";
export default function DayList(){
    console.log(dummy);
    return(
        <ul className="list_day">
            {/* 날짜만큼 반복문 써서 li로 뿌려줄건데 이 때 map을 쓰면 편하다 
                map()은 배열을 받아서 또 다른 배열로 반환되는건데 이 때 이거를 JSX로 작성해주면 됨
            */}
            {dummy.days.map(day => (
                <li key={day.id}>
                    Day {day.day}
                </li>
            ))}
        </ul>
    );  
}