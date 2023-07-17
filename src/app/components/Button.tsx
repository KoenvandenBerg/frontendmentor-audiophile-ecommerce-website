import React from 'react';
import buttonStyles from '@/app/styles/Button.module.css';

enum ButtonTypes {
  default = 'default',
  outline = 'outline',
  transparent = 'transparent',
}

type buttonProps = {
  type: ButtonTypes;
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: buttonProps) {
  if (props.type === ButtonTypes.outline) {
    return <button className={buttonStyles.buttonOutline}>{props.text}</button>;
  }

  if (props.type === ButtonTypes.transparent) {
    return (
      <button className={buttonStyles.buttonTransparent}>
        {props.text}
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.32178 1L6.32178 6L1.32178 11"
            stroke="#D87D4A"
            stroke-width="2"
          />
        </svg>
      </button>
    );
  }

  return <button className={buttonStyles.buttonRegular}>{props.text}</button>;
}

export { ButtonTypes };