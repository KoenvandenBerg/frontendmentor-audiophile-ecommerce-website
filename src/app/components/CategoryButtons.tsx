import React from 'react';
import categoryButtonsStyles from '@/app/styles/CategoryButtons.module.css';
import CategoryButton, { categoryButtonTypes } from './CategoryButton';

export default function CategoryButtons() {
  return (
    <section className={categoryButtonsStyles.container}>
      <div className={categoryButtonsStyles.content}>
        <CategoryButton type={categoryButtonTypes.headphones} />
        <CategoryButton type={categoryButtonTypes.speakers} />
        <CategoryButton type={categoryButtonTypes.earphones} />
      </div>
    </section>
  );
}
