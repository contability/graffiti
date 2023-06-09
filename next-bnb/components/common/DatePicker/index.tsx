import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import palette from '../../../styles/palette';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

const Container = styled.div`
  width: 100%;
  height: 100%;

  .react-datepicker {
    padding: 16px 32px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
    border-radius: 32px;
    cursor: default;
  }

  .react-datepicker__triangle {
    border-bottom-color: white !important;
  }

  .react-datepicker__navigation--next {
    top: 40px;
    right: 56px;
    border: 0;
    background-image: url('../../../public/assets/images/icons/system/system_next_arrow.svg');
    background-repeat: no-repeat;
  }

  .react-datepicker__navigation--previous {
    top: 40px;
    left: 56px;
    border: 0;
    background-image: url('../../../public/assets/images/icons/system/system_back_arrow.svg');
    background-repeat: no-repeat;
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: 600;
    font-family: Airbnb Cereal, sans-serif;
  }

  .react-datepicker__day-names {
    padding-top: 16px;
  }

  .react-datepicker__day-name {
    width: 48px;
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${palette.gray_71};
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day {
    width: 48px;
    height: 48px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    font-family: -apple-system, sans-serif;
    color: ${palette.black};
    outline: none;
    &:hover {
      border: 1px solid ${palette.black};
      color: ${palette.black};
      background-color: white;
      border-radius: 50%;
    }
  }

  .react-datepicker__day--in-range {
    background-color: ${palette.gray_f7};
  }

  .react-datepicker__day--in-selecting-range {
    background-color: ${palette.gray_f7};
  }

  .react-datepicker__day--selected {
    background-color: ${palette.black};
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--range-start {
    background-color: ${palette.black};
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--range-end {
    background-color: ${palette.black};
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--disabled {
    background-color: ${palette.gray_dd};
    cursor: no-drop;
    &:hover {
      border: 0;
    }
  }
`;

const DatePicker: React.FC<ReactDatePickerProps> = ({ ...props }) => {
  return (
    <Container>
      {/* DatePicker는 기본적으로 키보드를 이용할 수 있게 되어 있는데 disabledKeyboardNavigation 속성으로 이를 사용하지 않도록 옵션을 줄 수 있다*/}
      <ReactDatePicker {...props} disabledKeyboardNavigation />
    </Container>
  );
};

export default DatePicker;
