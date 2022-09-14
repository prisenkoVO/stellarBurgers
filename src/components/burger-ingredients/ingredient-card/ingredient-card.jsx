import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../../modal/modal';
import React, { useCallback } from 'react';
import IngredientCardStyles from './ingredient-card.module.scss';
import { IngredientDetails } from '../../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';

export const IngredientCard = (props) => {
  const [ isModalOpen, setModalOpen ] = React.useState(false);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, [])
  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, [])
  
  const modal = (
    <Modal header="Детали ингредиента" onClose={handleCloseModal}> 
      <IngredientDetails {...props}/>
    </Modal>
  );

  return (
    <>
      <div className={IngredientCardStyles.card} onClick={handleOpenModal}>
        <img src={props.image} alt={props.name} className="ml-4 mr-4"/>
        <div className={`${IngredientCardStyles.priceBlock} mt-1 mb-1`}>
          <span className="text text_type_digits-default mr-2">{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <span className="text text_type_main-default">{props.name}</span>
        <Counter count={1} size="default" />
      </div>
      {isModalOpen && modal}
    </>
)};

IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
