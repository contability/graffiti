import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // const url = 'https://jsonplaceholder.typicode.com/postss';
    const id = req.query['id'];

    const result = await axios
      .get(`${url}/${id}`)
      .then((res) => {
        return {
          data: res.data,
          status: res.status,
          message: '',
        };
      })
      .catch((e: AxiosError) => {
        return {
          message: e.message,
          status: e.code,
          data: undefined,
        };
      });

    res.send(result);
  }
};
