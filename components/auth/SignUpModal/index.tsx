import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import CloseXIcon from '../../../svg/icons/system/system_close_x_icon.svg';
import MailIcon from '../../../svg/icons/system/system_mail.svg';
import PersonIcon from '../../../svg/icons/system/system_person.svg';
import OpenedEyeIcon from '../../../svg/icons/system/system_opened_eye.svg';
import ClosedEyeIcon from '../../../svg/icons/system/system_closed_eye.svg';

const Container = styled.div`
  width: 400px;
  padding: 32px;
  background-color: white;
  z-index: 11;

  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
    width: 24px;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;

    input {
      position: relative;
      width: 100%;
      height: 46px;
      padding: 0 44px 0 11px;
      border: 1px solid ${palette.gray_eb};
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      ::placeholder {
        color: ${palette.gray_76};
      }
    }

    svg {
      position: absolute;
      right: 11px;
      top: 16px;
    }
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <input type="email" placeholder="이메일 주소" name="email" />
        <MailIcon />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="이름(예:길동)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="성(예:홍)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="비밀번호 설정하기" />
        <OpenedEyeIcon />
      </div>
    </Container>
  );
};

export default SignUpModal;
