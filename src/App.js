/* eslint-disable */

import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

/* 

App.js는 메인페이지에 들어갈 HTML 짜는 곳
실제 메인페이지는 public/index.html 이다
이 안에 있는 내용을 index.html에 #root 태그에 넣는 것
이렇게 박아 넣는 역할은 src/index.js에서 하고 있다

*/

// function App(){} 요거는 그냥 js 문법인데
function App() {
  // return () 안에다가 HTML 쌩으로 작성해도 되는게 특이

  let posts = '강남 고기 맛집';
  function 함수(){
    return 100;
  }
  let postsStyle = {color : 'blue', fontSize : '30px'};

  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);

  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    // 글제목이 배열이므로 배열로 변경되어야 함
    let newArr = [...글제목];

    if(newArr[0] == '남자 코트 추천'){
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

  return (
    /* 
    1. 현재 작성하는 문법은 HTML처럼 생겼지만 JSX라는 문법이다
      React에서는 HTML이 아니라 JSX라는걸 쓴다
      그래서 class가 아니라 className임
      현재 js 이기 때문에 class라고 쓰면 js 예약어인 class로 인식되기 때문에 안댐

      스타일 주고 싶으면 쩌 위에 import ./App.css가 되어있기 때문에 저기다 selector 이름 넣고 스타일 주면 될 것 같다

    2. 리액트가 쌩 HTML 코딩보다 편리한 이유(리액트에서 데이터 바인딩 쉽게 하는 법)
      데이터 바인딩이 되게 쉽다.

      데이터 바인딩 : 
      ex) 예를 들어 백단에서 뭔가 값을 받아오든 js 내에서 값을 생성해내든 그런 상황에서

      <h4 id="abc"></h4>
      이러한 태그가 있고 여기에 값을 넣어주려면

      let posts = '스터디 카페 추천';
      document.getElementById("abc").innerHTML = posts;

      뭐 이런식으로 했었는데 
      
      React는 jsx문법을 통해서 더 쉽게 할 수 있음
      {}를 열고 안에 변수명을 넣어주면 됨 -> {변수명, 함수 등}
      이게 데이터 바인딩이 쉽다고 표현하는 거임
                                                   //////////////////////// 음.. 뭔가 jsp의 EL(${model id})과도 흡사해보이는데 좀 더 공부해서 차이점을 구분해보자
                                                                            -> 오.. function도 되네
                      
        2-1. 이미지를 넣으려면 지금까지
        <img src="lewknflwefnk.png"/>
        이런 식으로 했었는데
        
        React에서는 이런식으로 넣는다.

        쩌 위에 import logo from './logo.svg'; 이렇게 import 되어 있는데
        import [선언할 변수명] from [이미지 경로]; 이런 의미로 보인다.

        사용할 때는 <img src={logo}> 이렇게 사용.

      상상하는 모든 곳에 {}로 변수 집어넣기 가능.
                                                  //////////////////////// 데이터의 가공이라던가 디버깅 문제로 EL 사용을 자제하고 javascript에서 값 받아 뿌리는걸 즐겼는데
                                                                           React 사용하면서는 좀 더 생각이 전환되어야만 하겠다

    
    3. JSX에서 Style 속성 집어넣을 때
      JSP에서와 달리 <div style="font-size : 16px;"></div> 이런거 못쓴다.
      javascript에서의 민감한 기호들이 많아서 그렇다. 에러남 이거.
      쓰려면

      <div style={ { color : "blue"} }></div> 이런식으로 Object로 넣어야 함.
      objectId는 예약어가 들어가게 될 거고 camelCase로 작성.
      value에는 String으로 작성.

      요거 근데 구찮아서 걍 css 파일에다가 쓰는 듯하고
      다른 방법으로는 style object 값을 변수에 선언하고 2번처럼 {}로 넣는 방법도 가능.

    
    4. 
      2번에 변수에 값 저장하고 {변수명}해서 데이터 바인딩 했는데
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

    5. npm start 하고 나면 터미널에 compiled with warnings. 해가지고 워닝 사항들 띄우는데
      eslint가 잡아주는 문법 체크사항이다.

      잘못된 코딩 관습을 바로 잡아주는 라이브러리인데 기본적으로 설치됨.

      warning을 제거하고 싶으면 맨 위에 주석으로 eslint-disalbe 해주면 사라짐

    6. 클릭 이벤트
      기존 자바스크립트 문법은 <span onclick=""></span> 이렇게 했는데
      React에서는 <span onClick={}></span> 이렇게 씀
        (1) 일단 C가 대문자임
        (2) 중괄호 써야함
        (3) onClick={클릭될 때 실행할 함수}
        (4)onClick={ () => {실행할 내용} } 이렇게도 가능(ES6 Arraow function)
            - Arrow Function
              기존에는 
              addEventListener('click', function(){

              }); 이렇게 썼는데
              
              이제 이렇게 씀. 똑같은 의미
              addEventListener('click', () => {

              });

    7. state 변경은 그냥은 안되고 변경 방법이 따로 있음.
    useState하면 변수가 배열 2개로 나오는데 1번째 변수로 바꿈. 이 변수는 함수임.

    단, 그냥 쓰면 재랜더링 무한루프 뭐시기 에러 난다.
    에러 내용과 해결 방법은 저장해둔거 참고.

    useState 1번째 변수로 변경해야만 재랜더링이 일어난다.

    ex) 따봉변경('ㄱㄴㄷ');
    ex) 따봉변경(따봉 + 1);
    

    8. state 변경할 때 
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

      state 데이터는 immutable 해야한다. 직접 수정돼선 안된다고 권장됨.

      결론. Array, Object state 데이터 수정 방법
      (1) 일단 변경함수 써야함
      (2) 변경함수(대체할 데이터)
              (2-1) 대체할 데이터는  초기 값과 유사한 자료형을 사용.
                Array -> Array, Object -> Object
                                      /// 숫자형에서 문자형은 되는거 같던데....
      (3) 일단 기존 state 카피본 만들고 -> 카피본에 수정사항 반영하고 -> 변경함수()에 집어넣기

    */
    
    <div className="App">
      <div className="black-nav">
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        {/* <div style={ postsStyle }>개발 Blog</div> */}
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 } >제목바꾸기</button>   {/* 제목바꾸기() 하면 바로 실행돼서 무한 재랜더링됨  */}
      <button onClick={ 순서바꾸기 }>순서바꾸기</button>
      {/* <img src={ logo }/> */}
      {/* <div>{ posts }</div> */}
      {/* <div>{ 함수() }</div> */}
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
    </div>
  );
}

export default App;
