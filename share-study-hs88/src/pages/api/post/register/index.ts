import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { IPosts } from '../../..';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // const url = 'https://jsonplaceholder.typicode.com/postss';
    const body = request.body;

    const result = await axios.post<IPosts>(url, body);

    response.send(result);
  }
};
