import World from "./World";
import styles from "../Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";


// export default (props) => {
    // 현재 이 코드는 age만 넘어오고 있으니까
    // 밑에처럼 받아서 써도 됨 
    export default ({age}) => {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? '성인입니다' : '미성년자 입니다';
    
   return (
       <div>
           <h2 id="name">
                {name}({age}) : {msg}
           </h2>
           <UserName name={name}/>
           <button onClick={()=>{
               setName(name === 'Mike' ? 'Jane' : 'Mike')
           }}>Change</button>
       </div>
   );
};

//이렇게 해도 됨