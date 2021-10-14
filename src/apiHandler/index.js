
const apiUrl = "https://truetraders24.com/api/"
export const get = (url) => {
    return fetch(apiUrl + url).then(response => response.json())
}

export const post = (url, params, authToken = 'a') => {
    return fetch(apiUrl + url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-type': 'application/json; charset=UTF-8'}})
        .then(response => response.json())
}