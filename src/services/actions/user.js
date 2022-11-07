import { registerUser } from "../../utils/api";
import { setCookie } from "../../utils/functions/cookie-crud.function";

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED';

export const registrationRequest = () => ({
    type: REGISTRATION_REQUEST
});

export const registrationSuccess = (user) => ({
    type: REGISTRATION_SUCCESS,
    user
});

export const registrationFailed = () => ({
    type: REGISTRATION_FAILED
});

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user
});

export const loginFailed = () => ({
    type: LOGIN_FAILED
});

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutFailed = () => ({
    type: LOGOUT_FAILED
});

export const getUserRequest = () => ({
    type: GET_USER_REQUEST
});

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    user
});

export const getUserFailed = () => ({
    type: GET_USER_FAILED
});

export function registration(form) {
    return (dispatch) => {
        dispatch(registrationRequest());

        registerUser(form)
            .then(res => {
                if (res) {
                    const { accessToken, refreshToken } = res;
                    setCookie('accessToken', accessToken.split('Bearer ')[1]);
                    localStorage.setItem('refreshToken', refreshToken);
                    dispatch(registrationSuccess(res.user));
                } else {
                    dispatch(registrationFailed());
                }
            })
            .catch(() => dispatch(registrationFailed()));
    }
}