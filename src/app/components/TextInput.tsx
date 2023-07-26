import React from 'react';
import textInputStyles from '@/app/styles/TextInput.module.css';

type TextInputProps = {
  label: string;
};

export default function TextInput(props: TextInputProps) {
  return (
    <div className={textInputStyles.container}>
      <h3>{props.label}</h3>
      <input type="text" className={textInputStyles.input} />
    </div>
  );
}
