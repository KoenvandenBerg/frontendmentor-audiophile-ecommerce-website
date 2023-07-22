import React, { Dispatch, SetStateAction } from 'react';
import quantitySelectorStyles from '@/app/styles/QuantitySelector.module.css';

type QuantitySelectorProps = {
  selectedQuantity: number;
  setSelectedQuantity: Dispatch<SetStateAction<number>>;
};

export default function QuantitySelector(props: QuantitySelectorProps) {
  return (
    <div className={quantitySelectorStyles.container}>
      <button
        className={quantitySelectorStyles.button}
        disabled={props.selectedQuantity <= 0 ? true : false}
        onClick={() => props.setSelectedQuantity(props.selectedQuantity - 1)}
        aria-label="Decrease quantity."
      >
        -
      </button>
      <span aria-label="Selected quantity.">{props.selectedQuantity}</span>
      <button
        className={quantitySelectorStyles.button}
        disabled={props.selectedQuantity < 5 ? false : true}
        onClick={() => props.setSelectedQuantity(props.selectedQuantity + 1)}
        aria-label="Increase quantity."
      >
        +
      </button>
    </div>
  );
}
