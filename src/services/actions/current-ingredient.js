export const ADD_INGREDIENT_TO_PREVIEW = 'ADD_INGREDIENT_TO_PREVIEW';
export const DELETE_INGREDIENT_FROM_PREVIEW = 'DELETE_INGREDIENT_FROM_PREVIEW';

export const addIngredientToPreview = (ingredient) => {
    return {
        type: ADD_INGREDIENT_TO_PREVIEW,
        ingredient
    };
};

export const deleteIngredientFromPreview = () => {
    return {
        type: DELETE_INGREDIENT_FROM_PREVIEW,
        ingredient: null
    };
};