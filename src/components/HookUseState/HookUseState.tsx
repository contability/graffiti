import { useState } from "react";
/*
    - 원래 변수에 값 저장하고 {변수명}해서 데이터 바인딩 했는데
      이번에는 변수를 사용하는게 아니라 state라는 react 문법을 사용한다.

      데이터를 (1) 변수에 보관하느냐 (2) state에 보관하느냐 하는 2가지 방법이 존재하는 것.

      변수랑 똑같은데 방법이 조금 다름.

      맨 위에 import React, {useState} from 'react'; 라고 써줌.
      의미는 '리액트에 있는 내장 함수 하나를 쓰겠습니다' 라는 뜻.

      저거 써주면 이제 useState라는 함수를 사용할 수 있다.
      사용법 : useState(데이터)

      ex) useState("남자 코트 추천");
      이렇게 실행 해주면 array 2개가 남는다. [a, b]
      a : 앞에서 넣어준 데이터. 여기에서는 남자 코트 추천이라는 String이 들어갈 것.
      b : 앞에서 넣어준 데이터(state)를 정정해주는 함수
      
      let [a,b] = useState("남자 코트 추천");   ES6 destucturing 문법
      javascript ES6 신문법인데 
      let [a,b] = [10, 100]; 이렇게 하면 a에는 10, b에는 100이 들어간다.
      
      정리하면 state는
      (1) 변수 대신 쓰는 데이터 저장공간
      (2) useState()를 이용해 만들어야 함
      (3) 문자, 숫자, array, object 다 저장 가능
          ex) let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']);

	  - 그냥 변수 쓰면 되지 왜 굳이 state를 쓰느냐?
		state만의 장점이 있는데
		웹이 App처럼 동작하게 만드려면 state를 사용해야 한다.

		state는 변경 되면
		HTML이 자동으로 재렌더링이 된다.

		그냥 변수를 사용했는데 데이터가 변경 된다 -> 자동 재렌더링이 안되고 새로고침 돼서 페이지를 다시 띄운다.
		state를 사용했는데 데이터가 변경 된다 -> 새로고침 없이 자동으로 재렌더링이 된다. = HTML이 새로고침 없이도 스무스하게 변경된다.

		그냥 다 state로 만들어서 써도 되는데 웹앱이랑은 별로 상관 없는. 
		수시로 바뀌고 할 일 없는 그런 것들은 그냥 일반 변수나 하드 코팅해도 상관 없다.

		자주 바뀌는. 혹은 중요한 데이터는 변수 말고 state로 저장해서 쓰자

	- state 변경할 때 
		  특히 state가 Array, Object 자료형이면 수정된 데이터를 만든다.
		  리액트적인 관습.

		  당연히 얕은 복사는 안되고 깊은 복사로 해야한다.
							이건 javascript 개념 그대로 생각하면 될 듯.

		  단, ES6에서 깊은 복사는 이렇게 가능하다

		  ex) let newArr = [...글제목];
		  ex) let newObj = {...글제목};

		  spreadOperator라는 신문법임.
		  
		  글제목이라는 애의 []든 {}든 다 제거하고 다시 담는 격

		  리액트에서는 데이터가 이런 식으로 다뤄진다

		  state 데이터는 immutable 해야한다. 직접 수정 돼선 안된다고 권장됨.

		  결론. Array, Object state 데이터 수정 방법
		  (1) 일단 변경함수 써야함
		  (2) 변경함수(대체할 데이터)
				  (2-1) 대체할 데이터는  초기 값과 유사한 자료형을 사용.
					Array -> Array, Object -> Object
										  /// 숫자형에서 문자형은 되는거 같던데....
		  (3) 일단 기존 state 카피본 만들고 -> 카피본에 수정사항 반영하고 -> 변경함수()에 집어넣기


	- Hook은 React 16.8버전 부터 사용 가능

	- component가 가지고 있는 속성 값

	- state가 변하면 UI를 자동으로 업데이트 시켜줌
		개발자는 state만 잘 관리하면 화면을 다시 그려주는 작업은 신경쓰지 않아도 되는 편리함이 있음

	-컴포넌트 같은걸 여러번 붙이고 setState를 동작 시켜도 같은 컴포넌트 전체를 변화 시키는게 아니라 해당 컴포넌트만 동작시킴
*/

export default function HookUseState(){
    let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
    let [따봉, 따봉변경] = useState(0);

    function 제목바꾸기(){
        // 글제목이 배열이므로 배열로 변경되어야 함
        let newArr = [...글제목];

        if(newArr[0] === '남자 코트 추천'){
        newArr[0] = '여자 코트 추천';
        }else{
        newArr[0] = '남자 코트 추천';
        }

        글제목변경(newArr);
    }

    function 순서바꾸기(){
        let newArr2 = [...글제목];

        newArr2.sort((a, b) => {
            return a < b ? -1 : a > b ? 1 : 0;
        });

        글제목변경(newArr2);
    }

    const [sysDate, setSysDate] = useState(new Date);           
    const dateStr : string = sysDate+"";

    function refreshDate(){
        setTimeout(function(){
            setSysDate(new Date);
        }, 1000);
        //setSysDate(new Date);
    }

    refreshDate();


    return (
        <div>
            <div className="black-nav">
                <h1>useState Example 1</h1>
                <div>개발 Blog</div>
            </div>
            <button onClick={ 제목바꾸기 }>제목바꾸기</button>   {/* onClick안에 제목바꾸기() 하면 바로 실행돼서 무한 재랜더링됨  */}
            <button onClick={ 순서바꾸기 }>순서바꾸기</button>
            <div className="list">
                <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ 글제목[1] }</h3>
                <p>2월 18일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ 글제목[2] }</h3>
                <p>2월 19일 발행</p>
                <hr/>
            </div>

            <h1>useState Example 2</h1>
            <div>{dateStr}</div>
            {/* <button onClick={refreshDate}>Refresh</button> */}
        </div>
    );
}