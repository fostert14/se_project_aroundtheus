import { Card } from "../components/Card.js";

const editButton = document.querySelector(".profile__edit-button");

//modals
const allModals = document.querySelectorAll(".modal");
const cardSection = document.querySelector(".content");
const profileModal = document.querySelector("#edit_profile_modal");
const addImageModal = document.querySelector("#add_image_modal");
const imagePreviewModal = document.querySelector("#image-popup");
const profileFormElement = profileModal.querySelector(".modal__form");
const imageFormElement = addImageModal.querySelector(".modal__form");
const profileModalCloseButton = profileModal.querySelector(
  ".modal__exit-button"
);
const addImageModalCloseButton = addImageModal.querySelector(
  ".modal__exit-button"
);
const imagePreviewCloseButton = imagePreviewModal.querySelector(
  ".modal__exit-button_image"
);
const addImageButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");

// DOM Forms
const nameInput = document.querySelector('input[name="name"]');
const descriptionInput = document.querySelector('input[name="description"]');
const cardTitleInput = addImageModal.querySelector(".modal__input-title");
const cardLinkInput = addImageModal.querySelector(".modal__input-link");

const renderCard = (cardData) => {
  const newCard = new Card(cardData, "#card-template");
  return newCard.getView();
};

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(profileModal);
  profileFormElement.reset();
  editFormValidator.toggleButtonState();
}

function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  const cardElement = renderCard({ link, name });
  cardSection.prepend(cardElement);
  closeModal(addImageModal);
  imageFormElement.reset();
  addFormValidator.toggleButtonState();
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
imageFormElement.addEventListener("submit", handleImageFormSubmit);

editButton.addEventListener("click", function () {
  fillProfileForm();
  openModal(profileModal);
});

addImageButton.addEventListener("click", function () {
  openModal(addImageModal);
});

profileModalCloseButton.addEventListener("click", function () {
  closeModal(profileModal);
});

addImageModalCloseButton.addEventListener("click", function () {
  closeModal(addImageModal);
});

imagePreviewCloseButton.addEventListener("click", function () {
  closeModal(imagePreviewModal);
});
