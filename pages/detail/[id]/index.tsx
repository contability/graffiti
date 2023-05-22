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
      <header>
        <p>{postsData?.id}</p>
        <p>{postsData?.userId}</p>
      </header>
      <section>
        <div>{postsData?.title}</div>
      </section>
      <section>
        <div>{postsData?.body}</div>
      </section>
      <footer>
        <button onClick={() => router.back()}>BACK</button>
      </footer>
    </>
  );
};

export default Detail;
