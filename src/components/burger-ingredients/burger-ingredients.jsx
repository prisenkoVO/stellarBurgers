import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import { IngredientGroup } from './ingredient-group/ingredient-group';
import PropTypes from 'prop-types';
import { ingredientProp } from '../../utils/prop-types/ingredient-prop-type';


function getListByGroup(groupName, ingredients) {
  switch (groupName) {
    case 'Булки':
      return ingredients.filter(({ type }) => type === 'bun');
    case 'Соусы':
      return ingredients.filter(({ type }) => type === 'sauce');
    case 'Начинки':
      return ingredients.filter(({ type }) => type === 'main');
    default:
      return ingredients;
  }
}

function BurgerIngredients({ ingredients }) {


  const [ current, setCurrent ] = React.useState('Булки');
  const itemsList = ['Булки', 'Соусы', 'Начинки'];

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
  ingredients: PropTypes.arrayOf(ingredientProp)
}

export default BurgerIngredients;