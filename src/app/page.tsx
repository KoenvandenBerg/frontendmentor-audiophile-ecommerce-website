import DescriptionSection from './components/DescriptionSection';
import pageStyles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={pageStyles.temporary}>Home</div>
      <DescriptionSection />
    </>
  );
}
