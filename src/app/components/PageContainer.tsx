import React, { PropsWithChildren } from 'react';
import pageContainerStyles from '@/app/styles/PageContainer.module.css';

export enum PageContainerTypes {
  home,
  category,
  product,
}

type PageContainerProps = {
  type: PageContainerTypes;
};

export default function PageContainer(
  props: PropsWithChildren<PageContainerProps>
) {
  const getPageContainerStyle = () => {
    switch (props.type) {
      case PageContainerTypes.home:
        return pageContainerStyles.contentContainerHome;
      case PageContainerTypes.category:
        return pageContainerStyles.contentContainerCategory;
      case PageContainerTypes.product:
        return pageContainerStyles.contentContainerProduct;
    }
  };
  return (
    <div className={pageContainerStyles.container}>
      <main className={getPageContainerStyle()}>{props.children}</main>
    </div>
  );
}
