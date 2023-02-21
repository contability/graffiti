import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const accessToken = req.headers.cookie;
      console.log(accessToken);

      res.statusCode = 400;

      return res.end();
    } catch (error) {
      res.statusCode = 500;
      return res.send(error);
    }
  }

  res.statusCode = 405;

  return res.end();
};
