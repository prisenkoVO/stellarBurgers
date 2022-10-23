import { combineReducers } from 'redux';
import { burgerReducer } from './burger';
import { currentIngredientReducer } from './current-ingredient';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: burgerReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer
});
