import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCardStyles from './ingredient-card.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export const IngredientCard = (props) => {
  const location = useLocation();
  const { _id: id } = props;

  const ingredients = useSelector(store => {
    const { burger } = store;
    return burger.bun || burger.mainList 
      ? [burger.bun, ...burger.mainList]
      : [];
  });

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: props
  });

  return (
    <>
      <Link
        to={{
          pathname: `/ingredients/${id}`,
          state: { background: location }
        }}
        className={IngredientCardStyles.card}
        ref={dragRef}>
        <img src={props.image} alt={props.name} className="ml-4 mr-4"/>
        <div className={`${IngredientCardStyles.priceBlock} mt-1 mb-1`}>
          <span className="text text_type_digits-default mr-2">{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <span className="text text_type_main-default">{props.name}</span>
        {
          ingredients.filter(item => item?._id === props?._id).length &&
          <Counter count={ingredients.filter(item => item?._id === props?._id).length} size="default" />
        }
      </Link>
    </>
)};

IngredientCard.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
