import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import HookUseEffect from './components/HookUseEffect/HookUseEffect';
import HookUseEffectTwo from './components/HookUseEffect/HookUseEffectTwo';
import HookUseRef from './components/HookUseRef/HookUseRef';
import HookUseRefDom from './components/HookUseRef/HookUseRefDom';
import HookUseRefThree from './components/HookUseRef/HookUseRefThree';
import HookUseRefTwo from './components/HookUseRef/HookUseRefTwo';
import HookUseState from './components/HookUseState/HookUseState';
import RootComponent from './components/RootComponent';

/*
   
  App.js(or ts)는 메인페이지에 들어갈 HTML 짜는 곳
  실제 메인페이지는 public/index.html 이다
  이 안에 있는 내용을 index.html에 #root 태그에 넣는 것
  이렇게 박아 넣는 역할은 src/index.js에서 하고 있다

*/

// function App(){} 요거는 그냥 js 문법인데
function App() {

  const [sysDate, setSysDate] = useState(new Date);
  const dateStr: string = sysDate+"";

  // return () 안에다가 HTML 쌩으로 작성해도 되는게 특이
  return (
    <BrowserRouter>           {/*아예 App 밖에 감싸줘야함*/}
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<RootComponent/>}/>
            <Route path='/useState' element={<HookUseState/>}/>
            <Route path='/useEffect' element={<HookUseEffect/>}/>
            <Route path='/useEffectTwo' element={<HookUseEffectTwo/>}/>
            <Route path='/useRef' element={<HookUseRef/>}/>
            <Route path='/useRefTwo' element={<HookUseRefTwo/>}/>
            <Route path='/useRefThree' element={<HookUseRefThree/>}/>
            <Route  path='/useRefDom' element={<HookUseRefDom/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
