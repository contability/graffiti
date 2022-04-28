import { createContext } from "react";

///////////////////////////////////////////////////// context를 만들어줄 ThemeContext
// 리액트 context를 만들려면

// 1. createContext 임포트 받기

export const ThemeContext = createContext(null);        // 이렇게 하면 context 하나 만들어진거임