/* eslint-disable @next/next/no-img-element */
import React from 'react';
import categoryButtonStyles from '@/app/styles/CategoryButton.module.css';
import Button, { ButtonTypes } from './Button';
import Link from 'next/link';

export enum categoryButtonTypes {
  headphones,
  speakers,
  earphones,
}

type CategoryButtonProps = {
  type: categoryButtonTypes;
};

export default function CategoryButton(props: CategoryButtonProps) {
  const getImageUrl = () => {
    switch (props.type) {
      case categoryButtonTypes.headphones:
        return '/shared/desktop/image-category-thumbnail-headphones.png';
      case categoryButtonTypes.speakers:
        return '/shared/desktop/image-category-thumbnail-speakers.png';
      case categoryButtonTypes.earphones:
        return '/shared/desktop/image-category-thumbnail-earphones.png';
      default:
        return '';
    }
  };

  const getImageClassName = () => {
    switch (props.type) {
      case categoryButtonTypes.headphones:
        return categoryButtonStyles.headphonesImage;
      case categoryButtonTypes.speakers:
        return categoryButtonStyles.speakersImage;
      case categoryButtonTypes.earphones:
        return categoryButtonStyles.earphonesImage;
    }
  };

  const getButtonText = () => {
    switch (props.type) {
      case categoryButtonTypes.headphones:
        return 'Headphones';
      case categoryButtonTypes.speakers:
        return 'Speakers';
      case categoryButtonTypes.earphones:
        return 'Earphones';
      default:
        return '';
    }
  };

  return (
    <div className={categoryButtonStyles.container}>
      <div className={categoryButtonStyles.content}>
        <img
          className={getImageClassName()}
          src={getImageUrl()}
          alt={getButtonText()}
        />
        <h3>{getButtonText()}</h3>
        <Link href={`/${getButtonText().toLowerCase()}`} tabIndex={-1}>
          <Button
            text="Shop"
            type={ButtonTypes.transparent}
            onClick={() => {}}
          />
        </Link>
      </div>
    </div>
  );
}
