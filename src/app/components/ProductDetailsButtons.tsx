'use client';

import React, { useContext, useState } from 'react';
import productDetailsButtonsStyles from '@/app/styles/ProductDetailsButtons.module.css';
import QuantitySelector from './QuantitySelector';
import Button from './Button';
import { ButtonTypes } from '../types/ButtonTypes';
import { CartContext } from '../contexts/CartContext';
import { CartAction } from '../types/CartTypes';

export default function ProductDetailsButtons({
  action,
}: {
  action: CartAction;
}) {
  const { dispatch } = useContext(CartContext);

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  action.quantity = selectedQuantity;

  return (
    <div className={productDetailsButtonsStyles.container}>
      <QuantitySelector
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        min={1}
        max={5}
      />
      <Button
        text="Add to Cart"
        type={ButtonTypes.default}
        onClick={() => {
          dispatch(action);
          setSelectedQuantity(1);
        }}
      />
    </div>
  );
}
