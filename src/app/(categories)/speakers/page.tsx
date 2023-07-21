import CategoryButtons from '@/app/components/CategoryButtons';
import CategoryHeader from '@/app/components/CategoryHeader';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import ProductListing from '@/app/components/ProductListing';
import React from 'react';

export default function Speakers() {
  return (
    <div>
      <CategoryHeader categoryName="Speakers" />
      <PageContainer type={PageContainerTypes.category}>
        <ProductListing
          new={true}
          productName="ZX9 Speaker"
          productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          productImageUrlMobile="/product-zx9-speaker/mobile/image-category-page-preview.jpg"
          productImageUrlTablet="/product-zx9-speaker/tablet/image-category-page-preview.jpg"
          productImageUrlDesktop="/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          inverted={false}
        />
        <ProductListing
          new={false}
          productName="ZX7 Speaker"
          productDescription="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          productImageUrlMobile="/product-zx7-speaker/mobile/image-category-page-preview.jpg"
          productImageUrlTablet="/product-zx7-speaker/tablet/image-category-page-preview.jpg"
          productImageUrlDesktop="/product-zx7-speaker/desktop/image-category-page-preview.jpg"
          inverted={true}
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </div>
  );
}
