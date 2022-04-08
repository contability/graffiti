import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello_props';        //끝에 .js는 빼고 적어도 됨
//import Welcome from './component/Welcome';
import styles from './App.module.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

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
    <div className="App">
      <Header/>
      <DayList/>
      <Day/>
    </div>
  );
}

//이걸 이제 index.html에서 받아다가 root에 DOM 구현
export default App;
