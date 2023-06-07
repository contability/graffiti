import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id, pw } = req.body;

    // 서버에서 id/pw 검증 후 token 반환하는 로직 가정
    if (id && pw) {
      const response = {
        tokenData: {
          accessToken:
            'accessTokenaccessTokenaccessTokenaccessTokenaccessToken',
          refreshToken:
            'refreshTokenrefreshTokenrefreshTokenrefreshTokenrefreshToken',
          expiredTime: dayjs().add(50, 'second'),
        },
        userInfo: {
          userId: '1',
          userName: 'HS88',
          userType: 'USER',
        },
      };

      res.status(200).send(response);
    }
  }
};
