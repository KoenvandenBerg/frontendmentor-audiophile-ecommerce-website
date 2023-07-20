import React from 'react';
import categoryHeaderStyles from '@/app/styles/CategoryHeader.module.css';
import Navbar from './Navbar';

type CategoryHeaderProps = {
  categoryName: string;
};

export default function CategoryHeader(props: CategoryHeaderProps) {
  return (
    <div className={categoryHeaderStyles.container}>
      <div className={categoryHeaderStyles.contentContainer}>
        <div className={categoryHeaderStyles.navbarContainer}>
          <Navbar />
        </div>
        <h1>{props.categoryName}</h1>
      </div>
    </div>
  );
}
