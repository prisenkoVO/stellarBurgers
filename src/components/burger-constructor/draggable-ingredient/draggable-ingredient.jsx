import DraggableIngredientStyles from './draggable-ingredient.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

const ADDED_INGREDIENT = 'addedIngredient';

function DraggableIngredient({ index, ingredient, deleteItem, moveCard }) {
  const { guid } = ingredient;
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: ADDED_INGREDIENT,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBox = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBox.bottom - hoverBox.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBox.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ADDED_INGREDIENT,
    item: () => {
      return { guid, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className={DraggableIngredientStyles.dragItem} data-handler-id={handlerId} style={{ opacity }}>
      <span className={DraggableIngredientStyles.dragIcon}>
        <DragIcon type="primary" />
      </span>
      <ConstructorElement
        isLocked={false}
        text={ingredient.name}
        price={ingredient.price}
        handleClose={() => deleteItem(ingredient.guid)}
        thumbnail={ingredient.image}
      />
    </div>
  );
}

export default DraggableIngredient;