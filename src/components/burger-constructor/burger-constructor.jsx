import './burger-constructor.scss';
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
      let total = 0;
      [bun, ...mainList].forEach(value => total += value.price);
      setTotalPrice(total);
    }
  }, [bun, mainList]);

  return (
    <>
      <div className="burger-constructor mt-25">
        <span className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun?.name}
            price={bun?.price}
            thumbnail={bun?.image}
            style={{ flexGrow: '1', marginLeft: '32px' }}
          />
        </span>
        <div className="burger-constructor__scrollable-block mt-4 mb-4">
          {mainList.map(value =>
            <li key={value._id} className="burger-constructor__drag-item">
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
            style={{ flexGrow: '1' }}
          />
        </span>
      </div>
      <div className="burger-constructor__summary mt-10 mr-10">
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