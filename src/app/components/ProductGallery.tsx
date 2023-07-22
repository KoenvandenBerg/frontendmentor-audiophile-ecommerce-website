/* eslint-disable @next/next/no-img-element */
import React from 'react';
import productGalleryStyles from '@/app/styles/ProductGallery.module.css';

type ProductGalleryProps = {
  primaryImageUrl: string;
  secondaryImageUrl: string;
  ternaryImageUrl: string;
};

export default function ProductGallery(props: ProductGalleryProps) {
  return (
    <div className={productGalleryStyles.container}>
      <img
        src={props.primaryImageUrl}
        alt=""
        className={productGalleryStyles.primaryImage}
      />
      <div>
        <img
          src={props.secondaryImageUrl}
          alt=""
          className={productGalleryStyles.secondaryImage}
        />
        <img
          src={props.ternaryImageUrl}
          alt=""
          className={productGalleryStyles.ternaryImage}
        />
      </div>
    </div>
  );
}
