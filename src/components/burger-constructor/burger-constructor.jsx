import BurgerConstructorStyles from './burger-constructor.module.scss';
import update from 'immutability-helper';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useState } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { useDrop } from 'react-dnd';
import { deleteFromConstructor, updateBurgerIngredients } from '../../services/actions/burger';
import { useDispatch, useSelector } from 'react-redux';
import DraggableIngredient from './draggable-ingredient/draggable-ingredient';

function BurgerConstructor({ onDropHandler }) {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const { bun, mainList } = useSelector(store => store.burger);


  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      onDropHandler(item);
    }
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  const handleDeleteItem = (guid) => {
    dispatch(deleteFromConstructor(guid));
  }

  const modal = (
    <Modal onClose={handleCloseModal}>
      <OrderDetails orderId={132456} />
    </Modal>
  );

  React.useEffect(() => {
    if (bun && mainList) {
      const priceList = [bun, bun, ...mainList].map(ingredient => ingredient.price);
      const sum = priceList.reduce((total, amount) => total + amount);
      setTotalPrice(sum);
    }
  }, [bun, mainList]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const updatedOrderList = update(mainList, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, mainList[dragIndex]],
      ],
    })
    dispatch(updateBurgerIngredients(updatedOrderList));
  }, [mainList, dispatch])

  return (
    <>
      <div className={`${BurgerConstructorStyles.container} mt-25`} ref={dropTarget}>
        {bun ?
          <span className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun?.name}
              price={bun?.price}
              thumbnail={bun?.image}
            />
          </span> : undefined
        }
        <div className={`${BurgerConstructorStyles.scrollblock} mt-4 mb-4`}>
          {mainList.map((value, index) =>
            <li key={value.guid} className={BurgerConstructorStyles.dragItem}>
              <DraggableIngredient ingredient={value} index={index} deleteItem={handleDeleteItem} moveCard={moveCard} />
            </li>
          )}
        </div>
        {bun ?
          <span className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun?.name}
              price={bun?.price}
              thumbnail={bun?.image}
            />
          </span> : undefined
        }
      </div>
      <div className={`${BurgerConstructorStyles.summary} mt-10 mr-10`}>
        {
          totalPrice ?
            <>
              <span className="text text_type_digits-medium mr-10">
                {totalPrice}
                <CurrencyIcon type="primary" />
              </span>
              <Button type="primary" size="large" onClick={handleOpenModal}>
                Оформить заказ
              </Button>
            </> : undefined
        }
      </div>
      {isModalOpen && modal}
    </>
  );
}

// BurgerConstructor.propTypes = {
//   bun: ingredientProp,
//   mainList: PropTypes.arrayOf(ingredientProp)
// }

export default BurgerConstructor;