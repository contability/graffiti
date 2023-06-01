import React from 'react';

interface Button {
  label: string;
  clickEvent?: () => void;
}

export interface IButtonBar {
  buttons: Button[];
  isFixed: boolean;
}

const ButtonBar = ({ buttons, isFixed = false }: IButtonBar) => {
  return (
    <div
      className={`w-full bottom-0 ${
        isFixed && 'fixed'
      } flex font-semibold text-red-500 h-[64px]`}
    >
      {buttons?.map((button, buttonIndex) => (
        <p
          className="cursor-pointer flex-grow bg-red-50 hover:bg-red-200 h-full text-center leading-[64px]"
          onClick={button.clickEvent}
          key={`Button-${buttonIndex}`}
        >
          {button.label}
        </p>
      ))}
    </div>
  );
};

export default ButtonBar;
