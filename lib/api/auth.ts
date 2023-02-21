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

/** 쿠키의 access_token의 유저 정보 받아오는 api */
export const meAPI = () => axios.get<UserType>('/api/auth/me');
