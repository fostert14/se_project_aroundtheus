import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

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

const cardSection = document.querySelector(".content");
const profileModal = document.querySelector("#edit_profile_modal");
const addImageModal = document.querySelector("#add_image_modal");
const addImageModalCloseButton = addImageModal.querySelector(
  ".modal__exit-button"
);
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

import {
  openModal,
  closeModalByEscape,
  closeModal,
  closeModalOnRemoteClick,
} from "../utils/utils.js";
//calling Form Validation

const editFormValidator = new FormValidator(settings, profileModal);
const addFormValidator = new FormValidator(settings, addImageModal);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
editFormValidator.toggleButtonState();
addFormValidator.toggleButtonState();

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileDescription.textContent = descriptionInput.value;
//   closeModal(profileModal);
//   profileFormElement.reset();
//   editFormValidator.toggleButtonState();
// }

// function handleImageFormSubmit(evt) {
//   evt.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardLinkInput.value;
//   const cardElement = renderCard({ link, name });
//   cardSection.prepend(cardElement);
//   closeModal(addImageModal);
//   imageFormElement.reset();
//   addFormValidator.toggleButtonState();
// }

// function fillProfileForm() {
//   nameInput.value = profileName.textContent;
//   descriptionInput.value = profileDescription.textContent;
// }

// profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// imageFormElement.addEventListener("submit", handleImageFormSubmit);

// Edit Profile Modal
// editButton.addEventListener("click", function () {
//   fillProfileForm();
//   openModal(profileModal);
// });

// Add Image Modal
// addImageButton.addEventListener("click", function () {
//   openModal(addImageModal);
// });

// profileModalCloseButton.addEventListener("click", function () {
//   closeModal(profileModal);
// });

// addImageModalCloseButton.addEventListener("click", function () {
//   closeModal(addImageModal);
// });

// imagePreviewCloseButton.addEventListener("click", function () {
//   closeModal(imagePreviewModal);
// });

//Cards

// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;

//          //
//Functions
//          //

//open modal function
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalByEscape);
//   modal.addEventListener("mousedown", closeModalOnRemoteClick);
// }

// function closeModalByEscape(evt) {
//   if (evt.key === "Escape") {
//     closeModal(document.querySelector(".modal_opened"));
//   }
// }

// function closeModalOnRemoteClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     closeModal(evt.target);
//   }
// }

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   modal.removeEventListener("mousedown", closeModalOnRemoteClick);
//   document.removeEventListener("keydown", closeModalByEscape);
// }

//Have fields to carry over when opening modal

// function renderCard(cardData) {
//   const cardElement = getCardData(cardData);
//   cardSection.prepend(cardElement);
// }

//function getCardData(cardData) {
//const cardElement = cardTemplate.cloneNode(true);
//cardImageElement Below
//const cardImageElement = cardElement.querySelector(".coentent__card-imag");
//const cardTitleElement = cardElement.querySelector(".content__card-text");
//const likeButton = cardElement.querySelector(".content__card-like-button");
// const deleteButton = cardElement.querySelector(
//   ".content__card-delete-button"
// );
// function handleLikeButtonClick() {
//   likeButton.classList.toggle("content__card-like-button_clicked");
// }
// function handleDeleteButton() {
//   cardElement.remove();
// }
// function handleImageClick() {
//   openModal(imagePreviewModal);
//   modalImageElement.src = cardData.link;
//   modalTextElement.textContent = cardData.name;
//   modalTextElement.alt = cardData.name;
// }
//image Modal DOM
// const modalImageElement =
//   imagePreviewModal.querySelector(".modal__card-image");
// const modalTextElement = imagePreviewModal.querySelector(
//   ".modal__image-title"
// );
//Event Listeners
// deleteButton.addEventListener("click", handleDeleteButton);
// likeButton.addEventListener("click", handleLikeButtonClick);
//this event listener is not working.
//const cardImageElement = document.querySelectorAll(".content__card-image");
// cardImageElement.addEventListener("click", handleImageClick);
//cardImageElement.src = cardData.link;
// cardImageElement.alt = cardData.name;
//cardTitleElement.textContent = cardData.name;
// return cardElement;
//}

// function toggleButtonAfterSubmit(modal) {
//   const formElement = modal.querySelector(".modal__form");
//   const inputElements = Array.from(
//     formElement.querySelectorAll(settings.inputSelector)
//   );
//   const submitButtonSelector = formElement.querySelector(
//     settings.submitButtonSelector
//   );
//   //this isn't working
//   // toggleButtonState(inputElements, submitButtonSelector, settings);
// }

//change input of submitted form

//submit new card

//              //
//EventListeners
//              //

// initialCards.forEach((cardData) => {
//   renderCard(cardData);
// });
