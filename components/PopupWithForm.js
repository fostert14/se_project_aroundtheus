import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupElement;
    this._handleSubmit = handleFormSubmit;
  }

  close() {}
}
