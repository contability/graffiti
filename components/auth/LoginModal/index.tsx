import styled from 'styled-components';
import palette from '../../../styles/palette';
import CloseXIcon from '../../../public/assets/images/icons/system/system_close_x_icon.svg';
import MailIcon from '../../../public/assets/images/icons/system/system_mail.svg';
import OpenedEyeIcon from '../../../public/assets/images/icons/system/system_opened_eye.svg';
import ClosedEyeIcon from '../../../public/assets/images/icons/system/system_closed_eye.svg';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/auth';
import { loginAPI } from '../../../lib/api/auth';
import useValidateMode from '../../../hooks/useValidateMode';
import { userActions } from '../../../store/user';

const Container = styled.form`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;

  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
    width: 24px;
  }

  svg {
    top: 10px;
  }

  .login-input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .login-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }

  .login-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
  }

  .login-modal-set-signup {
    color: ${palette.dark_cyan};
    margin-left: 8px;
    cursor: pointer;
  }
`;

interface IProps {
  closeModal: () => void;
}

const LoginModal: React.FC<IProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHided, setIsPasswordHided] = useState(true);

  const dispatch = useDispatch();

  const { setValidateMode } = useValidateMode();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      default:
        setPassword(event.target.value);
    }
  };

  const changeToSignUpModal = () => {
    dispatch(authActions.setAuthMode('signUp'));
  };

  const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidateMode(true);

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
    } else {
      const loginBody = { email, password };

      try {
        const { data } = await loginAPI(loginBody);
        dispatch(userActions.setLoggedUser({ ...data, isLogged: true }));
        closeModal();
        console.log('onSubmitLogin data : ', data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  return (
    <Container onSubmit={onSubmitLogin}>
      <CloseXIcon className="modal-close-x-icon" onClick={closeModal} />
      <div className="login-input-wrapper">
        <Input
          placeholder="이메일 주소"
          name="email"
          type="email"
          icon={<MailIcon />}
          onChange={handleChange}
          value={email}
          isValid={email !== ''}
          errorMessage="이메일이 필요합니다."
        />
      </div>
      <div className="login-input-wrapper login-password-input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          icon={
            isPasswordHided ? (
              <ClosedEyeIcon onClick={() => setIsPasswordHided(false)} />
            ) : (
              <OpenedEyeIcon onClick={() => setIsPasswordHided(true)} />
            )
          }
          type={isPasswordHided ? 'password' : 'text'}
          onChange={handleChange}
          value={password}
          isValid={password !== ''}
          errorMessage="비밀번호를 입력하세요."
        />
      </div>
      <div className="login-modal-submit-button-wrapper">
        <Button type="submit" color="bittersweet">
          로그인
        </Button>
      </div>
      <p>
        계정이 없나요?
        <span className="login-modal-set-signup" onClick={changeToSignUpModal}>
          회원가입
        </span>
      </p>
    </Container>
  );
};

export default LoginModal;
