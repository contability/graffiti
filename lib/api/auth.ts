import axios from '.';
import { UserType } from '../../types/user';

interface SignUpAPIBody {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthday: string;
}

/** 회원가입 */
export const signupAPI = (body: SignUpAPIBody) => {
  return axios.post<UserType>('/api/auth/signup', body);
};

/** 로그인 */
export const loginAPI = (body: { email: string; password: string }) => axios.post<UserType>('/api/auth/login', body);
