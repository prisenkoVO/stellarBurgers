import React from 'react';
import AppStyles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <BurgerConstructor />
          </div>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
