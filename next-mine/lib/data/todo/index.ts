import { readFileSync, writeFileSync } from 'fs';
import { TodoType } from '../../../types/todo';

const getList = () => {
  const todosBuffer = readFileSync('data/todos.json');
  const todosString = todosBuffer.toString();
  if (!todosString) return [];

  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

const exist = ({ id }: { id: number }) => {
  const todos = getList();
  // some : id가 있다면 true를 리턴하고, id가 없다면 false를 리턴
  const todo = todos.some(todo => todo.id === id);
  return todo;
};

const write = async (todos: TodoType[]) => {
  writeFileSync('data/todos.json', JSON.stringify(todos));
};

export default { getList, exist, write };
