const baseUrl = 'http://localhost:3000';

// const errorsCode = {
//   register: {
//     400: 'При регистрации пользователя произошла ошибка.'
//   },
//   login: {
//     // 400: 'Некорректно заполнено одно из полей',
//     // 401: 'Пользователь с email не найден',
//   },
//   tokenCheck: {
//   //   400: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
//   //   401: 'При авторизации произошла ошибка. Переданный токен некорректен.'
//   },
//   updateUser: {
//     400: 'При обновлении профиля произошла ошибка.'
//   },
// }

async function getResponseData(res, type) {
  if (!res.ok) {
    // if (res.status === 400) {
    //   // return Promise.reject(errorsCode[type][res.status]);
    //   return Promise.reject('Некорректно заполнено одно из полей');
    // } else
    if (res.status === 500) {
      return Promise.reject('На сервере произошла ошибка.');
    } else {
      const errorResponse = await res.json();
      return Promise.reject(errorResponse.message);
    }
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
  }).then(res => getResponseData(res))
}

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  }).then(res => getResponseData(res))
}

export const logout = () => {
  return fetch(`${baseUrl}/signout`, {
    method: 'POST',
    credentials: 'include',
  }).then(res => getResponseData(res))
}

export const tokenCheck = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(res => getResponseData(res))
}

export const updateUser = (name, email) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email})
  }).then(res => getResponseData(res))
}

export const getMovies = () => {
  return fetch(`${baseUrl}/movies`, {
    method: 'GET',
    credentials: 'include',
  }).then(res => getResponseData(res));
}

export const saveMovie = (movieData) => {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movieData)
  }).then(res => getResponseData(res));
}

export const deleteMovie = (cardId) => {
  return fetch(`${baseUrl}/movies/${cardId}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then(res => getResponseData(res));
  // .then(response => {
  //   if(!response.ok) {
  //     return Promise.reject('Не получилось удалить фильм. Попробуйте еще раз.');
  //   } else {
  //     return Promise.resolve();
  //   }
  // })
}
