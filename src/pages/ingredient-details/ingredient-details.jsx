// eslint-disable-next-line
import { IngredientDetails } from '../../components/ingredient-details/ingredient-details';
import styles from './ingredient-details.module.scss';

function IngredientDetailsPage() {
  return (
    <div className={styles.container}>
      <span className='text text_type_main-large'>Детали ингредиента</span>
      <IngredientDetails/>
    </div>
  );
}

export default IngredientDetailsPage;