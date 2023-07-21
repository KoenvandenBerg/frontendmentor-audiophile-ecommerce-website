import React from 'react';
import productGridStyles from '@/app/styles/ProductGrid.module.css';
import Button, { ButtonTypes } from './Button';

export default function ProductGrid() {
  return (
    <section className={productGridStyles.container}>
      <div className={productGridStyles.mainItem}>
        <img src={`/shared/desktop/image-category-thumbnail-speakers.png`} />
        <div className={productGridStyles.mainItemTextBox}>
          <h2>
            ZX9 <br /> Speaker
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            type={ButtonTypes.outlineInvertedWhite}
            text="See Product"
            onClick={() => {}}
          />
        </div>
        <div className={productGridStyles.mainItemInnerCircle}></div>
        <div className={productGridStyles.mainItemInnerMiddleCircle}></div>
        <div className={productGridStyles.mainItemOuterMiddleCircle}></div>
        <div className={productGridStyles.mainItemOuterCircle}></div>
      </div>
      <div className={productGridStyles.secondaryItem}>
        <div className={productGridStyles.secondaryItemText}>
          <h2>YX1 Earphones</h2>
          <Button
            type={ButtonTypes.outline}
            text="See Product"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className={productGridStyles.ternaryItem}>
        <div className={productGridStyles.ternaryItemPicture}></div>
        <div className={productGridStyles.ternaryItemText}>
          <h2>YX1 Earphones</h2>
          <Button
            type={ButtonTypes.outline}
            text="See Product"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
