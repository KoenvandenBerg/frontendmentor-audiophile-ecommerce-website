import { categoryButtonSizes } from './components/CategoryButton';
import CategoryButtons from './components/CategoryButtons';
import DescriptionSection from './components/DescriptionSection';
import HeroSection from './components/HeroSection';
import pageStyles from './page.module.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className={pageStyles.categoryButtonsContainer}>
        <CategoryButtons size={categoryButtonSizes.small} />
      </section>

      <DescriptionSection />
    </>
  );
}
