//////// 기존 props 버전
// const HookUseContextFooter : any = ( {isDark, setIsDark} : any ) => {
//     const toggleTheme = () => {
//         setIsDark(!isDark);
//     }

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

//     return (
//         <footer className="footer" style={{
//             backgroundColor : isDark ? 'black' : 'lightgray'
//         }}>
//             <button className="button" onClick={toggleTheme}>
//                 {isDark ? 'Light Mode' : 'Dark Mode'}
//             </button>
//         </footer>
//     );
// }
////////

const HookUseContextFooter : any = () => {
    const {isDark, setIsDark} : any = useContext(ThemeContext);     // 이렇게 바로 객체 안에 값들만 받아도 됨

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <footer className="footer" style={{
            backgroundColor : isDark ? 'black' : 'lightgray'
        }}>
            <button className="button" onClick={toggleTheme}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
        </footer>
    );
}

export default HookUseContextFooter;