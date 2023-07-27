/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cartItemStyles from '@/app/styles/CartItem.module.css';

type CartItemProps = {
  imageUrl: string;
  productName: string;
  productPrice: number;
  quantity: number;
};

export default function SummaryItem(props: CartItemProps) {
  return (
    <div className={cartItemStyles.container}>
      <div className={cartItemStyles.imageAndTextContainer}>
        <div className={cartItemStyles.imageContainer}>
          <img src={props.imageUrl} alt="" />
        </div>
        <div className={cartItemStyles.textContainer}>
          <h4>{props.productName}</h4>
          <p>€ {props.productPrice.toLocaleString('nl')}</p>
        </div>
      </div>
      <p className={cartItemStyles.quantity}>{props.quantity}x</p>
    </div>
  );
}
