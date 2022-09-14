import BurgerConstructorStyles from './burger-constructor.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import PropTypes from 'prop-types';
import { ingredientProp } from '../../utils/prop-types/ingredient-prop-type';

function BurgerConstructor({ bun, mainList }) {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const modal = (
    <Modal onClose={handleCloseModal}>
      <OrderDetails orderId={132456} />
    </Modal>
  );

  React.useEffect(() => {
    if (bun && mainList) {
      const priceList = [bun, ...mainList].map(ingredient => ingredient.price);
      const sum = priceList.reduce(( total, amount ) => total + amount);
      setTotalPrice(sum);
    }
  }, [bun, mainList]);

  return (
    <>
      <div className={`${BurgerConstructorStyles.container} mt-25`}>
        <span className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun?.name}
            price={bun?.price}
            thumbnail={bun?.image}
          />
        </span>
        <div className={`${BurgerConstructorStyles.scrollblock} mt-4 mb-4`}>
          {mainList.map(value =>
            <li key={value._id} className={BurgerConstructorStyles.dragItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={value.name}
                price={value.price}
                thumbnail={value.image}
              />
            </li>
          )}
        </div>
        <span className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun?.name}
            price={bun?.price}
            thumbnail={bun?.image}
          />
        </span>
      </div>
      <div className={`${BurgerConstructorStyles.summary} mt-10 mr-10`}>
        <span className="text text_type_digits-medium mr-10">
          {totalPrice}
          <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && modal}
    </>
  );
}

BurgerConstructor.propTypes = {
  bun: ingredientProp,
  mainList: PropTypes.arrayOf(ingredientProp)
}

export default BurgerConstructor;