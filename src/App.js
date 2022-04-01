import logo from './logo.svg';
import './App.css';

// App.js는 메인페이지에 들어갈 HTML 짜는 곳
// 실제 메인페이지는 public/index.html 이다
// 이 안에 있는 내용을 index.html에 #root 태그에 넣는 것
// 이렇게 박아 넣는 역할은 src/index.js에서 하고 있다
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          얼른 배워서 뭐 만들어보자
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
