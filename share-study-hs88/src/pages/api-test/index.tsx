import dayjs from 'dayjs';
import { axiosGeneralAPI } from '../../../libs/api-client';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useUserStore } from '../../../libs/store/user';
import { AppContext } from 'next/app';

const ApiTestPage = () => {
  const [diffTime, setDiffTime] = useState(0);
  const { userId, userName, userType } = useUserStore();

  // console.log(expiredTime);

  const headerChk = async () => {
    const res = await axiosGeneralAPI().get('/api/api-test');

    const expiredTime = dayjs(getCookie('expiredTime') as string);
    const now = dayjs();

    setDiffTime(now.diff(expiredTime, 'second'));
    alert('"api-test" request header "Authorization" check');
  };

  useEffect(() => {
    headerChk();
  }, []);

  return (
    <>
      <div className="flex w-[460px] justify-between  p-8">
        <div>
          <p>
            <span>accessToken 만료까지</span>
          </p>
          <div>다음 요청</div>

          <div>userId</div>
          <div>userName</div>
          <div>userType</div>
        </div>
        <div>
          <p>
            {diffTime}
            <span> second</span>
          </p>
          <p>{diffTime > -30 ? 'reIssue API 호출' : 'accessToken request'}</p>
          <p>{userId}</p>
          <p>{userName}</p>
          <p>{userType}</p>
        </div>
      </div>
      <div className="text-center w-[460px] mt-5">
        <button className="bg-slate-400 rounded-md p-3" onClick={headerChk}>
          header chk 버튼
        </button>
      </div>
    </>
  );
};

export default ApiTestPage;
