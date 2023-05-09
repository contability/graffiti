import Link from 'next/link';
import Button from '../../../common/Button';
import SearchIcon from '../../../../public/assets/images/icons/system/system_search.svg';

const SearchRoomButton: React.FC = () => {
  return (
    <Link href="/room">
      <Button icon={<SearchIcon />} color="amaranth" width="89px">
        검색
      </Button>
    </Link>
  );
};

export default SearchRoomButton;
