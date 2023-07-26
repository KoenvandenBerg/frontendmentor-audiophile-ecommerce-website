import React from 'react';
import cartQuantitySelectorStyles from '@/app/styles/CartQuantitySelector.module.css';

type CartQuantitySelectorProps = {
  min: 1;
  max: 10;
  cartQuantity: number;
  minusOnClick: () => void;
  plusOnClick: () => void;
};

export default function CartQuantitySelector(props: CartQuantitySelectorProps) {
  return (
    <div className={cartQuantitySelectorStyles.container}>
      <button
        className={cartQuantitySelectorStyles.button}
        disabled={props.cartQuantity <= props.min ? true : false}
        onClick={props.minusOnClick}
        aria-label="Decrease quantity."
      >
        -
      </button>
      <span aria-label="Selected quantity.">{props.cartQuantity}</span>
      <button
        className={cartQuantitySelectorStyles.button}
        disabled={props.cartQuantity < props.max ? false : true}
        onClick={props.plusOnClick}
        aria-label="Increase quantity."
      >
        +
      </button>
    </div>
  );
}
