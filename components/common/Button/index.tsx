import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../styles/palette';

const Container = styled.button`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 4px;
  background-color: ${palette.bittersweet};
  color: white;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
  ${props => getButtonColor(props.color || '')}
`;

const getButtonColor = (color: string) => {
  switch (color) {
    case 'dark_cyan':
      return css`
        background-color: ${palette.dark_cyan};
      `;
    default:
      return css`
        background-color: ${palette.bittersweet};
      `;
  }
};

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'dark_cyan';
}

const Button: React.FC<IProps> = ({ children, color, ...props }) => {
  return (
    <Container {...props} color={color}>
      {children}
    </Container>
  );
};

// props의 값이 같다면 리렌더링 방지. 최적화
export default React.memo(Button);
