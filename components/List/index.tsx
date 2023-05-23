import ListItem from '../ListItem';
import { IPosts } from '../../pages';

interface ListProps {
  dataList: IPosts[];
  emptyMessage?: string;
}

const List: React.FC<ListProps> = ({
  dataList,
  emptyMessage = '데이터가 없습니다.',
}) => {
  return (
    <div>
      {dataList.length > 0 ? (
        dataList.map((data, dataIndex) => (
          <div key={`List-${dataIndex}`}>
            <ListItem {...data} />
            <hr />
          </div>
        ))
      ) : (
        <div>{emptyMessage}</div>
      )}
    </div>
  );
};

export default List;
