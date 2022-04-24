import React, { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import HookUseState from './components/HookUseState';
import RootComponent from './components/RootComponent';


function App() {

  const [sysDate, setSysDate] = useState(new Date);
  const dateStr: string = sysDate+"";

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<RootComponent/>}/>
            <Route path="/useState" element={<HookUseState/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
