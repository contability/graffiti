import './App.css';
import styled from 'styled-components';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Main from './routers/Main';
import ReactHookForm from './routers/ReactHookForm';

function App() {
  return (
    <AppBox>
      <HashRouter>    {/* 이 안에서 react-rouoter-dom 사용 가능.*/}
        <GlobalStyle/>  {/* 전체 css 잡아주기*/}
        <Routes>    {/* 이 안에 router들 정의하기 */}
          <Route path='/' element={<Main/>}/>   {/* path마다 어떤 컴포넌트 띄워줄건지 정의 */}
          <Route path='/ReactHookForm' element={<ReactHookForm/>}/>
        </Routes>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.main``;

export default App;
