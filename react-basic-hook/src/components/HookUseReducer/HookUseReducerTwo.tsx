import { useReducer, useRef, useState } from "react";
import Student from "./Student";
//////////////////////////////////////////////////////// 혼자서 해보다가 실패
//////////////////////////////////////////// reducer에 state 값이 처음엔 빈 배열로 잘 들어오는데
/////////////////////////////////////////// 두번째 추가할 땐 배열이 아니라 2라는 값으로 들어오더라
////////////////////////////////////////// 꼭 length 값 처럼.. 뭘까

// const ACTION_TYPE : any = {
//     add : 'add',
//     del : 'del'
// }

// const studentReducer : any = (state : Array<string>, action : any) => {
//     console.log(state, action);
//     switch(action.type){
//         case ACTION_TYPE.add:
//             return state.push(action.name);
//     }
// }



// export default function HookUseReducerTwo(){
//     const [student, dispatch] : any = useReducer(studentReducer, []);
//     const inputRef : any = useRef();
    
//     const addStudent : any = (txt : string) => {
//         dispatch({
//             type : ACTION_TYPE.add,
//             name : txt
//         });
//     }

//     return (
//         <div>
//             <h2>출석부</h2>
//             <p>총 학생 수 : {student.length}</p>
//             <p>
//                 <input type="text" ref={inputRef}/>
//                 <button onClick={()=>{
//                     addStudent(inputRef.current.value);
//                 }}>추가</button>
//             </p>
//         </div>
//     );
// }

const reducer = (state : any, action : any) => {
    switch(action.type){
        case 'add-student':
            console.log('wegl;kn');
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name : name,
                isHere : false,
            };
            return {
                count : state.count + 1,
                students : [...state.students, newStudent]          // 원래 있던 배열에 newStudent 더함
            }
        case 'delete-student':
            return {
                count : state.count - 1,
                students: state.students.filter((student : any) => student.id !== action.payload.id)
            }
        default : 
            return state;
    }
}

const initState : any = {
    count : 0,
    students : []
}

export default function HookUseReducerTwo(){
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] : any = useReducer(reducer, initState);

    return (
        <div>
            <h2>출석부</h2>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input 
            type="text" 
            placeholder="이름을 입력"
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            />
            <button onClick={()=>{
                dispatch({type: 'add-student', payload: {name}});
            }}>추가</button>
            {studentsInfo.students.map((student: any) => {
                return (<Student key={student.id} name={student.name} dispatch={dispatch} id={student.id}/>)        //prop으로 dispatch도 보냄
            })}
        </div>
    );
}