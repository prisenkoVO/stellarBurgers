import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../../modal/modal';
import React, { useCallback } from 'react';
import IngredientCardStyles from './ingredient-card.module.scss';
import { IngredientDetails } from '../../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { addIngredientToPreview, deleteIngredientFromPreview } from '../../../services/actions/current-ingredient';

export const IngredientCard = (props) => {
  const [ isModalOpen, setModalOpen ] = React.useState(false);
  const dispatch = useDispatch();

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

  const handleOpenModal = useCallback(() => {
    dispatch(addIngredientToPreview({...props}));
    setModalOpen(true);
  }, [dispatch, props]);

  const handleCloseModal = useCallback(() => {
    dispatch(deleteIngredientFromPreview());
    setModalOpen(false);
  }, [dispatch]);
  
  const modal = (
    <Modal header="Детали ингредиента" onClose={handleCloseModal}> 
      <IngredientDetails />
    </Modal>
  );

  return (
    <>
      <div className={IngredientCardStyles.card} onClick={handleOpenModal} ref={dragRef}>
        <img src={props.image} alt={props.name} className="ml-4 mr-4"/>
        <div className={`${IngredientCardStyles.priceBlock} mt-1 mb-1`}>
          <span className="text text_type_digits-default mr-2">{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <span className="text text_type_main-default">{props.name}</span>
        {
          ingredients.filter(item => item?._id === props?._id).length ? 
          <Counter count={ingredients.filter(item => item?._id === props?._id).length} size="default" /> : undefined
        }
      </div>
      {isModalOpen && modal}
    </>
)};

IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
