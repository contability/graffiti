import { useRouter } from 'next/router';
import { IPosts } from '../../pages';
import { useState } from 'react';

const ListItem = (item: IPosts) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const router = useRouter();

  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    color: isHover ? '#ff0000' : '#000000',
    fontWeight: isHover ? 'bold' : '',
    cursor: 'pointer',
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => router.push(`/detail/${item.id}`)}
    >
      {item.title}
    </div>
  );
};

export default ListItem;
