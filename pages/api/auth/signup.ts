import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';
import bcrypt from 'bcryptjs';
import { StoredUserType } from '../../../types/user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, firstName, lastName, password, birthday } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);

    if (!email || !firstName || !lastName || !password || !birthday) {
      res.statusCode = 400;
      return res.send('필수 데이터 누락');
    }

    const userExist = Data.user.exist(email);
    if (userExist) {
      res.statusCode = 409;
      res.send('이메일 중복');
      return;
    }

    const users = Data.user.getList();
    let userId;
    if (users.length === 0) userId = 1;
    else userId = users[users.length - 1].id + 1;

    const newUser: StoredUserType = {
      id: userId,
      email,
      firstName,
      lastName,
      password: hashedPassword,
      birthday,
      profileImage: '../../../public/assets/images/profile/profile_user01.jpg',
    };

    Data.user.write([...users, newUser]);
    return res.end();
  }
  res.statusCode = 405;

  return res.end();
};
