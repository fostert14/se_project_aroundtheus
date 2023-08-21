import {
  profileName,
  nameInput,
  profileDescription,
  descriptionInput,
} from "../components/constants.js";
import { editProfilePopup } from "../pages/index.js";

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
  document.removeEventListener("keydown", closeModalByEscape);
}

export function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".modal_opened"));
  }
}

export function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

export function handleProfileFormSubmit(evt) {
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfilePopup.close();
  evt.target.reset();
}
