/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cartItemStyles from '@/app/styles/CartItem.module.css';
import CartQuantitySelector from './CartQuantitySelector';

type CartItemProps = {
  imageUrl: string;
  productName: string;
  productPrice: number;
  quantity: number;
  decreaseCartQuantity: () => void;
  increaseCartQuantity: () => void;
  removeItem: () => void;
};

export default function CartItem(props: CartItemProps) {
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
      <div className={cartItemStyles.quantitySelectorAndRemoveItemContainer}>
        <CartQuantitySelector
          min={1}
          max={10}
          cartQuantity={props.quantity}
          minusOnClick={props.decreaseCartQuantity}
          plusOnClick={props.increaseCartQuantity}
        />
        <div
          className={cartItemStyles.removeItemButton}
          onClick={props.removeItem}
        >
          &#x2715;
        </div>
      </div>
    </div>
  );
}
