import Link from 'next/link';
import Button from '../../../common/Button';
import SearchIcon from '../../../../public/assets/images/icons/system/system_search.svg';
import { useSelector } from '../../../../store';
import { makeQueryString } from '../../../../lib/utlis';

const SearchRoomButton: React.FC = () => {
  const searchRoom = useSelector(state => state.searchRoom);
  const roomListHref = makeQueryString('/room', searchRoom);

  return (
    <Link href={roomListHref}>
      <Button icon={<SearchIcon />} color="amaranth" width="89px">
        검색
      </Button>
    </Link>
  );
};

export default SearchRoomButton;
