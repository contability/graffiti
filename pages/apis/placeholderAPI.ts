import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// FIXME: next api routing 구현 필요
// TODO: 호출 에러 예외 처리
export default async () => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
    );
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
