import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

//////// 기존 props 버전
// const HookUseContextHeader : any = ( {isDark} : any ) => {
//     return (
//         <header className="header" 
//         style={
//             {backgroundColor : isDark ? 'black' : 'lightgray', 
//             color: isDark ? 'white' : 'black'
//             }}>
//             <h1>Welcome 아저씨!</h1>
//         </header>
//     );
// }
////////



//////// useContext 버전
const HookUseContextHeader : any = () => {
    //////// useContext 버전
    /*
        상위 컴포넌트인 HookUseContext에서 provider로 isDark, setIsDark를 value props로 선언했다
        하위 컴포넌트인 여기서는  useContext로 갖다쓰는거임 이제
    */
    const data : any = useContext(ThemeContext);            //useContext(사용할 컨텍스트);
    //console.log(data);      // 결과 : {isDark : false, setIsDark : object}
    const isDark : boolean = data.isDark;

    const user : string = useContext(UserContext);

    return (
        <header className="header"  
        style={{
            backgroundColor : isDark ? 'black' : 'lightgray', 
            color: isDark ? 'white' : 'black'
        }}>
            <h1>Welcom {user}!</h1>
        </header>
    );
}
export default  HookUseContextHeader;