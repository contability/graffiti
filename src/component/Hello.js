import World from "./World";
import styles from "../Hello.module.css";

// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;

//이렇게 해도 되고

export default () => {

    function showName(){
        console.log("mike");
    };

    function showAge(age){
        console.log(age);
    }

    function showText(txt){
        console.log(txt);
    }

   return (
       <div>
           <h1 
        //    style={{
        //        color : "#f00",
        //        borderRight : "12px solid #000",
        //        marginBottom : "50px",
        //        opacity: 1
        //    }}
           >Hello</h1>
           {/* <div className={styles.box}>Hello</div> */}

           <button onClick={showName}>Show name</button>
           <button onClick={
               ()=>{
                   showAge(10);
               }
           }>Show age</button>
           <input type="text" onChange={e=>{
               const txt = e.target.value;
               showText(txt);
           }}/>
       </div>
   );
};

//이렇게 해도 됨