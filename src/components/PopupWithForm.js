import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector("form");
    this._button = this._form.querySelector("button");
  }

  reset() {
    if (this._form) {
      this._form.reset();
    }
  }

  close = () => {
    super.close();
    this.reset();
  };

  _getInputValues() {
    const inputList = [...this._popupElement.querySelectorAll("input")];
    const inputValues = {};
    for (const input of inputList) {
      inputValues[input.name] = input.value;
    }

    return inputValues;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Saving...";
    } else {
      this._button.textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }
}
