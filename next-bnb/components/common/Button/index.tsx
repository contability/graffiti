import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../styles/palette';

/** 버튼 색상 구하기 */
const getButtonColor = (color: string, colorReverse: boolean) => {
  if (colorReverse) {
    switch (color) {
      case 'dark_cyan':
        return css`
          border: 2px solid ${palette.dark_cyan};
          color: ${palette.dark_cyan};
          background-color: white;
        `;
      default:
        return css`
          border: 2px solid ${palette.black};
          color: ${palette.black};
          background-color: white;
        `;
    }
  } else {
    switch (color) {
      case 'dark_cyan':
        return css`
          color: white;
          background-color: ${palette.dark_cyan};
        `;
      case 'bittersweet':
        return css`
          background-color: ${palette.bittersweet};
          color: white;
        `;
      case 'amaranth':
        return css`
          background-color: ${palette.amaranth};
          color: white;
        `;
      default:
        return css`
          border: 1px solid ${palette.gray_c4};
          color: ${palette.black};
          background-color: white;
        `;
    }
  }
};

interface StyledButtonProps {
  width: string | undefined;
  colorReverse: boolean;
}

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'dark_cyan' | 'white' | 'bittersweet' | 'amaranth';
  width?: string;
  colorReverse?: boolean;
  icon?: JSX.Element;
}

const Container = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  width: ${props => props.width};
  ${props => getButtonColor(props.color || '', props.colorReverse)};

  svg {
    margin-right: 12px;
  }
`;

const Button: React.FC<IProps> = ({ children, color, width, colorReverse = false, icon, ...props }) => {
  return (
    <Container {...props} color={color} width={width} colorReverse={colorReverse}>
      {icon}
      {children}
    </Container>
  );
};

export default React.memo(Button);
