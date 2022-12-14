import IngredientGroupStyles from './ingredient-group.module.scss';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';
import { ingredientProp } from '../../../utils/prop-types/ingredient-prop-type';
import React from 'react';

export const IngredientGroup = React.forwardRef(({title, ingredients}, ref) => {
  return(
  <>
    <p className="text text_type_main-medium mb-6" id={title}>{title}</p>
    <div className={`${IngredientGroupStyles.container} mb-10 pb-4 pt-4 pr-4 pl-4`} ref={ref}>
      {ingredients.map(value =>
        <IngredientCard key={value._id} {...value}/>
      )}
    </div>
  </>
)});

IngredientGroup.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientProp).isRequired
}
