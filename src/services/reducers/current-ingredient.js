import { ADD_INGREDIENT_TO_PREVIEW, DELETE_INGREDIENT_FROM_PREVIEW } from "../actions/current-ingredient";

export const currentIngredientReducer = (state = null, action) => {
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