import { ADD_BUN, ADD_INGREDIENT, DELETE_FROM_CONSTRUCTOR, UPDATE_BURGER_INGREDIENTS } from "../actions/burger";

const initialState = {
    bun: null,
    mainList: [],
    error: ''
};

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                mainList: [
                    ...state.mainList,
                    ...[action.ingredient]
                ]
            };
        case ADD_BUN:
            return {
                ...state,
                bun: {...action.bun}
            }
        case DELETE_FROM_CONSTRUCTOR:
            return {
                ...state,
                mainList: [...state.mainList.filter(item => item.guid !== action.guid)]
            };
        case UPDATE_BURGER_INGREDIENTS:
            return {
                ...state,
                mainList: action.ingredients
            };
        default:
            return state;
    }
};