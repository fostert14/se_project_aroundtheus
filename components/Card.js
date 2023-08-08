import {
  openModal,
  closeModalByEscape,
  closeModalOnRemoteClick,
} from "../utils/utils.js";

const imagePreviewModal = document.querySelector("#image-popup");

export class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //define elements
    this._likeButton = this._cardElement.querySelector(
      ".content__card-like-button"
    );
    this._deleteButton = this._cardElement.querySelector(
      ".content__card-delete-button"
    );
    this._imageContainer = this._cardElement.querySelector(
      ".content__card-image"
    );

    this._imagePreview = imagePreviewModal.querySelector(".modal__card-image");
    this._imagePreviewTitle = imagePreviewModal.querySelector(
      ".modal__image-title"
    );

    //event listeners
    this._imageContainer.addEventListener("click", () => {
      this._handleImageClick();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteIcon();
    });
  }

  //Handle Methods

  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("content__card-like-button_clicked");
  }

  _handleImageClick() {
    openModal(imagePreviewModal);
    this._imagePreview.src = this._link;
    this._imagePreview.alt = this._name;
    this._imagePreviewTitle.textContent = this._name;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    this._cardTitle = this._cardElement.querySelector(".content__card-text");
    this._cardImage = this._cardElement.querySelector(".content__card-image");

    //call previously defined methods
    this._renderCard();
    this._setEventListeners();

    return this._cardElement;
  }

  //render card
  _renderCard() {
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  }
}
