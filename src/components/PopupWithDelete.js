import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleSubmit) {
    super({ popupSelector });
    this._handleSubmit = handleSubmit;
    this._form = this._popupElement.querySelector("form");
    this._button = this._form.querySelector("button");
  }

  open(cardElement, cardID) {
    this._cardElement = cardElement;
    this._cardID = cardID;
    super.open();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Removing...";
    } else {
      this._button.textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardElement, this._cardID);
    });
  }
}
