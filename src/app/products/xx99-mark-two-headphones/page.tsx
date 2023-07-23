import CategoryButtons from '@/app/components/CategoryButtons';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import ProductDetails from '@/app/components/ProductDetails';
import ProductGallery from '@/app/components/ProductGallery';
import ProductHeader from '@/app/components/ProductHeader';
import React from 'react';

export default function XX99MarkTwoEarhpones() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <ProductDetails
          new={false}
          productName="XX99 Mark II Headphones"
          productPrice={2999}
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productFeatures={[
            'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
            'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
          ]}
          productBoxContent={{
            'Headphone Unit': 1,
            'Replacement Earcups': 2,
            'User Manual': 1,
            '3.5mm 5m Audio Cable': 1,
            'Travel Bag': 1,
          }}
          productImageUrlMobile="/product-xx99-mark-two-headphones/mobile/image-product.jpg"
          productImageUrlTablet="/product-xx99-mark-two-headphones/tablet/image-product.jpg"
          productImageUrlDesktop="/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        />
        <ProductGallery
          primaryImageUrl="/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
          secondaryImageUrl="/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
          ternaryImageUrl="/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
