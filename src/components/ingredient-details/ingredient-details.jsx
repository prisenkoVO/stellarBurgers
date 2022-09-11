import './ingredient-details.scss';
import PropTypes from 'prop-types';

export const IngredientDetails = (props) => {
  const {
    image_large,
    name,
    calories,
    proteins,
    fat,
    carbohydrates
  } = props;
  return (
    <div className="ingredient-details">
      <img src={image_large} alt={name} />
      <span className="text text_type_main-medium mt-4">{name}</span>
      <div className="ingredient-details__features mt-8 text">
        <span className="ingredient-details__feature">
          <span className="text_type_main-default">Калории,ккал</span>
          <span className="text_type_digits-default mt-2">{calories}</span>
        </span>
        <span className="ingredient-details__feature">
          <span className="text_type_main-default">Белки, г</span>
          <span className="text_type_digits-default mt-2">{proteins}</span>
        </span>
        <span className="ingredient-details__feature">
          <span className="text_type_main-default">Жиры, г</span>
          <span className="text_type_digits-default mt-2">{fat}</span>
        </span>
        <span className="ingredient-details__feature">
          <span className="text_type_main-default">Углеводы, г</span>
          <span className="text_type_digits-default mt-2">{carbohydrates}</span>
        </span>
      </div>
    </div>
  )
};

IngredientDetails.propTypes = {
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired
};
