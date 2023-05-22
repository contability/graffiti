import axios from 'axios';
import { IPosts } from '..';

// FIXME: next api routing 구현 필요
// TODO: 호출 에러 예외 처리
export default async (url: string) => {
  try {
    const { data } = await axios.get<IPosts[]>(url);
    // console.log(data);

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
