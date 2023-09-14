const baseUrl = 'http://localhost:3000';

const errorsCode = {
  register: {
    400: 'Некорректно заполнено одно из полей'
  },
  login: {
    400: 'Не передано одно из полей',
    401: 'Пользователь с email не найден'
  },
  tokenCheck: {
    400: 'Токен не передан или передан не в том формате',
    401: 'Переданный токен некорректен'
  },
  updateUser: {
    400: 'Некорректно заполнено одно из полей'
  },
}

function getResponseData(res, type) {
  if (!res.ok) {
      return Promise.reject(errorsCode[type][res.status]);
  }
  return res.json();
}

export const register = (name, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, password})
  }).then(res => getResponseData(res, 'register'))
}

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  }).then(res => getResponseData(res, 'login'))
}

export const logout = () => {
  return fetch(`${baseUrl}/signout`, {
    method: 'POST',
    credentials: 'include',
  }).then(res => getResponseData(res, 'login'))
}

export const tokenCheck = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(res => getResponseData(res, 'tokenCheck'))
}

export const updateUser = (name, email) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email})
  }).then(res => getResponseData(res, 'updateUser'))
}
