import styled from 'styled-components';
import palette from '../../../styles/palette';
import XIcon from '../../../public/assets/images/icons/auth/x_icon.svg';

const Container = styled.p<{ isValid: boolean }>`
  color: ${({ isValid }) => (isValid ? palette.davidson_orange : palette.green)};
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
    fill: ${({ isValid }) => (isValid ? palette.orange : palette.green)};
  }
`;

interface IProps {
  isValid: boolean;
  text: string;
}

const PasswordWarning: React.FC<IProps> = ({ isValid, text }) => {
  return (
    <Container isValid={isValid}>
      {/* {isValid ? <XIcon/> } */}
      <XIcon />
    </Container>
  );
};
