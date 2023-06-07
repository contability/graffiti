import { useState } from 'react';
import { axiosGeneralAPI } from '../../../../libs/api-client';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { IUser, useUserStore } from '../../../../libs/store/user';

interface ITokens {
  accessToken: string;
  refreshToken: string;
  expiredTime: string;
}

interface LoginBffResponse {
  tokenData: ITokens;
  userInfo: IUser;
}

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const router = useRouter();

  const login = async () => {
    const { data } = await axiosGeneralAPI().post<LoginBffResponse>(
      '/api/account/login',
      {
        id,
        pw,
      },
    );

    // token setCookie
    setCookie('accessToken', data.tokenData.accessToken);
    setCookie('refreshToken', data.tokenData.refreshToken);
    setCookie('expiredTime', data.tokenData.expiredTime);

    // setStore userInfo
    if (data.userInfo) {
      const { update } = useUserStore.getState();

      update({
        userId: data.userInfo.userId,
        userName: data.userInfo.userName,
        userType: data.userInfo.userType,
      });
    }

    router.push('/api-test');
  };

  return (
    <div className="p-[20px] w-[270px]">
      <p className="flex justify-between items-center ">
        ID
        <input
          className="border"
          type="text"
          onChange={(e) => setId(e.target.value)}
        />
      </p>
      <p className="flex  justify-between items-center ">
        PW
        <input
          className="border"
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
      </p>
      <p className="pt-2 text-right">
        <button className="bg-slate-400 rounded-md" onClick={login}>
          submit
        </button>
      </p>
      <p className="pt-10">아무거나 입력 하세요.</p>
    </div>
  );
};

export default LoginPage;
