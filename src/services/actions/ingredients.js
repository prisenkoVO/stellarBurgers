export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export const getIngredients = () => {
    return {
        type: GET_INGREDIENTS
    };
};

export const getIngredientsFailed = () => {
    return {
        type: GET_INGREDIENTS_FAILED
    };
};

export const getIngredientsSuccess = (items) => {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        items
    };
};