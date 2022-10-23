import BurgerConstructorStyles from './burger-constructor.module.scss';
import update from 'immutability-helper';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useMemo, useState } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { useDrop } from 'react-dnd';
import { deleteFromConstructor, updateBurgerIngredients } from '../../services/actions/burger';
import { useDispatch, useSelector } from 'react-redux';
import DraggableIngredient from './draggable-ingredient/draggable-ingredient';
import { sendOrder } from '../../services/actions/order';
import { v4 as uuid} from 'uuid';
import { addBun, addIngredient } from '../../services/actions/burger';
import { TypesOfIngridient } from '../../utils/models/ingredient-types.enum';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const { bun, mainList } = useSelector(store => store.burger);

  const handleDrop = useCallback((item) => {
    const guid = uuid();
    if (item.type === TypesOfIngridient.BUN) {
      dispatch(addBun({...item, guid}));
    } else {
      dispatch(addIngredient({...item, guid}));
    }
  }, [dispatch]);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      handleDrop(item);
    }
  });

  const submit = () => {
    const idList = [bun, ...mainList, bun].map(item => item._id);
    dispatch(sendOrder(idList, setModalOpen));
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  const handleDeleteItem = (guid) => {
    dispatch(deleteFromConstructor(guid));
  }

  const modal = (
    <Modal onClose={handleCloseModal}>
      <OrderDetails />
    </Modal>
  );

  const totalPrice = useMemo(() => {
    if (bun && mainList) {
      const priceList = [bun, bun, ...mainList].map(ingredient => ingredient.price);
      return priceList.reduce((total, amount) => total + amount);
    }
  }, [bun, mainList])

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
        {bun &&
          <span className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun?.name}
              price={bun?.price}
              thumbnail={bun?.image}
            />
          </span>
        }
        <div className={`${BurgerConstructorStyles.scrollblock} mt-4 mb-4`}>
          {mainList.map((value, index) =>
            <li key={value.guid} className={BurgerConstructorStyles.dragItem}>
              <DraggableIngredient ingredient={value} index={index} deleteItem={handleDeleteItem} moveCard={moveCard} />
            </li>
          )}
        </div>
        {bun &&
          <span className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun?.name}
              price={bun?.price}
              thumbnail={bun?.image}
            />
          </span>
        }
      </div>
      <div className={`${BurgerConstructorStyles.summary} mt-10 mr-10`}>
        {
          totalPrice &&
            <>
              <span className="text text_type_digits-medium mr-10">
                {totalPrice}
                <CurrencyIcon type="primary" />
              </span>
              <Button type="primary" size="large" onClick={submit} disabled={!mainList.length}>
                Оформить заказ
              </Button>
            </>
        }
      </div>
      {isModalOpen && modal}
    </>
  );
}

export default BurgerConstructor;