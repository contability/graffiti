import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';

const Container = styled.div`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background-image: url('/assets/images/icons/system/system_select_down_arrow.svg');
    background-size: 17px;
    background-position: right 20px center;
    background-repeat: no-repeat;
    font-size: 16px;

    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
}

const Selector: React.FC<IProps> = ({ options = [], disabledOptions = [], ...props }) => {
  return (
    <Container>
      <select {...props}>
        {disabledOptions.map((disabledOption, disabledOptionIndex) => (
          <option key={disabledOptionIndex} value={disabledOption} disabled>
            {disabledOption}
          </option>
        ))}
        {options.map((option, optionIndex) => (
          <option key={optionIndex} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selector;
