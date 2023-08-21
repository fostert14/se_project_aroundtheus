import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleSubmit = handleFormSubmit;
    this.setEventListeners();
  }

  open() {
    super.open();
  }
  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(evt);
    });
  }
}
