import React from 'react';
import productGridStyles from '@/app/styles/ProductGrid.module.css';
import { ButtonTypes } from '../types/ButtonTypes';
import NavigationButton from './NavigationButton';

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
          <NavigationButton
            type={ButtonTypes.outlineInvertedWhite}
            text="See Product"
            url={'/products/zx9-speaker'}
          />
        </div>
        <div className={productGridStyles.mainItemInnerCircle}></div>
        <div className={productGridStyles.mainItemInnerMiddleCircle}></div>
        <div className={productGridStyles.mainItemOuterMiddleCircle}></div>
        <div className={productGridStyles.mainItemOuterCircle}></div>
      </div>
      <div className={productGridStyles.secondaryItem}>
        <div className={productGridStyles.secondaryItemText}>
          <h2>ZX7 Speaker</h2>
          <NavigationButton
            type={ButtonTypes.outline}
            text="See Product"
            url={'/products/zx7-speaker'}
          />
        </div>
      </div>
      <div className={productGridStyles.ternaryItem}>
        <div className={productGridStyles.ternaryItemPicture}></div>
        <div className={productGridStyles.ternaryItemText}>
          <h2>YX1 Earphones</h2>
          <NavigationButton
            type={ButtonTypes.outline}
            text="See Product"
            url={'/products/yx1-wireless-earphones'}
          />
        </div>
      </div>
    </section>
  );
}
