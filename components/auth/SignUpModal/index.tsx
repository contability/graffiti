import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import CloseXIcon from '../../../svg/icons/system/system_close_x_icon.svg';
import MailIcon from '../../../svg/icons/system/system_mail.svg';
import PersonIcon from '../../../svg/icons/system/system_person.svg';
import OpenedEyeIcon from '../../../svg/icons/system/system_opened_eye.svg';
import ClosedEyeIcon from '../../../svg/icons/system/system_closed_eye.svg';
import Input from '../../common/Input';

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

    svg {
      position: absolute;
      right: 11px;
      top: 16px;
    }
  }
`;

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.className) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'pw':
        setPassword(event.target.value);
        break;
    }
  };

  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input placeholder="이메일 주소" type={'email'} icon={<MailIcon />} className="email" onChange={handleChange} />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="이름(예:길동)"
          type={'text'}
          icon={<PersonIcon />}
          className="firstName"
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="성(예:홍)"
          type={'text'}
          icon={<PersonIcon />}
          className="lastName"
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type={'password'}
          icon={<OpenedEyeIcon />}
          className="pw"
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export default SignUpModal;
