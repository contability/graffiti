import axios from '.';
import { TodoType } from '../../types/todo';

/** get todo list */
export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');

/** patch check todo */
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
