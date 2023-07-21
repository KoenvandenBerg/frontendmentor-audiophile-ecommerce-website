import React from 'react';
import pageContainerStyles from '@/app/styles/PageContainer.module.css';

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={pageContainerStyles.container}>
      <main className={pageContainerStyles.contentContainer}>{children}</main>
    </div>
  );
}
