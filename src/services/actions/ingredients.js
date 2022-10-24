import { loadIngredients } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export const getIngredientsRequest = () => {
    return {
        type: GET_INGREDIENTS_REQUEST
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

export function getIngredients() {
    return (dispatch) => {
        dispatch(getIngredientsRequest());

        loadIngredients()
            .then(res => {
                if (res) {
                    dispatch(getIngredientsSuccess(res))
                } else {
                    dispatch(getIngredientsFailed())
                }
            })
            .catch(() => {
                dispatch(getIngredientsFailed())
            });
    }
}