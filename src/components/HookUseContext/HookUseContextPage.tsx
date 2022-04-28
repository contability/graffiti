import HookUseContextContent from "./HookUseContextContent";
import HookUseContextFooter from "./HookUseContextFooter";
import HookUseContextHeader from "./HookUseContextHeader";

const HookUseContextPage : any = ( {isDark , setIsDark} : any ) => {
    // 현재 isDark를 실제로 사용하진 않고 자녀 컴포넌트들에게 그대로 prop으로 넘겨줌
    // 근데 useContext를 사용하면 이 page는 isDark란 애를 전혀 몰라도 된다
    return (
        <div className="page">
            <HookUseContextHeader isDark={isDark} />
            <HookUseContextContent isDark={isDark}/>
            <HookUseContextFooter isDark={isDark} setIsDark={setIsDark}/>
        </div>
    );
};


export default  HookUseContextPage;