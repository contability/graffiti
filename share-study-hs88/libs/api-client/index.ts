import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import { reissue } from './reissue';

const createAxios = (requestConfig: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: requestConfig.baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // 쿠키, Authorization 인증 헤더, TLS client certificates(증명서) 요청 데이터에 담을지 여부
    withCredentials: true,
  });

  //   인터셉터 추가. 요청 날리기 전에 매번 실행됨.
  axiosInstance.interceptors.request.use(
    async (config) => {
      config.headers = config.headers || {};
      // expiredTime 유효성 검사
      const expiredTime = dayjs(getCookie('expiredTime') as string);
      if (expiredTime && dayjs().diff(expiredTime, 'second') > -30) {
        try {
          // reissue 실행
          const newTokenData = await reissue();

          config.headers.Authorization = `Bearer ${newTokenData.newAccessToken}`;

          setCookie('accessToken', newTokenData.newAccessToken);
          setCookie('expiredTime', newTokenData.newExpiredTime);
        } catch (error) {
          console.error('reissue 요청 실패:', error);
        }
      } else {
        // cookie에 accessToken이 있다면 axios 요청 헤더에 authorization의 value로 추가
        const accessToken = getCookie('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

const axiosClient = createAxios({
  // example
  baseURL: 'http://example.com',
});

// export const axiosSetHeader = (
//   accessToken: string,
//   userAgent: string,
//   cookie: string,
// ) => {
//   // axios 기본 구성(config defaults) 값 지정
//   axiosClient.defaults.headers.common = {
//     ...axiosClient.defaults.headers.common,
//     Authorization: `Bearer ${accessToken}`,
//     'User-Agent': userAgent,
//     Cookie: cookie,
//   };
// };

/** API General */
export const axiosGeneralAPI = () => {
  axiosClient.defaults.baseURL = 'http://localhost:3000';
  return axiosClient;
};
