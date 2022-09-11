import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import './burger-ingredients.scss';
import { IngredientGroup } from './ingredient-group/ingredient-group';
import PropTypes from 'prop-types';
import { ingredientProp } from '../../utils/prop-types/ingredient-prop-type';

function filterIngridients(data) {
  let bun = [];
  let sauce = [];
  let main = [];
  data.forEach(element => {
    switch (element.type) {
      case 'bun':
        bun.push(element);
        break;
      case 'sauce':
        sauce.push(element);
        break;
      case 'main':
        main.push(element);
        break;
      default:
        return;
    }
  });
  const newData = new Map();
  newData.set('Булка', bun).set('Соусы', sauce).set('Начинки', main);
  return newData;
}

function getIngredientGroups(filteredData) {
  let res = [];
  filteredData.forEach((value, key) =>
    res.push(<IngredientGroup key={key} title={key} ingredients={value} />)
  )
  return res;
}

function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState('Булки');
  const filteredData = filterIngridients(ingredients);
  const itemsList = ['Булки', 'Соусы', 'Начинки'];

  const listOfIngredientGroups = getIngredientGroups(filteredData);

  return (
    <>
      <div style={{ display: 'flex' }} className="mt-5">
        {itemsList.map((value, index) =>
          <Tab key={index} value={value} active={current === value} onClick={setCurrent}>
            {value}
          </Tab>
        )}
      </div>
      <div className="ingredients__scroll-block mt-10">
        {listOfIngredientGroups.map(value => value)}
      </div>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientProp)
}

export default BurgerIngredients;