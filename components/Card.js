export class Card {
  constructor(initialCards, cardSelector) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    const likeButton = this._cardElement
      .querySelector(".content__card-like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    const deleteButton = this._cardElement
      .querySelector(".content__card-delete-button")
      .addEventListener("click", () => {
        this._handleDeleteIcon();
      });

    console.log("set event listeners is working.");
  }

  //Handle Methods

  _handleDeleteIcon() {
    this._cardElement.remove();
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".content__card-like-button")
      .classList.toggle("content__card-like-button_clicked");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    //get the card view
    //set event listeners
    this._renderCard();
    this._setEventListeners();

    return this._cardElement;
  }

  //render card
  _renderCard() {
    this._cardElement.querySelector(".content__card-text").textContent =
      this._name;
    this._cardElement.querySelector(".content__card-image").src = this._link;
  }
}
