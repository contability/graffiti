//////// 기존 props 버전
// const HookUseContextContent : any = ( {isDark} : any ) => {
//     return(
//         <div className="content"
//             style={{
//                 backgroundColor : isDark ? 'black' : 'white',
//                 color : isDark ? 'white' : 'black'
//             }}
//         >
//             <p>아저씨, 좋은 하루 되세요</p>
//         </div>
//     );
// }
////////

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

//////// useContext 버전
const HookUseContextContent : any = () => {
    const data : any = useContext(ThemeContext);
    const isDark : boolean = data.isDark;

    const user : string = useContext(UserContext);

    return(
        <div className="content"
            style={{
                backgroundColor : isDark ? 'black' : 'white',
                color : isDark ? 'white' : 'black'
            }}
        >
            <p>{user}, 좋은 하루 되세요</p>
        </div>
    );
}

export default HookUseContextContent;