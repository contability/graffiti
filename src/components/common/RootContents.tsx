import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const RootContents : Function = () => {

    const [dayStr, setDayStr] = useState<string>();
    const [day, setDay] = useState<string>();
    const [month, setMonth] = useState<string>();


    const getCurrentTime = () => {
        axios.get(`https://worldtimeapi.org/api/timezone/Asia/Seoul`)
        .then((res) => {
            if(res){
                console.log(res);
                convertDayOfweek(res.data.day_of_week);
            }
        })
        .catch(err => console.error(err)
        );
    };

    const convertDayOfweek = (dayOfWeek : number) => {
        switch(dayOfWeek){
            case 1:
                setDayStr("Sunday");
                break;
            case 2:
                setDayStr("Monday");
                break;
            case 3:
                setDayStr("Tuesday");
                break;
            case 4:
                setDayStr("Wendsday");
                break;
            case 5:
                setDayStr("Thursday");
                break;
            case 6:
                setDayStr("Friday");
                break;
            case 7:
                setDayStr("Saturday");
                break;
            default:
                alert("error");
                break;
        }       
    };

    useEffect(() => {
        getCurrentTime();
    });
    return(
        <RootContentsBox>
            {dayStr} {day} {month}
        </RootContentsBox>
    );
};

const RootContentsBox = styled.div`
    width: 30vw;
    height: 97%;
    background: white;
    border-radius: 15px;
`;

export default RootContents;