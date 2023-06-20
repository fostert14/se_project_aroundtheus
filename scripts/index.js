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
let cardSection = document.querySelector(".content");
let cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//Functions

function getCardData(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageTemplate = cardElement.querySelector(".content__card-image");
  const cardTitleTemplate = cardElement.querySelector(".content__card-text");
  //set the path to the image to the link field of the object
  cardImageTemplate.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageTemplate.alt = cardData.name;
  //set the card title to the name field of the object, too
  cardTitleTemplate.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  return cardElement;
}

//change input of submitted form
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

initialCards.forEach((cardData) => {
  const cardElement = getCardData(cardData);
  cardSection.prepend(cardElement);
});
