/* eslint-disable @next/next/no-img-element */
import React from 'react';
import categoryButtonStyles from '@/app/styles/CategoryButton.module.css';
import Button, { ButtonTypes } from './Button';

export enum categoryButtonSizes {
  small,
  large,
}

export enum categoryButtonTypes {
  headphones,
  speakers,
  earphones,
}

type CategoryButtonProps = {
  type: categoryButtonTypes;
  size: categoryButtonSizes;
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
    switch (props.size) {
      case categoryButtonSizes.small:
        switch (props.type) {
          case categoryButtonTypes.headphones:
            return categoryButtonStyles.headphonesImageSmall;
          case categoryButtonTypes.speakers:
            return categoryButtonStyles.speakersImageSmall;
          case categoryButtonTypes.earphones:
            return categoryButtonStyles.earphonesImageSmall;
        }
      case categoryButtonSizes.large:
        switch (props.type) {
          case categoryButtonTypes.headphones:
            return categoryButtonStyles.headphonesImageLarge;
          case categoryButtonTypes.speakers:
            return categoryButtonStyles.speakersImageLarge;
          case categoryButtonTypes.earphones:
            return categoryButtonStyles.earphonesImageLarge;
        }
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
    <div
      className={
        props.size === categoryButtonSizes.small
          ? categoryButtonStyles.containerSmall
          : categoryButtonStyles.containerLarge
      }
    >
      <div className={categoryButtonStyles.content}>
        <img
          className={getImageClassName()}
          src={getImageUrl()}
          alt={getButtonText()}
        />
        <h3>{getButtonText()}</h3>
        <Button text="Shop" type={ButtonTypes.transparent} onClick={() => {}} />
      </div>
    </div>
  );
}
