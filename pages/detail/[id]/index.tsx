import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IPosts } from '../..';
import { NextPageContext } from 'next';

interface PostDetailParameter {
  id: string;
}

/**
 * post 상세 정보 페이지
 *
 * @return {*}
 */
const Detail = ({ id }: PostDetailParameter) => {
  const [postsData, setPostsData] = useState<IPosts | undefined>();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // const id = router.query['id'];
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
          <table
            className={`border border-solid border-black h-96 ${
              postsData?.id === 1 && 'bg-red-400'
            }`}
          >
            <colgroup>
              <col width="20%" />
              <col width="*" />
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
              className="rounded bg-slate-600 p-2 m-2 text-white"
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

// export const getServerSideProps = ({ params }: { params: { id: string } }) => {
export const getServerSideProps = ({
  params,
}: {
  params: PostDetailParameter;
}) => {
  const { id } = params;
  return { props: { id: id } };
};

export default Detail;
