import World from "./World";
import styles from "../Hello.module.css";
import { useState } from "react";

// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;

//이렇게 해도 되고

export default () => {

    // function showName(){
    //     console.log("mike");
    // };

    // function showAge(age){
    //     console.log(age);
    // }

    // function showText(txt){
    //     console.log(txt);
    // }

    // let name = "Mike";
    // function changeName(){
    //     name = name === "Mike" ? "Jane" : "Mike";
    //     //여기까지 name은 state가 아님. 단순히 변수일 뿐이고 컴포넌트에서 관리하는 상태 값이 아님
    //     //단순히 변수 값만 바뀌는거라 리액트는 인지하지 않는다
    //     //이럴 때 useState를 사용한다
    // }

    const [name, setName] = useState('Mike');
    function changeName(){
        setName(name === "Mike" ? "Jane" : "Mike");
    }

   return (
       <div>
           {/* <h1 
           style={{
               color : "#f00",
               borderRight : "12px solid #000",
               marginBottom : "50px",
               opacity: 1
           }}
           >Hello</h1>
           <div className={styles.box}>Hello</div>

           <button onClick={showName}>Show name</button>
           <button onClick={
               ()=>{
                   showAge(10);
               }
           }>Show age</button>
           <input type="text" onChange={e=>{
               const txt = e.target.value;
               showText(txt);
           }}/> */}

            <h1>state</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
       </div>
   );
};

//이렇게 해도 됨