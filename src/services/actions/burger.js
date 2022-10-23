export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const UPDATE_BURGER_INGREDIENTS = 'UPDATE_BURGER_INGREDIENTS';
export const DELETE_FROM_CONSTRUCTOR = 'DELETE_FROM_CONSTRUCTOR';

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        ingredient
    };
};

export const addBun = (bun) => {
    return {
        type: ADD_BUN,
        bun
    };
};

export const deleteFromConstructor = (guid) => {
    return {
        type: DELETE_FROM_CONSTRUCTOR,
        guid
    };
};

export const updateBurgerIngredients = (ingredients) => {
    return {
        type: UPDATE_BURGER_INGREDIENTS,
        ingredients
    };
};
