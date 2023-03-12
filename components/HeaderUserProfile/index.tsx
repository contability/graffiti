import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';
import { logoutAPI } from '../../lib/api/auth';
import { useSelector } from '../../store';
import { userActions } from '../../store/user';
import HamburgerIcon from '../../public/assets/images/icons/system/system_hamburger.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderUserProfile: React.FC = () => {
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
  const userProfileImage = useSelector(state => state.user.profileImage);

  const dispatch = useDispatch();
  const router = useRouter();

  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isUsermenuOpened) setIsUsermenuOpened(false);
      }}
    >
      <button className="header-user-profile" type="button" onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}>
        <HamburgerIcon />
        <img src={userProfileImage} alt="" className="header-user-profile-image" />
      </button>
      {isUsermenuOpened && (
        <ul className="header-usermenu">
          <li>숙소 관리</li>
          {/* Link는 a 태그로 랜더링 되므로 유효하지 않다. 옛날 버전에선 됐던 것 같다. (legacyBehavior) */}
          {/* <Link href="/room/register/building" legacyBehavior>
          <a role="presentation" onClick={() => setIsUsermenuOpened(false)}>
            <li>숙소 등록하기</li>
          </a>
        </Link> */}
          <Link
            href=""
            onClick={() => {
              setIsUsermenuOpened(false);
              router.push('/room/register/building');
            }}
          >
            <li>숙소 등록하기</li>
          </Link>
          <div className="header-usermenu-divider" />
          <li role="presentation" onClick={logout}>
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
};

export default HeaderUserProfile;
