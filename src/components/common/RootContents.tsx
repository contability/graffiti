import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { taskData, taskListInterface } from "../../data/D_TaskList";
import { lpad } from "../../utils/common";

const RootContents : Function = () => {

    const [dayStr, setDayStr] = useState<string>("");
    const [date, setDate] = useState<number>(0);
    const [time, setTime] = useState<string>("");
    const [month, setMonth] = useState<string>("");
    const [taskList, setTaskList] = useState<taskListInterface[] | null>();
    const [addTaskVal, setAddTaskVal] = useState<string>("");

    const getCurrentTime = () => {
        axios.get(`https://worldtimeapi.org/api/timezone/Asia/Seoul`)
        .then((res) => {
            if(res){
                console.log(res);

                let currentTime = new Date(res.data.datetime);
                setDate(currentTime.getDate());
                setMonth(currentTime.toLocaleString('en-us', {month: 'long'}));
                convertDayOfweek(res.data.day_of_week);

                let hour = currentTime.getHours();
                let minutes = currentTime.getMinutes();
                let amPm = currentTime.getHours() > 12 ? "PM" : "AM";
                
                setTime(`${hour}:${lpad(minutes+"", 2, "0")} ${amPm}`);
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

    const statusChange = (e : ChangeEvent, id: number, chkVal: boolean) => {
        let tasksVal : taskListInterface[] = [];
        let changedObj : taskListInterface | any = taskList?.filter(task => {
            return task.id === id;
        })

        changedObj[0].isChked = chkVal;

        taskList?.map((v, i) => {
            let tempValue = v;
            if(tempValue.id === id){
                tempValue.isChked = chkVal;
            }
            tasksVal.push(tempValue);
        });
        console.log(changedObj);

        setTaskList(tasksVal);
    };

    const clearList = () => {
        setTaskList([]);
    };

    const enterEvent = (e : any) => {
        if(e.key === "Enter") addTask();
    };

    const addTask = () => {
        getCurrentTime();
        
        if(taskList){
            setTaskList([...taskList, {
                id: taskList.length + 1,
                isChked: false,
                title: addTaskVal,
                registDate: time
            }]);
        }
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
                        <p><span className="fw500">{dayStr},</span> {date}</p>
                        <p className="fw500" style={{color:"#7e7f99"}}>{taskList ? taskList.length : 0 } Tasks</p>
                    </div>
                    <div>
                        <p style={{color:"#abaace"}}>{month}</p>
                        <p>
                            <button onClick={clearList}>CLEAR LIST</button>
                        </p>
                    </div>
                </header>
                <section className="taskSec">
                    <button className="addTaskBtn" onClick={addTask}>+</button>
                    <input className="addTask" type="text" placeholder="Type your task" onChange={(e : any) => setAddTaskVal(e.target.value)} onKeyPress={(e) =>  enterEvent(e)}/>
                </section>
                <section className="secSec">
                    {taskList? taskList.map((v, i) => (
                        <div className="task" key={i}>
                            <div className="taskTitle fw500">
                                <input 
                                    id={v.id+""} 
                                    className={v.isChked ? "chked" : ""} 
                                    type="checkbox" 
                                    checked={v.isChked} 
                                    onChange={(e) => statusChange(e, v.id, !v.isChked)}
                                    />
                                <label htmlFor={v.id + ""} className={v.isChked ? "chkedLabel" : "notChkedLabel"}></label>
                                <p className={v.isChked ? "cancelText" : ""}>{v.title}</p>
                            </div>
                            <div className="taskDate">
                                <p>{v.registDate}</p>
                            </div>
                        </div>
                    ))
                    :
                        <div>empty task</div>
                    }
                    
                </section>
                <footer>
                    <p className="fw500">
                        <span>Inspired by </span>
                        <span style={{color:"#ff7070"}}>Ennio Dybeli</span>
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
        padding: 30px;
    }

    .fw500{
        font-weight: 500;
    }

    .cancelText{
        text-decoration: line-through;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background: #faf9ff;

        >div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 2.1rem;
        }

        > div:first-child{
            > p:first-child{
                color: #5d61ea;
                font-size: 1.8em;
            }
        }

        button{
            background: #fb6f70;
            border: none;
            color: white;
            padding: 8px;
            border-radius: 5px;
            font-size: 11px;
            cursor: pointer;
        }
    }

    section{
        border-top: 1px solid #D3D3D3;
        
    }

    .taskSec{
        display: flex;
        align-items: center;
        padding: 10px 30px;
        .addTaskBtn{
            background: inherit;
            border: none;
            color: #D3D3D3;
            font-size: 32px;
            padding: 0;
            padding-right: 0.4em;
        }

        .addTask{
            width: 90%;
            border: 0;

            &::placeholder{
                font-size: 18px;
                color: #D3D3D3;
            }
        }
    }

    .secSec{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        height: 324px;
        overflow-y: auto;
        padding: 10px 30px;

        .task{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            .taskTitle{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #7e7f99;
                justify-content: flex-start;
                gap: 15px;

                input[type="checkbox"]{
                    display: none;
                }

                input[type="checkbox"] + label[class="chkedLabel"]{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    position: relative;
                }

                input[type="checkbox"] + label[class="notChkedLabel"]{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border:1px solid #707070;
                    border-radius: 5px;
                    position: relative;
                }

                input[class="chked"]:checked + label::after{
                    content:'✔';
                    color: white;
                    font-size: 15px;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    position: absolute;
                    background: #fb6f70;
                    border-radius: 5px;
                    left: 0;
                    top:0;
                }

            }

            .taskDate{
                color: #abaace;
            }
        }
    }

    footer{
        color: #abaace;
    }
`;

export default RootContents;