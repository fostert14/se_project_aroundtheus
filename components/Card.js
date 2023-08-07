import {
  openModal,
  closeModalByEscape,
  closeModalOnRemoteClick,
} from "../utils/utils.js";

export class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    const imageElement = this._cardElement
      .querySelector(".content__card-image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });

    const likeButton = this._cardElement
      .querySelector(".content__card-like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    const _deleteButton = this._cardElement
      .querySelector(".content__card-delete-button")
      .addEventListener("click", () => {
        this._handleDeleteIcon();
      });
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

  _handleImageClick() {
    const imagePreviewModal = document.querySelector("#image-popup");
    openModal(imagePreviewModal);
    imagePreviewModal.querySelector(".modal__card-image").src = this._link;
    imagePreviewModal.querySelector(".modal__image-title").textContent =
      this._name;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    //call previously defined methods
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
