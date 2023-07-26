import CategoryButtons from '@/app/components/CategoryButtons';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import ProductDetails from '@/app/components/ProductDetails';
import ProductGallery from '@/app/components/ProductGallery';
import ProductHeader from '@/app/components/ProductHeader';
import { CartActionType } from '@/app/types/CartTypes';
import React from 'react';

export default function XX99MarkOneEarhpones() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <ProductDetails
          new={true}
          productName="XX99 Mark I Headphones"
          productPrice={1750}
          productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productFeatures={[
            'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
            'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
          ]}
          productBoxContent={{
            'Headphone Unit': 1,
            'Replacement Earcups': 2,
            'User Manual': 1,
            '3.5mm 5m Audio Cable': 1,
          }}
          productImageUrlMobile="/product-xx99-mark-one-headphones/mobile/image-product.jpg"
          productImageUrlTablet="/product-xx99-mark-one-headphones/tablet/image-product.jpg"
          productImageUrlDesktop="/product-xx99-mark-one-headphones/desktop/image-product.jpg"
          action={{
            type: CartActionType.add_item,
            price: 1750,
            productName: 'XX99 MK I',
            productImageUrl: '/cart/image-xx99-mark-one-headphones.jpg',
            quantity: 0,
          }}
        />
        <ProductGallery
          primaryImageUrl="/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"
          secondaryImageUrl="/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"
          ternaryImageUrl="/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
