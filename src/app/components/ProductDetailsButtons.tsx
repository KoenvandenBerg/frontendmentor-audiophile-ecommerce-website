'use client';

import React, { useState } from 'react';
import productDetailsButtonsStyles from '@/app/styles/ProductDetailsButtons.module.css';
import QuantitySelector from './QuantitySelector';
import Button from './Button';
import { ButtonTypes } from '../types/ButtonTypes';

export default function ProductDetailsButtons() {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

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
        onClick={undefined}
      />
    </div>
  );
}
