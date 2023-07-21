import CategoryButtons from '@/app/components/CategoryButtons';
import CategoryHeader from '@/app/components/CategoryHeader';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import ProductListing from '@/app/components/ProductListing';
import React from 'react';

export default function Headphones() {
  return (
    <div>
      <CategoryHeader categoryName="Headphones" />
      <PageContainer type={PageContainerTypes.category}>
        <ProductListing
          new={true}
          productName="XX99 Mark II Headphones"
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productImageUrlMobile="/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
          productImageUrlTablet="/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
          productImageUrlDesktop="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          inverted={false}
        />
        <ProductListing
          new={false}
          productName="XX99 Mark I Headphones"
          productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productImageUrlMobile="/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
          productImageUrlTablet="/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
          productImageUrlDesktop="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
          inverted={true}
        />
        <ProductListing
          new={false}
          productName="XX59 Headphones"
          productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productImageUrlMobile="/product-xx59-headphones/mobile/image-category-page-preview.jpg"
          productImageUrlTablet="/product-xx59-headphones/tablet/image-category-page-preview.jpg"
          productImageUrlDesktop="/product-xx59-headphones/desktop/image-category-page-preview.jpg"
          inverted={false}
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </div>
  );
}
