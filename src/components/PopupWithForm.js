import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const inputs = Array.from(this._popupElement.querySelectorAll("input"));
      const inputValues = inputs.map((input) => input.value);

      this._handleSubmit(...inputValues);
      evt.target.reset();
    });
  }
}
