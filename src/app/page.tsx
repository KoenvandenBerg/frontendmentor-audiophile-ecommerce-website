import { Metadata } from 'next';
import CategoryButtons from './components/CategoryButtons';
import DescriptionSection from './components/DescriptionSection';
import HeroSection from './components/HeroSection';
import PageContainer, { PageContainerTypes } from './components/PageContainer';
import ProductGrid from './components/ProductGrid';

export const metadata: Metadata = {
  title: 'Home | Audiophile',
  description: 'Audiophile is an all in one stop to fulfill your audio needs.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageContainer type={PageContainerTypes.home}>
        <CategoryButtons />
        <ProductGrid />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
