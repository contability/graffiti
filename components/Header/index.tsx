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
  const { openModal, closeModal, ModalPortal } = useModal();
  const user = useSelector(state => state.user);

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
          <button className="header-login-button">로그인</button>
        </div>
      ) : (
        <button className="header-user-profile" type="button">
          <HamburgerIcon />
          <img src={user.profileImage} alt="" className="header-user-profile-image" />
        </button>
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
          <SignUpModal closeModal={closeModal} />
        </ModalPortal>
      }
    </Container>
  );
};

export default Header;
