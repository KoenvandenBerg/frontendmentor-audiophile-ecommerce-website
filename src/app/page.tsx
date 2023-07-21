import CategoryButtons from './components/CategoryButtons';
import DescriptionSection from './components/DescriptionSection';
import HeroSection from './components/HeroSection';
import PageContainer from './components/PageContainer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageContainer>
        <CategoryButtons />
        <DescriptionSection />
      </PageContainer>
    </>
  );
}
