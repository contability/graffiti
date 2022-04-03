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
                                                                            -> 오.. function도 되
                      
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

    */
    
    <div className="App">
      <div className="black-nav">
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        <div style={ postsStyle }>개발 Blog</div>
      </div>
      {/* <img src={ logo }/> */}
      <div>{ posts }</div>
      <div>{ 함수() }</div>
    </div>
  );
}

export default App;
