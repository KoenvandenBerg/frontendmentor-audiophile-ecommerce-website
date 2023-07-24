'use client';

import React from 'react';
import Button from './Button';
import { ButtonTypes } from '../types/ButtonTypes';
import { useRouter } from 'next/navigation';

type navigationButtonProps = {
  type: ButtonTypes;
  text: string;
  url: string;
};

export default function NavigationButton(props: navigationButtonProps) {
  const router = useRouter();

  return (
    <Button
      text={props.text}
      type={props.type}
      onClick={() => router.push(props.url)}
    />
  );
}
