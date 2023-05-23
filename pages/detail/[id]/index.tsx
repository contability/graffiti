import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IPosts } from '../..';

const Detail = () => {
  const [postsData, setPostsData] = useState<IPosts | undefined>();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const id = router.query['id'];
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/post/${id}`);

    if (data.data) setPostsData(data.data);
    else if (data.status) setErrorMessage(data.message);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {postsData ? (
        <>
          <table style={{ border: '1px solid #000000', borderSpacing: '40px' }}>
            <colgroup>
              <col width="20%" />
              <col width="80%" />
              <col />
            </colgroup>
            <tr>
              <th>id</th>
              <td>{postsData?.id}</td>
            </tr>
            <tr>
              <th>user id</th>
              <td>{postsData?.userId}</td>
            </tr>
            <tr>
              <th>title</th>
              <td>{postsData?.title}</td>
            </tr>
            <tr>
              <th>body</th>
              <td>{postsData?.body}</td>
            </tr>
          </table>
          <footer>
            <button
              style={{ margin: '5px 0 0 0 ' }}
              onClick={() => router.back()}
            >
              BACK
            </button>
          </footer>
        </>
      ) : (
        <p>{errorMessage}</p>
      )}
    </>
  );
};

export default Detail;
