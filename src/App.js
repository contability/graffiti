import logo from './logo.svg';
import './App.css';

//이렇게 함수로 만들어진 컴포넌트를 함수형 컴포넌트라고 함.
//모든 컴포넌트는 대문자로 시작.
//이 함수가 return하는 것은 JSX이다.(JavaScript XML)
function App() {
  const name = "Tom";
  const naver = {
    name : '네이버',
    url : 'https://naver.com'
  };
  return (
    <div className="App">
      <h1 style={
        {
          color: '#f0f',
          backgroundColor: "green"
        }}>Hello, {name}.
        <p>{2+3}</p>
        </h1>
        <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

//이걸 이제 index.html에서 받아다가 root에 DOM 구현
export default App;
