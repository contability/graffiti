import { useEffect } from "react";

// 이 컴포넌트는 간단하게 주기적으로 뭔가 실행되는 컴포넌트 생성한거임
const HookUseEffectTimer = (props : any) => {

    useEffect(() => {
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는중...');
        }, 1000);       // 1초마다 한 번씩 계속 콘솔로 저 내용 찍음

        return () => {      // useEffect 정리 하는 부분. return 값으로 위 타이머를 정리해주는 함수 넣어주면 됨
            clearInterval(timer);   // interval 정리. clearInterval(정리할 interval instance);
            console.log('타이머가 종료되었습니다.');
        }
    }, []);

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    );
}

export default HookUseEffectTimer;