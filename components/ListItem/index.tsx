import { useRouter } from 'next/router';
import { IPosts } from '../../pages';

const ListItem = ({ data }: { data: IPosts }) => {
  const router = useRouter();

  return (
    <div
      className="flex justify-center cursor-pointer hover:text-red-600 hover:font-bold p-5"
      onClick={() => router.push(`/detail/${data.id}`)}
    >
      {data.title}
    </div>
  );
};

export default ListItem;
