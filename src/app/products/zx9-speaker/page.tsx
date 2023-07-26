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

export default function ZX9Speaker() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <ProductDetails
          new={true}
          productName="ZX9 Speaker"
          productPrice={4500}
          productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          productFeatures={[
            'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
            'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
          ]}
          productBoxContent={{
            'Speaker Unit': 2,
            'Speaker Cloth Panel': 2,
            'User Manual': 1,
            '3.5mm 10m Audio Cable': 1,
            '10m Optical Cable': 1,
          }}
          productImageUrlMobile="/product-zx9-speaker/mobile/image-product.jpg"
          productImageUrlTablet="/product-zx9-speaker/tablet/image-product.jpg"
          productImageUrlDesktop="/product-zx9-speaker/desktop/image-product.jpg"
          action={{
            type: CartActionType.add_item,
            price: 4500,
            productName: 'ZX9',
            productImageUrl: '/cart/image-zx9-speaker.jpg',
            quantity: 0,
          }}
        />
        <ProductGallery
          primaryImageUrl="/product-zx9-speaker/mobile/image-gallery-3.jpg"
          secondaryImageUrl="/product-zx9-speaker/mobile/image-gallery-2.jpg"
          ternaryImageUrl="/product-zx9-speaker/mobile/image-gallery-1.jpg"
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
