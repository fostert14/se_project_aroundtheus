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
//          //
// Elements
//          //

const editButton = document.querySelector(".profile__edit-button");

//modals
const allModals = document.querySelectorAll(".modal");
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
const cardSection = document.querySelector(".content");

// DOM Forms
const nameInput = document.querySelector('input[name="name"]');
const descriptionInput = document.querySelector('input[name="description"]');
const cardTitleInput = addImageModal.querySelector(".modal__input-title");
const cardLinkInput = addImageModal.querySelector(".modal__input-link");

//Cards

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//          //
//Functions
//          //

//open modal function
function openModal(modal) {
  modal.classList.add("modal_opened");
}

//close modal function

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

//Have fields to carry over when opening modal

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function renderCard(cardData) {
  const cardElement = getCardData(cardData);
  cardSection.prepend(cardElement);
}

function getCardData(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".content__card-image");
  const cardTitleElement = cardElement.querySelector(".content__card-text");
  const likeButton = cardElement.querySelector(".content__card-like-button");
  const deleteButton = cardElement.querySelector(
    ".content__card-delete-button"
  );

  //image Modal DOM
  const modalImageElement =
    imagePreviewModal.querySelector(".modal__card-image");
  const modalTextElement = imagePreviewModal.querySelector(
    ".modal__image-title"
  );

  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("content__card-like-button_clicked");
  });
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  //Open Image Preview
  cardImageElement.addEventListener("click", () => {
    openModal(imagePreviewModal);
    modalImageElement.src = cardData.link;
    modalTextElement.textContent = cardData.name;
    modalTextElement.alt = cardData.name;
  });

  return cardElement;
}

//change input of submitted form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(profileModal);
}
//submit new card
function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;

  renderCard({ link, name });

  closeModal(addImageModal);

  imageFormElement.reset();
}

//              //
//EventListeners
//              //

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
imageFormElement.addEventListener("submit", handleImageFormSubmit);

// Edit Profile Modal
editButton.addEventListener("click", function () {
  fillProfileForm();
  openModal(profileModal);
});

// Add Image Modal
addImageButton.addEventListener("click", function () {
  openModal(addImageModal);
});

//Like Button Clicked

profileModalCloseButton.addEventListener("click", function () {
  closeModal(profileModal);
});

addImageModalCloseButton.addEventListener("click", function () {
  closeModal(addImageModal);
});

imagePreviewCloseButton.addEventListener("click", function () {
  closeModal(imagePreviewModal);
});

initialCards.forEach((cardData) => {
  renderCard(cardData);
});
