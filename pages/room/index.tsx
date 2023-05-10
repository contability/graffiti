import { NextPage } from 'next';
import RoomMain from '../../components/room/main/RoomMain';

const index: NextPage = () => {
  return <RoomMain />;
};

index.getInitialProps = async ({ query }) => {
  console.log('query is : ', query);

  return {};
};

export default index;
