import { getCookie } from 'cookies-next';
import { axiosGeneralAPI } from '.';
import axios from 'axios';

export const reissue = async () => {
  const refreshToken = getCookie('refreshToken');

  const { data } = await axios.post('/api/account/reissue', { refreshToken });

  return data;
};
