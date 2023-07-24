import CategoryButtons from '@/app/components/CategoryButtons';
import CategoryHeader from '@/app/components/CategoryHeader';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import ProductListing from '@/app/components/ProductListing';
import React from 'react';

export default function Earphones() {
  return (
    <div>
      <CategoryHeader categoryName="Earphones" />
      <PageContainer type={PageContainerTypes.category}>
        <ProductListing
          new={true}
          productName="YX1 Wireless Earphones"
          productDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          productPageUrl="/products/yx1-wireless-earphones"
          productImageUrlMobile="/product-yx1-earphones/mobile/image-category-page-preview.jpg"
          productImageUrlTablet="/product-yx1-earphones/tablet/image-category-page-preview.jpg"
          productImageUrlDesktop="/product-yx1-earphones/desktop/image-category-page-preview.jpg"
          inverted={false}
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </div>
  );
}
