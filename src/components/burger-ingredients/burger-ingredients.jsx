import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import { IngredientGroup } from './ingredient-group/ingredient-group';
import PropTypes from 'prop-types';
import { ingredientProp } from '../../utils/prop-types/ingredient-prop-type';
import { BUN, MAIN, SAUCE } from '../../utils/constants/ingredient-types';


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

function BurgerIngredients({ ingredients }) {


  const [ current, setCurrent ] = React.useState(BUN);
  const itemsList = [BUN, SAUCE, MAIN];

  return (
    <>
      <div className={`${BurgerIngredientsStyles.groups} mt-5`}>
        {itemsList.map((value, index) =>
          <Tab key={index} value={value} active={current === value} onClick={setCurrent}>
            {value}
          </Tab>
        )}
      </div>
      <div className={`${BurgerIngredientsStyles.ingredients} mt-10`}>
        {itemsList.map((item, index) => {
          const listByGroup = getListByGroup(item, ingredients);
          return <IngredientGroup key={index} title={item} ingredients={listByGroup} />;
        })}
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientProp).isRequired
}

export default BurgerIngredients;