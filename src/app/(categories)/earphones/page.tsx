import CategoryButtons from '@/app/components/CategoryButtons';
import CategoryHeader from '@/app/components/CategoryHeader';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer from '@/app/components/PageContainer';
import React from 'react';

export default function Earphones() {
  return (
    <div>
      <CategoryHeader categoryName="Earphones" />
      <PageContainer>
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </div>
  );
}
