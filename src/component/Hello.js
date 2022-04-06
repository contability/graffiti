import World from "./World";
import styles from "../Hello.module.css";

// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;

//이렇게 해도 되고

export default () => {
   return (
       <div>
           <h1 style={{
               color : "#f00",
               borderRight : "12px solid #000",
               marginBottom : "50px",
               opacity: 1
           }}>Hello</h1>
           <div className={styles.box}>Hello</div>
       </div>
   );
};

//이렇게 해도 됨