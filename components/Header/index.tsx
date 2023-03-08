import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import SystemHeaderLogo from '../../public/assets/images/icons/system/system_header_logo.svg';
import palette from '../../styles/palette';
// import ModalPortal from '../modal/ModalPortal';
import SignUpModal from '../auth/SignUpModal';
import useModal from '../../hooks/useModal';
import { useSelector } from '../../store';
import HamburgerIcon from '../../public/assets/images/icons/system/system_hamburger.svg';
import AuthModal from '../auth/AuthModal';
import AVD from '../../public/assets/images/profile/profile_user01.svg';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { logoutAPI } from '../../lib/api/auth';

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;

  .header-logo-wrapper {
    display: flex;
    align-items: center;

    .header-logo {
      margin-right: 6px;
    }
  }

  .header-logo-wrapper + div {
    position: relative;
  }

  .header-usermenu {
    position: absolute;
    right: 0;
    top: 52px;
    width: 240px;
    padding: 8px 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: white;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 42px;
      padding: 0 16px;
      cursor: pointer;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }

    .header-usermenu-divider {
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background-color: ${palette.gray_dd};
    }
  }

  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }

  .header-user-profile {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 6px 0 16px;
    border: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: none;

    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }

    .header-user-profile-image {
      margin-left: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    .modal-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      z-index: 10;
    }

    .modal-contents {
      width: 400px;
      height: 400px;
      background-color: white;
      z-index: 11;
    }
  }
`;

const Header: React.FC = () => {
  // const [modalOpened, setModalOpened] = useState(false);
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
  const { openModal, closeModal, ModalPortal } = useModal();
  const user = useSelector(state => state.user);

  const router = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      alert('k');
      await logoutAPI();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Link className="header-logo-wrapper" href="/">
        <SystemHeaderLogo className="header-logo" />
      </Link>
      {!user.isLogged ? (
        <div className="header-auth-buttons">
          <button className="header-sign-up-button" onClick={openModal}>
            회원가입
          </button>
          <button
            className="header-login-button"
            onClick={() => {
              dispatch(authActions.setAuthMode('login'));
              openModal();
            }}
          >
            로그인
          </button>
        </div>
      ) : (
        <OutsideClickHandler
          onOutsideClick={() => {
            if (isUsermenuOpened) setIsUsermenuOpened(false);
          }}
        >
          <button className="header-user-profile" type="button" onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}>
            <HamburgerIcon />
            {/* <img src={user.profileImage} alt="" className="header-user-profile-image" /> */}
            <AVD className="header-user-profile-image" />
          </button>
          {/* {isUsermenuOpened && <div>유저 메뉴</div>} */}
        </OutsideClickHandler>
      )}
      {/* {modalOpened && (
        // modal
        // <div className="modal-wrapper">
        //   <div className="modal-background" role="presentation" onClick={() => setModalOpened(false)} />
        //   <div className="modal-contents" />
        // </div>

        // modal portal
        // <ModalPortal closePortal={() => setModalOpened(false)}>

      )} */}

      {
        // useModal
        <ModalPortal>
          <AuthModal closeModal={closeModal} />
        </ModalPortal>
      }
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
    </Container>
  );
};

export default Header;
