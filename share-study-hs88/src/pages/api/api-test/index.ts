import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // console.log(req.headers);
    res.status(200).send(req.headers);
  }
};
