import { ADD_INGREDIENT_TO_PREVIEW, DELETE_INGREDIENT_FROM_PREVIEW } from '../actions/current-ingredient';

export const initialState = {
    _id: '',
    name: '',
    type: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: '',
    image_mobile: '',
    image_large: '',
    __v: 0
};

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_TO_PREVIEW:
            return {
                ...action?.ingredient
            };
        case DELETE_INGREDIENT_FROM_PREVIEW:
            return null;
        default:
            return state;
    }
};