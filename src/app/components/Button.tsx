'use client';

import React from 'react';
import buttonStyles from '@/app/styles/Button.module.css';
import { ButtonTypes } from '../types/ButtonTypes';

type buttonProps = {
  type: ButtonTypes;
  text: string;
  onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled?: boolean;
};

export default function Button(props: buttonProps) {
  if (props.type === ButtonTypes.outline) {
    return (
      <button
        className={buttonStyles.buttonOutline}
        onClick={props.onClick}
        disabled={props.disabled == true}
      >
        {props.text}
      </button>
    );
  }

  if (props.type === ButtonTypes.outlineInvertedWhite) {
    return (
      <button
        className={buttonStyles.buttonOutlineInvertedWhite}
        onClick={props.onClick}
        disabled={props.disabled == true}
      >
        {props.text}
      </button>
    );
  }

  if (props.type === ButtonTypes.transparent) {
    return (
      <button
        className={buttonStyles.buttonTransparent}
        onClick={props.onClick}
        disabled={props.disabled == true}
      >
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
            strokeWidth="2"
          />
        </svg>
      </button>
    );
  }

  if (props.type === ButtonTypes.defaultFullWidth) {
    <button
      className={buttonStyles.buttonDefaultFullWidth}
      onClick={props.onClick}
      disabled={props.disabled == true}
    >
      {props.text}
    </button>;
  }

  return (
    <button
      className={buttonStyles.buttonDefault}
      onClick={props.onClick}
      disabled={props.disabled == true}
    >
      {props.text}
    </button>
  );
}
