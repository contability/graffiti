import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { TodoType } from '../../../types/todo';
import Data from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // readFile
      // const todos = await new Promise<TodoType[]>((resolve, reject) => {
      //     fs.readFile("data/todos.json", (err, data) => {
      //         if(err) return reject(err.message);
      //         const todosData = data.toString();
      //         // data가 비었을 때
      //         if(!todosData) return resolve([]);
      //         const todos = JSON.parse(data.toString());
      //         return resolve(todos);
      //     });
      // });
      // res.statusCode = 200;
      // return res.send(todos);

      //readFileSync
      // const todosBuffer = fs.readFileSync("data/todos.json");
      // const todosString = todosBuffer.toString();
      // if(!todosString){
      //     res.statusCode = 200;
      //     res.send([]);
      // }
      // const todos: TodoType[] = JSON.parse(todosString);
      // res.statusCode = 200;
      // return res.send(todos);

      const todos = Data.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  } else if (req.method === 'POST') {
    const { text, color } = req.body;
    if (!text || !color) {
      res.statusCode = 400;
      return res.send('text 혹은 color가 없습니다.');
    }

    const todos = Data.todo.getList();
    let todoId: number;

    if (todos.length > 0) {
      todoId = todos[todos.length - 1].id + 1;
    } else {
      todoId = 1;
    }

    const newTodo = {
      id: todoId,
      text,
      color,
      checked: false,
    };

    Data.todo.write([...todos, newTodo]);
    res.statusCode = 200;
    res.end();
  }
};
