import axios from '.';
import { TodoType } from '../../types/todo';

interface AddTodoBffBody {
  text: string;
  color: TodoType['color'];
}

/** get todo list */
export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');

/** patch check todo */
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);

/** post new todo */
export const addTodoApi = (body: AddTodoBffBody) => axios.post('/api/todos', body);
