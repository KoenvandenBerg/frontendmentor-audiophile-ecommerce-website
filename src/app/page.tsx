import { categoryButtonSizes } from './components/CategoryButton';
import CategoryButtons from './components/CategoryButtons';
import DescriptionSection from './components/DescriptionSection';
import pageStyles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={pageStyles.categoryButtonsContainer}>
        <CategoryButtons size={categoryButtonSizes.small} />
      </section>

      <DescriptionSection />
    </>
  );
}
