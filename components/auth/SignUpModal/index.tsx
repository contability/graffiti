import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import CloseXIcon from '../../../public/assets/images/icons/system/system_close_x_icon.svg';
import MailIcon from '../../../public/assets/images/icons/system/system_mail.svg';
import PersonIcon from '../../../public/assets/images/icons/system/system_person.svg';
import OpenedEyeIcon from '../../../public/assets/images/icons/system/system_opened_eye.svg';
import ClosedEyeIcon from '../../../public/assets/images/icons/system/system_closed_eye.svg';
import Input from '../../common/Input';
import Selector from '../../common/Selector';
import { dayList, monthList, yearList } from '../../../lib/staticData';
import Button from '../../common/Button';
import { signupAPI } from '../../../lib/api/auth';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/user';

const Container = styled.form`
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

  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }

  .sign-up-birthdat-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }

  .sign-up-modal-birthday-selectors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-grow: 1;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 25%;
    }
    .sign-up-modal-birthday-year-selector {
      width: 33.3333%;
    }
  }

  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
  }
`;

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [validateMode, setValidateMode] = useState(false);

  const dispatch = useDispatch();

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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.className) {
      case 'day':
        setBirthDay(event.target.value);
        break;
      case 'month':
        setBirthMonth(event.target.value);
        break;
      case 'year':
        setBirthYear(event.target.value);
        break;

      default:
        break;
    }
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidateMode(true);

    if (!email || !lastName || !firstName || !password) return;

    try {
      const signUpBody = {
        email,
        firstName,
        lastName,
        password,
        birthday: new Date(`${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`).toISOString(),
      };

      const { data } = await signupAPI(signUpBody);
      dispatch(userActions.setLoggedUser({ ...data, isLogged: true }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container onSubmit={onSubmitSignUp}>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input
          placeholder="이메일 주소"
          type={'email'}
          name={'email'}
          icon={<MailIcon />}
          className="email"
          onChange={handleChange}
          value={email}
          validateMode={validateMode}
          useValidation
          isValid={!!email}
          errorMessage="이메일이 필요합니다."
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="이름(예:길동)"
          type={'text'}
          icon={<PersonIcon />}
          className="firstName"
          onChange={handleChange}
          value={firstName}
          validateMode={validateMode}
          useValidation
          isValid={!!firstName}
          errorMessage="이름을 입력하세요."
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="성(예:홍)"
          type={'text'}
          icon={<PersonIcon />}
          className="lastName"
          onChange={handleChange}
          value={lastName}
          validateMode={validateMode}
          useValidation
          isValid={!!lastName}
          errorMessage="성을 입력하세요."
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type={hidePassword ? 'password' : 'text'}
          icon={
            hidePassword ? (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            ) : (
              <ClosedEyeIcon onClick={toggleHidePassword} />
            )
          }
          className="pw"
          onChange={handleChange}
          value={password}
          validateMode={validateMode}
          useValidation
          isValid={!!password}
          errorMessage="비밀번호를 입력하세요."
        />
      </div>
      <p className="sign-up-birthdat-label">생일</p>
      <p className="sign-up-modal-birthday-info">
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른 이용자에게 공개되지 않습니다.
      </p>
      <div className="sign-up-modal-birthday-selectors">
        <div className="sign-up-modal-birthday-month-selector">
          <Selector
            options={monthList}
            defaultValue="월"
            disabledOptions={['월']}
            className="month"
            value={birthMonth}
            onChange={handleSelectChange}
          />
        </div>
        <div className="sign-up-modal-birthday-day-selector">
          <Selector
            options={dayList}
            defaultValue="일"
            disabledOptions={['일']}
            className="day"
            value={birthDay}
            onChange={handleSelectChange}
          />
        </div>
        <div className="sign-up-modal-birthday-year-selector">
          <Selector
            options={yearList}
            defaultValue="년"
            disabledOptions={['년']}
            className="year"
            value={birthYear}
            onChange={handleSelectChange}
          />
        </div>
      </div>
      <div className="sign-up-modal-submit-button-wrapper">
        <Button type="submit">가입 하기</Button>
      </div>
    </Container>
  );
};

export default SignUpModal;
