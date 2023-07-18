import React from 'react';
import categoryButtonsStyles from '@/app/styles/CategoryButtons.module.css';
import CategoryButton, {
  categoryButtonSizes,
  categoryButtonTypes,
} from './CategoryButton';

type CategoryButtonProps = {
  size: categoryButtonSizes;
};

export default function CategoryButtons(props: CategoryButtonProps) {
  return (
    <section className={categoryButtonsStyles.container}>
      <div className={categoryButtonsStyles.content}>
        <CategoryButton
          type={categoryButtonTypes.headphones}
          size={props.size}
        />
        <CategoryButton type={categoryButtonTypes.speakers} size={props.size} />
        <CategoryButton
          type={categoryButtonTypes.earphones}
          size={props.size}
        />
      </div>
    </section>
  );
}
