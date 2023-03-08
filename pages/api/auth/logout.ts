import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.method);

    // 로그아웃 하기
    if (req.method === 'DELETE') {
      // expires 값 변경하여 쿠키 삭제
      alert('kl');
      res.setHeader('Set-Cookie', 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly');
      res.statusCode = 204;
      return res.end();
    }
  } catch (e) {
    console.error(e);
    return res.send(e);
  }

  res.statusCode = 405;
  return res.end();
};
