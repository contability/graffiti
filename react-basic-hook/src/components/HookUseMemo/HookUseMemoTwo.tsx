import { useEffect, useMemo, useState } from "react";

/*
    useMemo 활용
*/

export default function HookUseMemoTwo(){
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    //////////////////////////// 의존성 배열이 원시 타입(string) 일 때
    // const location : string = isKorea  ? '한국' : '외국';

    // useEffect(()=>{
    //     console.log('useEffect 호출');
    // },[location]);
    // 기본적인 동작. 문제 없음


    //////////////////////////// 의존성 배열이 string처럼 원시 타입이 아니라 object라면?

    // const location = {
    //     country : isKorea ? '한국' : '외국'
    // }

    // 비행기타자 버튼을 누르면 똑같이 useEffect가 뜨는데
    // 하루에 몇 끼 먹어요에 number를 바꿔줘도 useEffect가 뜨게 된다
    // 렌더링 되면서 location 객체가 다시 생성 되면서 메모리 주소 값이 바뀌기 때문에 useEffect도 location이 변경이 됐다 인식하는 것

    // 이걸 막기 위해 isKorea 값이 변경되었을 때만 location 객체를 초기화 해주도록 한다. 그 방법으로 location을 memoization할 것

    //////////////////////////// 객체를 useMemo를 사용하여 메모리에 아예 실어버림
    const location = useMemo(() => {
        return {
            country : isKorea ? '한국' : '외국'
        };
    }, [isKorea]);
    // 이제 몇끼 먹었누 눌렀을 때 useEffect가 반응하지 않고 의도한 대로 동작한다
    // location은 useMemo 객체로 return 되는 걸 가지고 있게 되는데 결국 메모리 주소 값을 갖는게 아닐까 싶다
    // 다시 렌더링 되더라도 같은 메모리 주소 값을 가지고 있을거기 때문에 useEffect가 변경 됐다고 생각 안하는게 아닌가 싶다

    useEffect(()=>{
        console.log('useEffect 호출');
        // 뭔가 오래 걸리는 작업이 있다고 가정
    },[location]); 



    /*
        원시(Primitive) 타입 : 
            - String, Number, Boolean, Null, Undefined : BigInt : Symbol
            -   const locationOne = "korea";
                const locationTwo = "korea";

                locationOne === locationTwo > True


        객체(Object) 타입 : 
            - Object, Array, ... (원시 타입을 제외한 모든 것)
            -   const locationOne = {country : "korea"}
                const locationTwo = {country : "korea"}

                locationOne === locationTwo > false         메모리 상의 주소 값이 다르기 때문

        원시 타입은 변수에 바로 담아져서 사용 가능하게 되지만
        객체 타입은 그렇지 않다.

        객체 타입은 너무 크기 때문에 바로 변수에 들어가지 못하고 
        메모리 공간이 할당되고 그 메모리 안에 보관 된다

        그리고 변수 안에는 그 객체가 담긴 메모리 주소가 담기는 것
    */

    return (
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
            <hr />
            <h2>어느 나라에 있어요?</h2>
            <p>나라: {location.country}</p>
            <button onClick={()=>{setIsKorea(!isKorea)}}>비행기 타자</button>
        </div>
    );
}