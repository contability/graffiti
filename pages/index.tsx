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
