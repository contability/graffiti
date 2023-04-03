import styled from 'styled-components';
import palette from '../../../styles/palette';
import CounterMinusOffIcon from '../../../public/assets/images/icons/system/system_counter_minus_off.svg';
import CounterPlusOffIcon from '../../../public/assets/images/icons/system/system_counter_plus_off.svg';
import React from 'react';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .counter-label {
    font-size: 16px;
    color: ${palette.gray_48};
    font-weight: 600;
  }

  .counter-description {
    display: block;
    font-size: 14px;
    color: ${palette.gray_71};
  }

  .counter-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;

    button {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${palette.dark_cyan};
      border-radius: 50%;
      color: ${palette.dark_cyan};
      background-color: white;
      outline: none;
      cursor: pointer;
      font-size: 21px;
      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }
`;

interface IProps {
  label?: string;
  description?: string;
  value?: number;
  minValue?: number;
  increaseNum?: number;
  onChange?: (value: number) => void;
}

const Counter: React.FC<IProps> = ({ label, value = 1, minValue = 0, increaseNum = 1, onChange, description }) => {
  return (
    <Container>
      <label className="counter-label">
        {label}
        {description && <span className="counter-description">{description}</span>}
      </label>
      <div className="counter-contents">
        <button
          type="button"
          disabled={value === minValue}
          onClick={() => {
            if (onChange) onChange(value - increaseNum);
          }}
        >
          <CounterMinusOffIcon />
        </button>
        <p>{value}</p>
        <button
          type="button"
          onClick={() => {
            if (onChange) onChange(value + increaseNum);
          }}
        >
          <CounterPlusOffIcon />
        </button>
      </div>
    </Container>
  );
};

export default React.memo(Counter);
