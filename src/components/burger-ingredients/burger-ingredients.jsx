import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import { IngredientGroup } from './ingredient-group/ingredient-group';
import { BUN, MAIN, SAUCE } from '../../utils/constants/ingredient-types';
import { useSelector } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { TypesOfIngridient } from '../../utils/models/ingredient-types.enum';


function BurgerIngredients() {

  const ingredients = useSelector(store => store.ingredients.items);

  const groupName = [BUN, SAUCE, MAIN];
  const [current, setCurrent] = React.useState(groupName[0]);

  const [bunRef, inViewBun] = useInView({
    threshold: .5
  });
  const [sauceRef, inViewSauce] = useInView({
    threshold: .5
  });
  const [mainRef, inViewMain] = useInView({
    threshold: 0.4
  });

  const refs = [bunRef, sauceRef, mainRef];


  React.useEffect(() => {
    if (inViewBun) { setCurrent(BUN) }
    else if (inViewSauce) { setCurrent(SAUCE) }
    else if (inViewMain) { setCurrent(MAIN) }
  }, [inViewBun, inViewSauce, inViewMain]);

  function getListByGroup(groupName, ingredients) {
    switch (groupName) {
      case BUN:
        return ingredients.filter(({ type }) => type === TypesOfIngridient.BUN);
      case SAUCE:
        return ingredients.filter(({ type }) => type === TypesOfIngridient.SAUCE);
      case MAIN:
        return ingredients.filter(({ type }) => type === TypesOfIngridient.MAIN);
      default:
        return ingredients;
    }
  }

  const ingredientsGroup = (name, index) => {
    const list = getListByGroup(name, ingredients);
    return <IngredientGroup key={index} title={name} ingredients={list} ref={refs[index]} />;
  };

  return (
    <>
      <div className={`${BurgerIngredientsStyles.groups} mt-5`}>
        {groupName.map((value, index) =>
          <Tab key={index} value={value} active={current === value} onClick={() => setCurrent(groupName[index])}>
            {value}
          </Tab>
        )}
      </div>
      <div className={`${BurgerIngredientsStyles.ingredients} mt-10`} >
        {groupName.map((name, index) => ingredientsGroup(name, index))}
      </div>
    </>
  );
}

export default BurgerIngredients;