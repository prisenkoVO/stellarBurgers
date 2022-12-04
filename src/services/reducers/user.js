import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILED,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED
} from "../actions/user";

const initialState = {
    name: '',
    email: '',

    checkAuth: false,
    registrationFailed: false,
    loginFailed: false,
    logoutFailed: false,
    getUserFailed: false,
    editUserFailed: false,
    getTokenFailed: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                ...state,
                registrationFailed: false
            };

        case REGISTRATION_SUCCESS:
            return { ...action.user };

        case REGISTRATION_FAILED:
            return {
                ...state,
                registrationFailed: true
            };

        case LOGIN_REQUEST:
            return {
                ...state,
                loginFailed: false
            };

        case LOGIN_SUCCESS:
            return { ...action.user };

        case LOGIN_FAILED:
            return {
                ...state,
                loginFailed: true
            };

        case LOGOUT_REQUEST:
            return {
                ...state,
                logoutFailed: false
            };

        case LOGOUT_SUCCESS:
            return { ...initialState };

        case LOGOUT_FAILED:
            return {
                ...state,
                logoutFailed: true
            };

        case GET_USER_REQUEST:
            return {
                ...state,
                getUserFailed: false
            };

        case GET_USER_SUCCESS:
            return {
                ...action.user,
                checkAuth: true
            };

        case GET_USER_FAILED:
            return {
                ...state,
                getUserFailed: true,
                checkAuth: true
            };

        case EDIT_USER_REQUEST:
            return {
                ...state,
                editUserFailed: false
            };

        case EDIT_USER_SUCCESS:
            return { ...action.user };

        case EDIT_USER_FAILED:
            return {
                ...state,
                editUserFailed: true
            };

        case GET_TOKEN_REQUEST:
            return {
                ...state,
                getTokenFailed: false
            };

        case GET_TOKEN_SUCCESS:
            return { ...state };

        case GET_TOKEN_FAILED:
            return {
                ...state,
                getTokenFailed: true
            };

        default:
            return state;
    }
}