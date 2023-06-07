import axios from 'axios';
import { NextPageContext } from 'next';
import List from '../components/List';
import type { NextPage } from 'next';
import ButtonBar from '../components/ButtonBar';
import { useRouter } from 'next/router';

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ListProps {
  dataList: IPosts[];
  message?: string;
}

const index: NextPage<ListProps> = (props) => {
  const router = useRouter();

  const buttons = [
    {
      label: '로그인',
      clickEvent: () => {
        router.push('/account/login');
      },
    },
  ];
  return (
    <>
      <List props={props} />
      <ButtonBar buttons={buttons} isFixed={true} />
    </>
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
