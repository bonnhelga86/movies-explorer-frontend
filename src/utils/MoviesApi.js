const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}`).then(this._getResponseData);
  }

  // setCard(name, link) {
  //   return fetch(`${this._baseUrl}/cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({name, link})
  //   }).then(this._getResponseData);
  // }

  // changeLikeCardStatus(cardId, likeStatus) {
  //   const likeAction = likeStatus ? 'PUT' : 'DELETE';
  //   return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
  //     method: likeAction,
  //     headers: {
  //       authorization: this._authorization
  //     }
  //   }).then(this._getResponseData);
  // }

  // deleteCard(cardId) {
  //   return fetch(`${this._baseUrl}/cards/${cardId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: this._authorization
  //     }
  //   })
  //   .then(response => {
  //     if(!response.ok) {
  //       return Promise.reject(`Ошибка: ${response.status}`);
  //     } else {
  //       return Promise.resolve();
  //     }
  //   })
  // }

  // // Работа с пользователем
  // getUserInfo() {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     headers: {
  //       authorization: this._authorization
  //     }
  //   }).then(this._getResponseData);
  // }

  // setUserInfo(name, about) {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({name, about})
  //   }).then(this._getResponseData);
  // }

  // setUserAvatar(avatar) {
  //   return fetch(`${this._baseUrl}/users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({avatar})
  //   }).then(this._getResponseData);
  // }
}

const api = new MoviesApi(baseUrl);

export default api;
