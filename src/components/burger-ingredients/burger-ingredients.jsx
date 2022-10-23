import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import { IngredientGroup } from './ingredient-group/ingredient-group';
import { BUN, MAIN, SAUCE } from '../../utils/constants/ingredient-types';
import { useSelector } from 'react-redux';
import { useInView } from "react-intersection-observer";


function getListByGroup(groupName, ingredients) {
  switch (groupName) {
    case BUN:
      return ingredients.filter(({ type }) => type === 'bun');
    case SAUCE:
      return ingredients.filter(({ type }) => type === 'sauce');
    case MAIN:
      return ingredients.filter(({ type }) => type === 'main');
    default:
      return ingredients;
  }
}

function BurgerIngredients() {

  const ingredients = useSelector(store => store.ingredients.items);

  const itemsList = [BUN, SAUCE, MAIN];
  const [current, setCurrent] = React.useState(itemsList[0]);

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

  return (
    <>
      <div className={`${BurgerIngredientsStyles.groups} mt-5`}>
        {itemsList.map((value, index) =>
          <Tab key={index} value={value} active={current === value} onClick={() => setCurrent(itemsList[index])}>
            {value}
          </Tab>
        )}
      </div>
      <div className={`${BurgerIngredientsStyles.ingredients} mt-10`} >
        {itemsList.map((item, index) => {
          const listByGroup = getListByGroup(item, ingredients);
          return <IngredientGroup key={index} title={item} ingredients={listByGroup} ref={refs[index]} />;
        })}
      </div>
    </>
  );
}

export default BurgerIngredients;