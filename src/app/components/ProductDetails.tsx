import React from 'react';
import productDetailsStyles from '@/app/styles/ProductDetails.module.css';
import Button from './Button';
import { ButtonTypes } from '../types/ButtonTypes';
import QuantitySelector from './QuantitySelector';
import ProductDetailsButtons from './ProductDetailsButtons';
import { CartAction } from '../types/CartTypes';

type ProductDetailsProps = {
  new: boolean;
  productName: string;
  productPrice: number;
  productDescription: string;
  productFeatures: string[];
  productBoxContent: {
    [key: string]: number;
  };
  productImageUrlMobile: string;
  productImageUrlTablet: string;
  productImageUrlDesktop: string;
  action: CartAction;
};

export default function ProductDetails(props: ProductDetailsProps) {
  return (
    <section className={productDetailsStyles.container}>
      <div className={productDetailsStyles.imageAndDescriptionContainer}>
        <div className={productDetailsStyles.imageContainer}>
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
        <div className={productDetailsStyles.productDescriptionContainer}>
          {props.new && <h3>New Product</h3>}
          <h1>{props.productName}</h1>
          <p>{props.productDescription}</p>
          <p>€ {props.productPrice.toLocaleString('nl')}</p>
          <ProductDetailsButtons action={props.action} />
        </div>
      </div>
      <div className={productDetailsStyles.featuresAndContentContainer}>
        <div className={productDetailsStyles.featuresContainer}>
          <h2>Features</h2>
          {props.productFeatures.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={productDetailsStyles.boxContentContainer}>
          <h2>In the Box</h2>
          <div className={productDetailsStyles.boxContentItemsContainer}>
            {Object.keys(props.productBoxContent).map((key, index) => {
              return (
                <p key={index}>
                  <span>{props.productBoxContent[key]}x</span>
                  {key}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
