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

export default function YX1WirelessEarphones() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <ProductDetails
          new={true}
          productName="YX1 Wireless Earphones"
          productPrice={599}
          productDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          productFeatures={[
            'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
            'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
          ]}
          productBoxContent={{
            'Earphone Unit': 2,
            'Multi-size Earplugs': 6,
            'User Manual': 1,
            'USB-C Charging Cable': 1,
            'Travel Pouch': 1,
          }}
          productImageUrlMobile="/product-yx1-earphones/mobile/image-product.jpg"
          productImageUrlTablet="/product-yx1-earphones/tablet/image-product.jpg"
          productImageUrlDesktop="/product-yx1-earphones/desktop/image-product.jpg"
          action={{
            type: CartActionType.add_item,
            price: 599,
            productName: 'YX1',
            productImageUrl: '/cart/image-yx1-earphones.jpg',
            quantity: 0,
          }}
        />
        <ProductGallery
          primaryImageUrl="/product-yx1-earphones/mobile/image-gallery-3.jpg"
          secondaryImageUrl="/product-yx1-earphones/mobile/image-gallery-2.jpg"
          ternaryImageUrl="/product-yx1-earphones/mobile/image-gallery-1.jpg"
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
