import React from 'react';
import './app.scss';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {

  const [ingredients, setIngredients] = React.useState([]);

  const url = 'https://norma.nomoreparties.space/api/ingredients';
  
  React.useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then(({data}) => setIngredients(data));
  };

  return (
    <div className="app">
        <AppHeader/>
        <div className="container">
          <div className="ingredients__container">
            <span className="text text_type_main-large mt-10">
              Соберите бургер
            </span>
            <BurgerIngredients ingredients={ingredients}/>
          </div>
          <div className="ingredients__container">
            <BurgerConstructor bun={ingredients[0]} mainList={ingredients.slice(2,8)}/>
          </div>
        </div>
    </div>
  );
}

export default App;
