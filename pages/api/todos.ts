import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../types/todo";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
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
            const todosBuffer = fs.readFileSync("data/todos.json");
            const todosString = todosBuffer.toString();
            if(!todosString){
                res.statusCode = 200;
                res.send([]);
            }
            const todos: TodoType[] = JSON.parse(todosString);
            res.statusCode = 200;
            return res.send(todos);
        } catch (error) {
            console.log(error);
            res.statusCode = 500;
            res.send(error);
        }
    }
};