import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Containter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.gray};
  h1 {
    font-size: 21px;
  }
`;

const Header: React.FC = () => {
  return (
    <Containter>
      <h1>TodoList</h1>
    </Containter>
  );
};

export default Header;
