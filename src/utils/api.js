const api = 'https://norma.nomoreparties.space/api';

export function loadIngredients() {
    return fetch(`${api}/ingredients`)
        .then(res => checkResult(res))
        .then(res => res.data)
}

export function createOrder(ingredients) {
    return fetch(`${api}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ingredients})
    })
        .then(data => checkResult(data));
}

export const checkResult = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}