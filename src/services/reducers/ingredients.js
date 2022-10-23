import { GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS } from "../actions/ingredients";
const initialState = {
    items: [],
    request: null,
    failed: null
};

export const ingredientsReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                request: true,
                failed: false
            };
        case GET_INGREDIENTS_FAILED:
            return {
                ...state,
                request: false,
                failed: true
            };
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                request: false,
                failed: false,
                items: action.items
            };
        default:
            return state;
    }
};