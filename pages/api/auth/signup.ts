import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, firstName, lastName, password, birthday } = req.body;
    if (!email || !firstName || !lastName || !password || !birthday) {
      res.statusCode = 400;
      return res.send('필수 데이터 누락');
    }
    const userExist = Data.user.exist(email);
    if (userExist) {
      res.statusCode = 409;
      res.send('이메일 중복');
    }
    return res.end();
  }
  res.statusCode = 405;

  return res.end();
};
