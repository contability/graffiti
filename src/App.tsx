import './App.css';
import styled from 'styled-components';
import { useEffect } from 'react';
import EventListener from './utils/EventHandler';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Pheader from './components/header/Pheader';
import Theader from './components/header/Theader';
import Mheader from './components/header/Mheader';
import GlobalStyle from './GlobalStyle';
import Users from './components/user/Users';
import Musers from './components/user/Musers';

function App() {
  const deviceType = useSelector((state : any) => state.common.deviceType);

  return (
    <AppBox>
      <HashRouter>
        <GlobalStyle/>
        <EventListener/>
        {deviceType === "P" && (<Pheader/>)}
        {deviceType === "T" && (<Theader/>)}
        {deviceType === "M" && (<Mheader/>)}
        <Routes>
          {(deviceType === "T" || deviceType === "P") && (<Route path="/" element={<Users/>}/>)}
          {(deviceType === "M") && (<Route path="/" element={<Musers/>}/>)}
        </Routes>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
