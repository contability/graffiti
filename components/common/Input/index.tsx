import { log } from 'console';
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import useValidateMode from '../../../hooks/useValidateMode';
import { useSelector } from '../../../store';
import palette from '../../../styles/palette';

type InputContainerProps = {
  iconExist: boolean;
  /** 밸리데이션 유효 값 */
  isValid: boolean;
  /** 밸레데이션 사용 여부 */
  useValidation: boolean;
};

const Container = styled.div<InputContainerProps>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    /* padding: ${props => (props.iconExist ? '0 44px 0 11px' : '0 11px')}; */
    padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px' : '0 11px')};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: ${palette.gray_76};
    }
    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }

  svg {
    position: absolute;
    right: 11px;
    height: 46px;
  }

  /* .input-icon-wrapper {
    position: absolute;
    top: 0;
    right: 11px;
    height: 46px;
    display: flex;
    align-items: center;
  } */

  .input-error-message {
    margin-top: 8px;
    font-weight: 600;
    font-size: 14px;
    color: ${palette.tawny};
  }

  // 유효하지 않은 값.
  ${({ useValidation, isValid }) =>
    useValidation &&
    !isValid &&
    css`
      input {
        background-color: ${palette.snow};
        border-color: ${palette.orange};
        &:focus {
          border-color: ${palette.orange};
        }
      }
    `}

  // 유효한 값
  ${({ useValidation, isValid }) =>
    useValidation &&
    isValid &&
    css`
      input {
        border-color: ${palette.dark_cyan};
      }
    `}
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  isValid?: boolean;
  validateMode?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
}

const Input: React.FC<IProps> = ({
  icon,
  // validateMode = false,
  isValid = false,
  useValidation = true,
  errorMessage,
  ...props
}) => {
  const validateMode = useValidateMode().validateMode;

  return (
    <Container iconExist={!!icon} isValid={isValid} useValidation={validateMode && useValidation}>
      <input {...props} />
      {icon}
      {useValidation && validateMode && !isValid && errorMessage && (
        <p className="input-error-message">{errorMessage}</p>
      )}
    </Container>
  );
};

// props의 값이 같다면 리렌더링 방지. 최적화
export default React.memo(Input);
