import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IPosts } from '../..';

const Detail: NextPage = () => {
  const [postsData, setPostsData] = useState<IPosts | undefined>();
  const router = useRouter();

  const id = router.query['id'];

  const getData = async () => {
    const { data } = await axios.get<IPosts>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    setPostsData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
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
          style={{ float: 'right', margin: '5px 0 0 0 ' }}
          onClick={() => router.back()}
        >
          BACK
        </button>
      </footer>
    </>
  );
};

export default Detail;
