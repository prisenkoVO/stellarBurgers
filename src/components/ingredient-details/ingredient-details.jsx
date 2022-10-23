import IngredientDetailsStyles from './ingredient-details.module.scss';
import { useSelector } from 'react-redux';

export const IngredientDetails = () => {
  const {
    image_large,
    name,
    calories,
    proteins,
    fat,
    carbohydrates
  } = useSelector(store => ({
    ...store.currentIngredient
  }));

  const featuresNameList = ['Калории,ккал', 'Белки, г', 'Жиры, г', 'Углеводы, г'];
  const featuresList = [calories, proteins, fat, carbohydrates];
  return (
    <div className={IngredientDetailsStyles.container}>
      <img src={image_large} alt={name} />
      <span className="text text_type_main-medium mt-4">{name}</span>
      <div className={`${IngredientDetailsStyles.features} mt-8 text`}>
        {featuresNameList.map((value, index) => <span key={index} className={IngredientDetailsStyles.feature}>
          <span className="text_type_main-default">{value}</span>
          <span className="text_type_digits-default mt-2">{featuresList[index]}</span>
        </span>)}
      </div>
    </div>
  )
};

