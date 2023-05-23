import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import List from '../components/List';

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

const index = (props: ListProps) => {
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
