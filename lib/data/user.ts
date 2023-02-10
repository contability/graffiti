import { readFileSync, writeFileSync } from 'fs';
import { StoredUserType } from '../../types/user';

/** 유저 리스트 불러오기 */
const getList = () => {
  const usersBuffer = readFileSync('data/dummy/user.json');
  const usersString = usersBuffer.toString();
  if (!usersString) return [];
  const users: StoredUserType[] = JSON.parse(usersString);
  return users;
};

/** email 체크 */
const exist = ({ email }: { email: string }) => {
  const users = getList();
  return users.some(user => user.email === email);
};

/** 유저 등록  */
const write = async (users: StoredUserType[]) => {
  writeFileSync('data/dummy/user.json', JSON.stringify(users));
};

const find = ({ email }: { email: string }) => {
  const users = getList();
  return users.find(user => user.email === email);
};

export default { getList, exist, write, find };
