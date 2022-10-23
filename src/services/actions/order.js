import { createOrder } from "../../utils/api";

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';


export const sendOrderRequest = () => ({
    type: SEND_ORDER_REQUEST
});

export const sendOrderFailed = () => ({
    type: SEND_ORDER_FAILED
});

export const sendOrderSuccess = (order) => ({
    type: SEND_ORDER_SUCCESS,
    order
});

export function sendOrder(ingredients, setOpenModal) {
    return (dispatch) => {
        dispatch(sendOrderRequest());

        createOrder(ingredients)
            .then(res => {
                if (res) {
                    dispatch(sendOrderSuccess(res));
                } else {
                    dispatch(sendOrderFailed());
                }
            })
            .then(() => setOpenModal(true))
            .catch(() => dispatch(sendOrderFailed()));
    };
}