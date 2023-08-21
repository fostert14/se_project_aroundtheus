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

  _handleProfileFormSubmit() {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeModal(profileModal);
    profileFormElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(evt);
    });
  }
}
