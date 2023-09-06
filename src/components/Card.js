export default class Card {
  constructor(
    cardData,
    cardSelector,
    popupWithImage,
    handleCardClick,
    handleDeleteCallback,
    apiInstance
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._popupWithImage = popupWithImage;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCallback = handleDeleteCallback;
    this._api = apiInstance;
    this._id = cardData._id;
    this._isLiked = cardData.isLiked;
  }

  _setEventListeners() {
    //define elements
    this._deleteButton = this._cardElement.querySelector(
      ".content__card-delete-button"
    );
    this._imageContainer = this._cardElement.querySelector(
      ".content__card-image"
    );

    //event listeners
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCallback(this._cardElement);
    });
  }

  _handleLikeIcon() {
    if (
      this._likeButton.classList.contains("content__card-like-button_clicked")
    ) {
      this._api
        .removeLike(this._id)
        .then(() => {
          this._likeButton.classList.remove(
            "content__card-like-button_clicked"
          );
        })
        .catch((err) => {
          console.error("Error removing like:", err);
        });
    } else {
      this._api
        .addLike(this._id)
        .then(() => {
          this._likeButton.classList.add("content__card-like-button_clicked");
        })
        .catch((err) => {
          console.error("error adding like:", err);
        });
    }
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);

    this._cardTitle = this._cardElement.querySelector(".content__card-text");
    this._cardImage = this._cardElement.querySelector(".content__card-image");
    this._likeButton = this._cardElement.querySelector(
      ".content__card-like-button"
    );

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

    if (this._isLiked) {
      this._likeButton.classList.add("content__card-like-button_clicked");
    } else {
      this._likeButton.classList.remove("content__card-like-button_clicked");
    }
  }
}
