import { useRouter } from 'next/router';
import { IPosts } from '../../pages';

const ListItem = (item: IPosts) => {
  const router = useRouter();
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      onClick={() => router.push(`/detail/${item.id}`)}
    >
      {item.title}
    </div>
  );
};

export default ListItem;
