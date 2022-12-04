import IngredientDetailsStyles from './ingredient-details.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const IngredientDetails = () => {
  const [ingredient, setIngredient] = useState({
    _id: "",
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    image: "",
    image_large: "",
    image_mobile: "",
    name: "",
    price: 0,
    proteins: 0,
    type: "",
    uuid: ''
  });

  const {
    image_large,
    name,
    calories,
    proteins,
    fat,
    carbohydrates
  } = ingredient;


  const { items } = useSelector(({ ingredients }) => ingredients);
  const { id } = useParams();

  useEffect(() => {
    const selected = items.find(item => item._id === id);
    selected && setIngredient(selected);
  }, [id, items]);

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

