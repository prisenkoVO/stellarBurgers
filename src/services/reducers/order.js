import { SEND_ORDER_FAILED, SEND_ORDER_REQUEST, SEND_ORDER_SUCCESS } from "../actions/order";

const initialState = {
    order: null,
    name: null,
    success: false,
    request: false
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER_REQUEST:
            return {
                ...initialState,
                request: true
            };
        
        case SEND_ORDER_SUCCESS:
            return {
                ...state,
                ...action.order,
                request: false
            };
        case SEND_ORDER_FAILED:
            return {
                ...initialState,
                request: false
            }
        default:
            return state;
    }
};