import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS } from "../actions/ingredients";
const initialState = {
    items: [],
    request: false,
    failed: false
};

export const ingredientsReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...initialState,
                request: true,
                failed: false
            };
        case GET_INGREDIENTS_FAILED:
            return {
                ...initialState,
                request: false,
                failed: true
            };
        case GET_INGREDIENTS_SUCCESS:
            return {
                items: action.items,
                request: false,
                failed: false
            };
        default:
            return state;
    }
};