import React from 'react';
import headerStyles from '@/app/styles/Header.module.css';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import Button, { ButtonTypes } from './Button';
import Navbar from './Navbar';

const pages = ['Home', 'Headphones', 'Speakers', 'Earphones'];

export default function Header() {
  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.headerContentContainer}>
        <Navbar />
        <div className={headerStyles.heroTextContainer}>
          <div className={headerStyles.heroText}>
            <h3>New Product</h3>
            <h2>XX99 Mark II HeadphoneS</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              text="See Product"
              type={ButtonTypes.default}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
