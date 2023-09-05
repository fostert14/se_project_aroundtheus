export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getInitialCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  updateUserInfo(userData) {
    return this._request(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    });
  }

  updateAvatar(link) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    });
  }

  addNewCard(cardData) {
    return this._request(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    });
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  deleteCard(cardID) {
    return this._request(`${this._url}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addLike(cardID) {
    return this._request(`${this._url}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  removeLike(cardID) {
    return this._request(`${this._url}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}
