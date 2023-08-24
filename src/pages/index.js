//import all the classes
import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  cardListSelector,
  initialCards,
  editButton,
  addImageButton,
  enableValidation,
  settings,
  cardTitleInput,
  cardLinkInput,
  formValidators,
} from "../components/constants.js";
import PopupWithImage from "../components/PopupWithImages.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//function
function handleImageFormSubmit(name, link) {
  // const name = cardTitleInput.value;
  // const link = cardLinkInput.value;
  const newCard = new Card(
    { name: name, link: link },
    "#card-template",
    imagePopup,
    (name, link) => imagePopup.open(name, link)
  );
  cardSection.addItem(newCard.getView());
  //evt.target.reset();
  addImagePopup.close();
  formValidators["add-image-form"].resetValidation();
}

function handleProfileFormSubmit(name, description) {
  userInfo.setUserInfo({
    name: name,
    job: description,
  });

  editProfilePopup.close();
  // evt.target.reset();
}

// Instnatiate elements

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-description",
});

const imagePopup = new PopupWithImage({ popupSelector: "#image-popup" });

export const editProfilePopup = new PopupWithForm(
  "#edit_profile_modal",
  (name, description) => handleProfileFormSubmit(name, description)
);
const addImagePopup = new PopupWithForm("#add_image_modal", (name, link) => {
  handleImageFormSubmit(name, link);
});
editProfilePopup.setEventListeners();
addImagePopup.setEventListeners();
imagePopup.setEventListeners();

// render the cards
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const newCard = new Card(
        cardData,
        "#card-template",
        imagePopup,
        (name, link) => imagePopup.open(name, link)
      );
      cardSection.addItem(newCard.getView());
    },
  },
  cardListSelector
);

enableValidation(settings);
cardSection.renderItems();

//specific event listeners

editButton.addEventListener("click", () => {
  formValidators["profile-form"].resetValidation();
  editProfilePopup.open();
});

addImageButton.addEventListener("click", () => {
  formValidators["add-image-form"].resetValidation();
  addImagePopup.open();
});