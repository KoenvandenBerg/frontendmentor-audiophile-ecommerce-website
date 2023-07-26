import React, { Dispatch, SetStateAction } from 'react';
import quantitySelectorStyles from '@/app/styles/QuantitySelector.module.css';

type QuantitySelectorProps = {
  min: number;
  max: number;
  selectedQuantity: number;
  setSelectedQuantity: Dispatch<SetStateAction<number>>;
};

export default function QuantitySelector(props: QuantitySelectorProps) {
  return (
    <div className={quantitySelectorStyles.container}>
      <button
        className={quantitySelectorStyles.button}
        disabled={props.selectedQuantity <= props.min ? true : false}
        onClick={() => props.setSelectedQuantity(props.selectedQuantity - 1)}
        aria-label="Decrease quantity."
      >
        -
      </button>
      <span aria-label="Selected quantity.">{props.selectedQuantity}</span>
      <button
        className={quantitySelectorStyles.button}
        disabled={props.selectedQuantity < props.max ? false : true}
        onClick={() => props.setSelectedQuantity(props.selectedQuantity + 1)}
        aria-label="Increase quantity."
      >
        +
      </button>
    </div>
  );
}
