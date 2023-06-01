import axios from 'axios';
import { NextPageContext } from 'next';
import List from '../components/List';
import type { NextPage } from 'next';

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
  return <List props={props} />;
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
