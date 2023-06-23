// // ducks pattern

import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { TodoType } from '../types/todo';

// import { TodoType } from '../types/todo';

// /** 액션 타입 정의 */
// export const INIT_TODO_LIST = 'todo/INIT_TODO_LIST';

// /** 액션 생성자 정의*/
// export const setTodo = (payload: TodoType[]) => {
//   return {
//     type: INIT_TODO_LIST,
//     payload,
//   };
// };

// export const todoActions = { setTodo };

// interface TodoReduxState {
//   todos: TodoType[];
// }

// /** 초기화 */
// const initialState: TodoReduxState = {
//   todos: [],
// };

// /** 리듀서 */
// export default function reducer(state = initialState, action: any) {
//   switch (action.type) {
//     case 'SET_TODO_LIST':
//       const newState = { ...state, todos: action.payload };
//       return newState;
//     default:
//       return state;
//   }
// }

interface TodoReduxState {
  todos: TodoType[];
}

/** 초기 상태 */
const initialState: TodoReduxState = {
  todos: [],
};

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // todo 변경
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    },
  },
});

export const todoActions = { ...todo.actions };

export default todo;
