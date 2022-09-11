import './ingredient-group.scss';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';
import { ingredientProp } from '../../../utils/prop-types/ingredient-prop-type';

export const IngredientGroup = (props) => (
  <>
    <p className="text text_type_main-medium mb-6" id={props.title}>{props.title}</p>
    <div className="ingredient-group mb-10 pb-4 pt-4 pr-4 pl-4">
      {props.ingredients.map(value =>
        <IngredientCard key={value._id} {...value} />
      )}
    </div>
  </>
);

IngredientGroup.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientProp).isRequired
}
