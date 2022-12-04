import { editProfileApi, getProfileApi, logInApi, logOutApi, registerUser } from "../../utils/api";
import { deleteCookie, getCookie, setCookie } from "../../utils/functions/cookie-crud.function";

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

export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';

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

export const editUserRequest = () => ({
    type: EDIT_USER_REQUEST
});

export const editUserSuccess = (user) => ({
    type: EDIT_USER_SUCCESS,
    user
});

export const editUserFailed = () => ({
    type: EDIT_USER_FAILED
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

export function authorization(form) {
    return (dispatch) => {
        dispatch(loginRequest());

        logInApi(form)
            .then(res => {
                if (res) {
                    const { accessToken, refreshToken } = res;
                    setCookie('accessToken', accessToken.split('Bearer ')[1]);
                    localStorage.setItem('refreshToken', refreshToken);
                    dispatch(loginSuccess(res.user));
                } else {
                    dispatch(loginFailed());
                }
            })
            .catch(() => dispatch(loginFailed()));
    }
}

export function logout(form) {
    return (dispatch) => {
        dispatch(logoutRequest());

        logOutApi(form)
            .then(res => {
                if (res) {
                    deleteCookie('accessToken');
                    localStorage.removeItem('refreshToken');
                    dispatch(logoutSuccess());
                } else {
                    dispatch(logoutFailed());
                }
            })
            .catch(() => dispatch(logoutFailed()));
    }
}

export function getProfile() {
    return (dispatch) => {
        dispatch(getUserRequest());

        if(!getCookie('accessToken')) {
            dispatch(getUserFailed());
            return;
        }

        getProfileApi()
            .then(res => {
                if (res) {
                    dispatch(getUserSuccess(res.user));
                } else {
                    dispatch(getUserFailed());
                }
            })
            .catch(() => dispatch(getUserFailed()));
    }
}

export function editProfile(form) {
    return (dispatch) => {
        dispatch(editUserRequest());

        editProfileApi(form)
            .then(res => {
                if (res) {
                    dispatch(editUserSuccess(res.user));
                } else {
                    dispatch(editUserFailed());
                }
            })
            .catch(() => dispatch(editUserFailed()));
    }
}