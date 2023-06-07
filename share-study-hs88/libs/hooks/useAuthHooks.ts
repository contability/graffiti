// import { RootState } from '@store/index';
// import { IUserInfo, handleLogin } from '@store/reducers/authReducer';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteCookie, setCookie } from 'cookies-next';

// export default function useAuthHooks() {
//   const dispatch = useDispatch();
//   const auth = useSelector((state: RootState) => state.auth);

//   /**
//    * accessToken : 엑세스 토큰
//    * refreshToken : 리프레시 토큰
//    * userInfo : 유저 정보
//    */
//   interface ISetAuthInfoProps {
//     accessToken: string;
//     refreshToken: string;
//     userInfo: IUserInfo;
//   }

//   /**
//    *  인증 정보 설정
//    * @param param0 ISetAuthInfoProps 참조
//    */
//   const setAuthInfo = ({
//     accessToken,
//     refreshToken,
//     userInfo,
//   }: ISetAuthInfoProps) => {
//     setCookie('access_token', accessToken);
//     setCookie('refresh_token', refreshToken);
//     dispatch(handleLogin({ userInfo, isLogin: true }));
//   };

//   /**
//    * 인증 정보 제거
//    */
//   const removeAuthInfo = () => {
//     deleteCookie('access_token');
//     deleteCookie('refresh_token');
//     dispatch(handleLogin({ userInfo: null, isLogin: false }));
//   };

//   return { auth, setAuthInfo, removeAuthInfo };
// }
