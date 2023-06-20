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

let editButton = document.querySelector(".profile__edit-button");
let elementModal = document.querySelector(".modal");
let profileFormElement = document.querySelector(".modal__form");
let exitButton = document.querySelector(".modal__exit-button");
let profileName = document.querySelector(".profile__info-name");
let profileDescription = document.querySelector(".profile__info-description");
let nameInput = document.querySelector('input[name="name"]');
let descriptionInput = document.querySelector('input[name="description"]');

//Functions

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  elementModal.classList.remove("modal_opened");
}

//EventListeners

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

editButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  elementModal.classList.add("modal_opened");
});

exitButton.addEventListener("click", function () {
  elementModal.classList.remove("modal_opened");
});
