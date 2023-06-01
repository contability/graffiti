import { Meta, Story } from '@storybook/react';
import ButtonBar, { IButtonBar } from '.';

export default {
  component: ButtonBar,
  title: '/components/ButtonBar',
} as Meta<IButtonBar>;

const defaultProps: IButtonBar = {
  buttons: [
    {
      label: '버튼1',
      clickEvent: () => alert('버튼1 클릭!'),
    },
    {
      label: '버튼2',
      clickEvent: () => alert('버튼2 클릭!'),
    },
    {
      label: '버튼3',
      clickEvent: () => alert('버튼3 클릭!'),
    },
  ],
  isFixed: false,
};

const Template: Story<IButtonBar> = (args) => {
  return <ButtonBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Fixed = Template.bind({});
Fixed.args = { ...defaultProps, isFixed: true };
