import React from 'react';
import heroSectionStyles from '@/app/styles/HeroSection.module.css';
import Button from './Button';
import { ButtonTypes } from '../types/ButtonTypes';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className={heroSectionStyles.headerContainer}>
      <div className={heroSectionStyles.headerContentContainer}>
        <Navbar />
        <div className={heroSectionStyles.heroTextContainer}>
          <div className={heroSectionStyles.heroText}>
            <h3>New Product</h3>
            <h2>XX99 Mark II HeadphoneS</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              text="See Product"
              type={ButtonTypes.default}
              onClick={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
