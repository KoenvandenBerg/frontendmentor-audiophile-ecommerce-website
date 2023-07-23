import CategoryButtons from '@/app/components/CategoryButtons';
import DescriptionSection from '@/app/components/DescriptionSection';
import PageContainer, {
  PageContainerTypes,
} from '@/app/components/PageContainer';
import ProductDetails from '@/app/components/ProductDetails';
import ProductGallery from '@/app/components/ProductGallery';
import ProductHeader from '@/app/components/ProductHeader';
import React from 'react';

export default function ZX7Speaker() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <ProductDetails
          new={false}
          productName="ZX7 Speaker"
          productPrice={3500}
          productDescription="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          productFeatures={[
            'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
            'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
          ]}
          productBoxContent={{
            'Speaker Unit': 2,
            'Speaker Cloth Panel': 2,
            'User Manual': 1,
            '3.5mm 7.5m Audio Cable': 1,
            '7.5m Optical Cable': 1,
          }}
          productImageUrlMobile="/product-zx7-speaker/mobile/image-product.jpg"
          productImageUrlTablet="/product-zx7-speaker/tablet/image-product.jpg"
          productImageUrlDesktop="/product-zx7-speaker/desktop/image-product.jpg"
        />
        <ProductGallery
          primaryImageUrl="/product-zx7-speaker/mobile/image-gallery-3.jpg"
          secondaryImageUrl="/product-zx7-speaker/mobile/image-gallery-2.jpg"
          ternaryImageUrl="/product-zx7-speaker/mobile/image-gallery-1.jpg"
        />
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
