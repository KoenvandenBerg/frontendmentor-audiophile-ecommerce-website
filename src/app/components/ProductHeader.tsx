import React from 'react';
import productHeaderStyles from '@/app/styles/ProductHeader.module.css';
import Navbar from './Navbar';

export default function ProductHeader() {
  return (
    <div className={productHeaderStyles.container}>
      <div className={productHeaderStyles.navbarContainer}>
        <Navbar />
      </div>
    </div>
  );
}
