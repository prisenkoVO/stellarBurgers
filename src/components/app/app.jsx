import React from 'react';
import AppStyles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {

  const [ingredients, setIngredients] = React.useState([]);

  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  React.useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    await fetch(URL)
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка ${response.status}`))
      .then( response => {
        if (response.success) {
          return response.data;
        } else {
          Promise.reject('Произошла ошибка на сервере. Попробуйте позже.');
        }
      })
      .then( data => setIngredients(data))
      .catch(error => console.error(error));
  };

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <div className={AppStyles.container}>
        <div className={AppStyles.container__column}>
          <span className="text text_type_main-large mt-10">
            Соберите бургер
          </span>
          <BurgerIngredients ingredients={ingredients} />
        </div>
        <div className={AppStyles.container__column}>
          <BurgerConstructor bun={ingredients[0]} mainList={ingredients.slice(2, 8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
