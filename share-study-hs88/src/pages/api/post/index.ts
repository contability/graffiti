import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // const url = 'https://jsonplaceholder.typicode.com/postss';

    const result = await axios
      .get(url)
      .then((res) => {
        return {
          data: res.data,
          status: res.status,
          message: '', // 선택
        };
      })
      .catch((e: AxiosError) => {
        return {
          message: e.message,
          status: e.code,
          data: [], // 에러가 발생하더라도 데이터는 기본적으로 빈값을 넘겨줘야 FE에서 처리하기 수월  (선택사항)
        };
      });

    /**
     * 데이터 컨트롤 기준
     * 1. 데이터 호출에 에러가 있을경우 -> catch에서 관리
     * 2. 데이터 호출에 성공한 경우 -> 그냥 바로 반환 / 데이터 전처리 필요가 없다면 그냥 반환하고 전처리 필요하면 data 가공후 반환
     */

    res.send(result);
  }
};
