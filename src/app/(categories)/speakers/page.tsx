import CategoryButtons from '@/app/components/CategoryButtons';
import CategoryHeader from '@/app/components/CategoryHeader';
import DescriptionSection from '@/app/components/DescriptionSection';
import React from 'react';

export default function Speakers() {
  return (
    <>
      <CategoryHeader categoryName="Speakers" />
      <CategoryButtons />
      <DescriptionSection />
    </>
  );
}
