import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { taskData, taskListInterface } from "../../data/D_TaskList";

const RootContents : Function = () => {

    const [dayStr, setDayStr] = useState<string>();
    const [date, setDate] = useState<number>();
    const [month, setMonth] = useState<string>();
    const [taskList, setTaskList] = useState<taskListInterface[] | null>();


    const getCurrentTime = () => {
        axios.get(`https://worldtimeapi.org/api/timezone/Asia/Seoul`)
        .then((res) => {
            if(res){
                console.log(res);

                let currentTime = new Date(res.data.datetime);
                setDate(currentTime.getDate());
                setMonth(currentTime.toLocaleString('en-us', {month: 'long'}));
                convertDayOfweek(res.data.day_of_week);
            }
        })
        .catch(
            err => console.error(err)
        );
    };

    const convertDayOfweek = (dayOfWeek : number) => {
        // worldTimeApi
            // day_of_week
            // type : integer
            // current day number of the week, where sunday is 0

        switch(dayOfWeek){
            case 0:
                setDayStr("Sunday");
                break;
            case 1:
                setDayStr("Monday");
                break;
            case 2:
                setDayStr("Tuesday");
                break;
            case 3:
                setDayStr("Wendsday");
                break;
            case 4:
                setDayStr("Thursday");
                break;
            case 5:
                setDayStr("Friday");
                break;
            case 6:
                setDayStr("Saturday");
                break;
            default:
                alert("error");
                break;
        }       
    };

    const statusChange = (e : ChangeEvent) => {
        console.log(e);
        
    };

    const getTaskList = () => {
        setTaskList(taskData);
    };

    useEffect(() => {
        getCurrentTime();
        getTaskList();
    }, []);

    return(
        <RootContentsBox>
            
            <article>
                <header className="defaultP">
                    <div>
                        <p>{dayStr}, {date}</p>
                        <p>{taskList ? taskList.length : 0 } Tasks</p>
                    </div>
                    <div>
                        <p>{month}</p>
                        <p>
                            <button>CLEAR LIST</button>
                        </p>
                    </div>
                </header>
                <section className="defaultP">
                    <input className="addTask" type="text" placeholder="+    Type your task"/>
                </section>
                <section className="defaultP secSec">
                    {taskList? taskList.map((v, i) => (
                        <div className="task" key={i}>
                            <div className="taskTitle">
                                <input type="checkbox" checked={v.isChked} onChange={(e) => statusChange(e)}/>
                                <p>{v.title}</p>
                            </div>
                            <div>
                                <p>{v.registDate}</p>
                            </div>
                        </div>
                    ))
                    :
                        <div>empty task</div>
                    }
                    
                </section>
                <footer>
                    <p>
                        <span>Inspired by </span>
                        <span>Ennio Dybeli</span>
                    </p>
                </footer>
            </article>
        </RootContentsBox>
    );
};

const RootContentsBox = styled.div`
    width: 30vw;
    height: 97%;
    background: white;
    border-radius: 15px;

    .defaultP{
        padding: 0 30px;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    section{
        border-top: 1px solid gray;
        .addTask{
            width: 100%;
            border: 0;
        }
    }

    .secSec{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        height: 433px;
        overflow-y: auto;

        .task{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            

            .taskTitle{
                width: 25%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    footer{
        border-top: 1px solid gray;
    }
`;

export default RootContents;