import ListItem from '../ListItem';
import { ListProps } from '../../pages';

// 데이터를 넘겨줄때 구조분해로 넘겨 주는 것 보다 컴포넌트가 data를 넘겨받아서 거기서 분해 해서 사용하는 구조로 변경

// const List: React.FC<ListProps> = ({ dataList, message }) => {
const List = ({ props }: { props: ListProps }) => {
  const dataList = props.dataList;
  const message = props.message;

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div>
      {dataList.length > 0 ? (
        dataList.map((data, dataIndex) => (
          <div key={`List-${dataIndex}`}>
            <ListItem data={data} />
            <hr />
          </div>
        ))
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </div>
  );
};

export default List;
