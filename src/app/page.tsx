import Button, { ButtonTypes } from './components/Button';
import pageStyles from './page.module.css';

export default function Home() {
  return (
    <div>
      Home
      <Button text="test" type={ButtonTypes.default} onClick={() => {}} />
      <Button text="test" type={ButtonTypes.outline} onClick={() => {}} />
      <Button text="test" type={ButtonTypes.transparent} onClick={() => {}} />
    </div>
  );
}
