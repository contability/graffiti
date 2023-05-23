import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import List from '../components/List';

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  dataList: IPosts[];
  message?: string;
}
/**
 * datalist, message를 구조분해하는 것 보다 받은 데이터를 통째로 넘겨주고 데이터에 관한 처리는 데이터를 활용하는 컴포넌트에 책임을 위임하는게 좋을것같아요.
 * => List 컴포넌트에서 처리하는걸로 수정하겠습니다
 *
 * List 컴포넌트에 emptymessage가 있는데 dataList.length로 분기태워서 데이터 없는 경우 처리하면 의미가 없지 않을까 싶어요
 * => 확인했습니다!
 * 근데 지금 localhost로 열어놓은거 화면 안보이는뎅
 * => 아 지금 테스트중이었습니다. 지금 나와요
 */
const index: NextPage<PageProps> = ({ dataList, message }) => {
  return (
    <>{dataList.length > 0 ? <List dataList={dataList} /> : <p>{message}</p>}</>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { data } = await axios.get('http://localhost:3000/api/post');

  return {
    props: {
      dataList: data.data,
      message: data.message,
    },
  };
};

export default index;
