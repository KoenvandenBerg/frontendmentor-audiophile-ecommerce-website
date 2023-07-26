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

export default function XX59Earhpones() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <ProductDetails
          new={false}
          productName="XX59 Headphones"
          productPrice={899}
          productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productFeatures={[
            'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
            'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
          ]}
          productBoxContent={{
            'Headphone Unit': 1,
            'Replacement Earcups': 2,
            'User Manual': 1,
            '3.5mm 5m Audio Cable': 1,
          }}
          productImageUrlMobile="/product-xx59-headphones/mobile/image-product.jpg"
          productImageUrlTablet="/product-xx59-headphones/tablet/image-product.jpg"
          productImageUrlDesktop="/product-xx59-headphones/desktop/image-product.jpg"
          action={{
            type: CartActionType.add_item,
            price: 899,
            productName: 'XX59',
            productImageUrl: '/cart/image-xx59-headphones.jpg',
            quantity: 0,
          }}
        />
        <ProductGallery
          primaryImageUrl="/product-xx59-headphones/mobile/image-gallery-3.jpg"
          secondaryImageUrl="/product-xx59-headphones/mobile/image-gallery-2.jpg"
          ternaryImageUrl="/product-xx59-headphones/mobile/image-gallery-1.jpg"
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
