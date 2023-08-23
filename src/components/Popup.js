import { closeModalByEscape, closeModalOnRemoteClick } from "../utils/utils.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this.closeModalByEscape);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", (evt) =>
      this.closeModalByEscape(evt)
    );
    this._popupElement.removeEventListener(
      "mousedown",
      closeModalOnRemoteClick
    );
  }

  closeModalByEscape(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton = this._popupElement.querySelector(".modal__exit-button");
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
    this._popupElement.addEventListener("keydown", (evt) =>
      this.closeModalByEscape(evt)
    );
    this._closeButton.addEventListener("click", () => this.close());
  }
}
