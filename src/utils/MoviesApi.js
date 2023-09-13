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
}

const api = new MoviesApi(baseUrl);

export default api;
