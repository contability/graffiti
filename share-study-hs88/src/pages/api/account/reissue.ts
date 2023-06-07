import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // 서버에서 refreshToken이 맞는지 확인하고 리턴 해줬다는 로직 가정
    const response = {
      newAccessToken:
        'newAccessTokennewAccessTokennewAccessTokennewAccessToken',
      newExpiredTime: dayjs().add(15, 'minute'),
    };

    res.status(200).send(response);
  }
  res.status(405).end();
};
