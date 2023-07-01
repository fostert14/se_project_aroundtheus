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

// Elements

const editButton = document.querySelector(".profile__edit-button");
const allModals = document.querySelectorAll(".modal");
const profileModal = document.querySelector("#edit_profile_modal");
const imageModal = document.querySelector("#edit_image_modal");
const profileFormElement = document.querySelector(".modal__form");
const profileModalCloseButton = profileModal.querySelector(
  ".modal__exit-button"
);
const imageModalCloseButton = imageModal.querySelector(".modal__exit-button");
const addImageButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const nameInput = document.querySelector('input[name="name"]');
const descriptionInput = document.querySelector('input[name="description"]');
const cardSection = document.querySelector(".content");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//Functions

//open modal function
function openModal(modal) {
  modal.classList.add("modal_opened");
}

//close modal function

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function getCardData(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageElement = cardElement.querySelector(".content__card-image");
  const cardTitleElement = cardElement.querySelector(".content__card-text");
  //set the path to the image to the link field of the object
  cardImageElement.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageElement.alt = cardData.name;
  //set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  return cardElement;
}

//change input of submitted form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(profileModal);
}

//open modal and get fields to carry over

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

//EventListeners

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// Edit Profile Modal
editButton.addEventListener("click", function () {
  fillProfileForm(editButton);
  openModal(profileModal);
});

// Add Image Modal
addImageButton.addEventListener("click", function () {
  fillProfileForm(addImageButton);
  openModal(imageModal);
});

profileModalCloseButton.addEventListener("click", function () {
  closeModal(profileModal);
});

imageModalCloseButton.addEventListener("click", function () {
  closeModal(imageModal);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardData(cardData);
  cardSection.prepend(cardElement);
});
