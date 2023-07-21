/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren } from 'react';
import productListingStyles from '@/app/styles/ProductListing.module.css';
import productListingInvertedStyles from '@/app/styles/ProductListingInverted.module.css';
import Button, { ButtonTypes } from './Button';

type ProductListingProps = {
  new: boolean;
  productName: string;
  productDescription: string;
  productImageUrlMobile: string;
  productImageUrlTablet: string;
  productImageUrlDesktop: string;
  inverted: boolean;
};

export default function ProductListing(
  props: PropsWithChildren<ProductListingProps>
) {
  const stylesheet = props.inverted
    ? productListingInvertedStyles
    : productListingStyles;

  return (
    <section className={stylesheet.container}>
      <div className={stylesheet.imageContainer}>
        <picture>
          <source
            srcSet={props.productImageUrlTablet}
            media="(min-width:700px)"
          />
          <source
            srcSet={props.productImageUrlDesktop}
            media="(min-width:1100px)"
          />
          <img
            src={props.productImageUrlMobile}
            alt={`An image showing the ${props.productName}.`}
          />
        </picture>
      </div>
      <div className={stylesheet.textContainer}>
        {props.new && <h3>New Product</h3>}
        <h2>{props.productName}</h2>
        <p>{props.productDescription}</p>
        <Button
          type={ButtonTypes.default}
          text="See Product"
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
