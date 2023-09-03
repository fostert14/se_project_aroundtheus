import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleSubmit) {
    super({ popupSelector });
    this._handleSubmit = handleSubmit;
  }

  open(cardElement, cardID) {
    this._cardElement = cardElement;
    this._cardID = cardID;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardElement, this._cardID);
    });
  }
}
