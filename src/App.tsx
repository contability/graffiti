import './App.css';
import styled from 'styled-components';
import Main from './routers/Main';
import { useEffect } from 'react';
import EventListener from './utils/EventHandler';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Pheader from './components/header/Pheader';
import Theader from './components/header/Theader';
import Mheader from './components/header/Mheader';
import GlobalStyle from './GlobalStyle';

function App() {
  const deviceType = useSelector((state : any) => state.common.deviceType);

  useEffect(() => {
    console.log(deviceType);
  });

  return (
    <AppBox>
      <HashRouter>
        <GlobalStyle/>
        <EventListener/>
        {deviceType === "P" && (<Pheader/>)}
        {deviceType === "T" && (<Theader/>)}
        {deviceType === "M" && (<Mheader/>)}
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.main``;

export default App;
