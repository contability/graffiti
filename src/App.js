import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello_props';        //끝에 .js는 빼고 적어도 됨
//import Welcome from './component/Welcome';
import styles from './App.module.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useParams} from "react-router-dom";
import EmptyPage from './component/EmptyPage';

//이렇게 함수로 만들어진 컴포넌트를 함수형 컴포넌트라고 함.
//모든 컴포넌트는 대문자로 시작a.
//이 함수가 return하는 것은 JSX이다.(JavaScript XML)
function App() {
  // const name = "Tom";
  // const naver = {
  //   name: '네이버',
  //   url: 'https://naver.com'
  // };
  // return (
  //   <div className="App">
  //     <h3>props : properties</h3>
  //     <Hello age={10}/>
  //     <Hello age={20}/>
  //     <Hello age={30}/>
  //     <div className={styles.box}>App</div>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>   {/* 이 헤더는 모든 페이지에 나와야 하니까 이 밑에 부터 Switch로 감싼다 */}
        <Routes>    {/* 이렇게 하면 이 Switch 내부는 url에 따라 각각 다른 페이지를 보여줄거임 */}
          <Route path='/' element={<DayList/>}/>  {/* 첫 페이지는 DayList를 보여주면 되겠다 */}
          <Route path='/day/:day' element={<Day/>}/>  {/*
                    다이나믹한 url을 처리할 때는 ":"으로 처리.

                    Day 컴포넌트에서 day 1로 들어왔을 때
                    path="/day/:day" 이렇게 하고 /day/80 이라고 치면 
                    :day라고 써진 부분인 80을 Day Component에서 {day : "80"} 이렇게 받을 수 있다.
                    Spring의 @PathVariable 같은 느낌

                    반대로
                      <Route path='/day/:id' element={<Day/>}/>
                      {id : "80"}이라고 얻어지겠지
            */}
            {/* 
              위에 path 정의 되어 있는 애들 말고 정의안된 url로 들어오면 밑에 EmptyPage 띄움
              Route에 path니 뭐니 아무것도 안적으면 됨.

              다른 Route들 보다 맨 위에 있으면 어떤 요청을 하던 EmptyPage가 뜰거기 때문에 주의
              맨 아래 두는게 낫겠다.
            */}
            <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//이걸 이제 index.html에서 받아다가 root에 DOM 구현
export default App;
