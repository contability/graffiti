import ListItem from '../ListItem';
import { IPosts } from '../../pages';

interface ListProps {
  dataList: IPosts[];
  emptyMessage?: string;
}

// ListItem 컴포넌트에 데이터를 넘겨줄때 구조분해로 넘겨주는건 컴포넌트 사용 직관성?에 별로 안좋은거 같아요. 컴포넌트가 data를 넘겨받아서 쓰는구조로 바꾸시는게 어떨까요?

const List: React.FC<ListProps> = ({
  dataList,
  emptyMessage = '데이터가 없습니다.',
}) => {
  return (
    <div>
      {dataList.length > 0 ? (
        dataList.map((data, dataIndex) => (
          <div key={`List-${dataIndex}`}>
            {/* <ListItem {...data} /> */}
            <ListItem data={data} />
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
