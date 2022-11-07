const api = 'https://norma.nomoreparties.space/api';

// Загрузка списка ингредиентов
export function loadIngredients() {
    return fetch(`${api}/ingredients`)
        .then(res => checkResult(res))
        .then(res => res.data)
}

// Получение номера заказа
export function createOrder(ingredients) {
    return fetch(`${api}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients })
    })
        .then(data => checkResult(data));
}

// Запрос на отправку кода для смены пароля
export function forgotPassword(email) {
    return fetch(`${api}/password-reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
        .then(data => data.json());
}

// Смена пароля
export function resetPassword(form) {
    return fetch(`${api}/password-reset/reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
        .then(res => checkResult(res));
}

// Регистрация пользователя
export function registerUser(form) {
    return fetch(`${api}/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
        .then(res => checkResult(res));
}

// Авторизация пользователя
export function logIn(form) {
    return fetch(`${api}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
        .then(res => checkResult(res));
}

// Проверка результата и обработка запроса
export const checkResult = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}