import CategoryButtons from '@/app/components/CategoryButtons';
import CategoryHeader from '@/app/components/CategoryHeader';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import React from 'react';

export default function Speakers() {
  return (
    <div>
      <CategoryHeader categoryName="Speakers" />
      <PageContainer type={PageContainerTypes.category}>
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </div>
  );
}
