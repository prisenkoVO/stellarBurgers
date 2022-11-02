
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import styles from './home.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.container__column}>
        <span className="text text_type_main-large mt-10">
          Соберите бургер
        </span>
        <BurgerIngredients />
      </div>
      <div className={styles.container__column}>
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default HomePage;