'use client';

import React, { useState } from 'react';
import productDetailsButtonsStyles from '@/app/styles/ProductDetailsButtons.module.css';
import QuantitySelector from './QuantitySelector';
import Button, { ButtonTypes } from './Button';

export default function ProductDetailsButtons() {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  return (
    <div className={productDetailsButtonsStyles.container}>
      <QuantitySelector
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <Button
        text="Add to Cart"
        type={ButtonTypes.default}
        onClick={() => {}}
      />
    </div>
  );
}
