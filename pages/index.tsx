import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import List from '../components/List';
import { fetchPlaceHolderList } from './apis/placeholderAPI';

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  dataList: IPosts[];
}

const index: NextPage<PageProps> = ({ dataList }) => {
  return <List dataList={dataList} />;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const data = fetchPlaceHolderList();
  console.log(data);

  // const { data } = await axios.get<IPosts[]>(
  //   'https://jsonplaceholder.typicode.com/posts',
  // );

  return { props: { dataList: data } };
};

export default index;
