import React, { useCallback } from 'react';
import AppStyles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useDispatch } from 'react-redux';
import { getIngredients, getIngredientsFailed, getIngredientsSuccess } from '../../services/actions/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuid} from 'uuid';
import { addBun, addIngredient } from '../../services/actions/burger';

function App() {
  const dispatch = useDispatch();

  const URL = 'https://norma.nomoreparties.space/api/ingredients';
  
  React.useEffect(() => {
    dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchIngredients = () => {
    return (dispatch) => {
      dispatch(getIngredients());

      fetch(URL)
        .then(
          res => res.ok
            ? res.json()
            : dispatch(getIngredientsFailed())
        )
        .then(
          res => res.success
            ? dispatch(getIngredientsSuccess(res.data))
            : dispatch(getIngredientsFailed())
        )
        .catch(error => dispatch(getIngredientsFailed()));
    }
  };

  const handleDrop = useCallback((item) => {
    const guid = uuid();
    if (item.type === 'bun') {
      dispatch(addBun({...item, guid}));
    } else {
      dispatch(addIngredient({...item, guid}));
    }
  }, []);

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <div className={AppStyles.container}>
          <div className={AppStyles.container__column}>
            <span className="text text_type_main-large mt-10">
              Соберите бургер
            </span>
            <BurgerIngredients />
          </div>
          <div className={AppStyles.container__column}>
            <BurgerConstructor onDropHandler={handleDrop} />
          </div>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
