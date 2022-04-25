/* 
    useEffect

    어떠한 컴포넌트가 Mount(화면에 첫 렌더링), Update(다시 렌더링), UnMount(화면에서 사라질 때)
    특정 작업을 처리하고 싶다면 useEffect를 사용하자

    기본 모양:
    1. useEffect(()=>{}); === useEffect(callback);
        컴포넌트가 렌더링 될 때 마다 실행 -> 뭐 변할 때 마다 실행되는거임

    2. useEffect(()=>{},[]); === useEffect(callback, Dependency Array);
        매번 렌더링 되는게 아니라
        화면에 첫 렌더링 될 때, Dependecy Array 안에 value 값이 바뀔 때 실행

        Dependency Array가 빈 배열이라면 화면에 첫 렌더링 될 때만 실행되는거고

    3. clean-up

    --------------------------------------------------- >
    state에 변화를 준다거나 할 때 뭔가 다음 로직을 실행해야 하는 경우가 많을 것 같은데
    그 때 사용하지 않을까 싶다

    

*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




export default function HookUseEffect(){

    const [count, setCount] = useState(1);      // count라는 state를 만들었고 초기 값으로 1을 설정하고 span 태그에 그대로 출력 중
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const handleInputChange = (e : any) => {          // 밑에 input Tag에 변화가 생길 때 마다 이거 실행될거고 인자로는 이벤트를 받아옴
        setName(e.target.value);
    } 

    // 랜더링 될 때 마다 매번 실행됨
    useEffect(() => {       
        console.log('랜더링');
    });

    // Mount 될 때만 실행 -> 맨 처음 랜더링 될 때만 실행
    useEffect(() => {
        console.log('Mounting');
    }, []);

    // Mount + count 변경될 때만 실행
    useEffect(() => {       //count가 변할 때 이 callback이 실행 됨.
        console.log('count 변화');
    }, [count]);

    // Mount + name 변경될 때만 실행
    useEffect(() => {       //count가 변할 때 이 callback이 실행 됨.
        console.log('name 변화');
    }, [name]);

    return (
        <div>
            <div>
                <button onClick={handleCountUpdate}>Update</button>
                <span>count : {count}</span>
            </div>
            <div>
                <input type="text" value={name} onChange={handleInputChange}/>
                <span>name : {name}</span>
            </div>
            <div>
                <Link to={'/useEffectTwo'}>
                    <button>useEffectTwo</button>
                </Link>
            </div>
        </div>
    );
}