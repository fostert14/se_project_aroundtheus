import {
  profileName,
  nameInput,
  profileDescription,
  descriptionInput,
  cardTitleInput,
  cardLinkInput,
} from "../components/constants.js";
import { addImagePopup, editProfilePopup } from "../pages/index.js";
import Card from "../components/Card.js";

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

export function handleImageFormSubmit(evt, cardSection, imagePopup) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  const newCard = new Card(
    { name: name, link: link },
    "#card-template",
    imagePopup
  );
  cardSection.prepend(newCard.getview);
  evt.target.reset();
  formValidators["add-image-form"].resetValidation();
}
