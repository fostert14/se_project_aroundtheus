import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  openModal,
  closeModalByEscape,
  closeModal,
  closeModalOnRemoteClick,
} from "../utils/utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button-inactive",
  inputErrorClass: "modal__input_type_error",
};

const editButton = document.querySelector(".profile__edit-button");

//modals
const allModals = document.querySelectorAll(".modal");
const cardSection = document.querySelector(".content");
const profileModal = document.querySelector("#edit_profile_modal");
const addImageModal = document.querySelector("#add_image_modal");
const imagePreviewModal = document.querySelector("#image-popup");
const profileFormElement = document.forms["profile-form"];
const imageFormElement = document.forms["add-image-form"];
const closeButtons = document.querySelectorAll(".modal__exit-button");
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

initialCards.forEach((cardData) => {
  const cardElement = renderCard(cardData);
  // append the card element to the DOM
  cardSection.appendChild(cardElement);
});

//          //
// Elements
//          //

//calling Form Validation

const formValidators = {};

// enable validation
const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)];
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settings);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(profileModal);
  profileFormElement.reset();
  formValidators["profile-form"].resetValidation();
}

function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  const cardElement = renderCard({ link, name });
  cardSection.prepend(cardElement);
  closeModal(addImageModal);
  imageFormElement.reset();
  formValidators["add-image-form"].resetValidation();
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
imageFormElement.addEventListener("submit", handleImageFormSubmit);

editButton.addEventListener("click", function () {
  fillProfileForm();
  formValidators["profile-form"].resetValidation();
  openModal(profileModal);
});

addImageButton.addEventListener("click", function () {
  openModal(addImageModal);
  formValidators["add-image-form"].resetValidation();
});

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});
