import executeAxios from '../common/executeAxios';

/** 포스트 리스트 */
export const fetchPlaceHolderList = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  return await executeAxios(url);
};
