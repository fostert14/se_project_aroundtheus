//import all the classes
import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  editButton,
  addImageButton,
  settings,
  cardListSelector,
  nameInput,
  descriptionInput,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const formValidators = {};

//function
const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)];
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

function handleImageFormSubmit(name, link) {
  renderCard({ name: name, link: link });
  addImagePopup.close();
}

function handleProfileFormSubmit(name, description) {
  userInfo.setUserInfo({
    name: name,
    job: description,
  });

  editProfilePopup.close();
}

const setEditPopupValues = () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = job;
};

const renderCard = (cardData) => {
  const newCard = new Card(
    cardData,
    "#card-template",
    imagePopup,
    (title, link) => imagePopup.open(title, link)
  );
  cardSection.addItem(newCard.getView());
};
//                  //
//Api integration
//                  //

//api class
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "d56fe388-1e54-4c89-a64c-cf770afe6bc4",
    "Content-Type": "application/json",
  },
});

//Api User Info Fetch Request
api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
    });
  })
  .catch((err) => {
    console.error("Error fetching user data:", err);
  });

//Api Card Fetch Request

api
  .getInitialCards()
  .then((cards) => {
    const cardSection = new Section(
      {
        items: cards,
        renderer: renderCard,
      },
      cardListSelector
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.error("Error fetching cards:", err);
  });

// Instnatiate elements

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-description",
});

const imagePopup = new PopupWithImage({ popupSelector: "#image-popup" });

const editProfilePopup = new PopupWithForm(
  "#edit_profile_modal",
  ({ name, description }) => handleProfileFormSubmit(name, description)
);
const addImagePopup = new PopupWithForm(
  "#add_image_modal",
  ({ title, link }) => {
    handleImageFormSubmit(title, link);
  }
);
editProfilePopup.setEventListeners();
addImagePopup.setEventListeners();
imagePopup.setEventListeners();

enableValidation(settings);

//specific event listeners

editButton.addEventListener("click", () => {
  formValidators["profile-form"].resetValidation();
  setEditPopupValues();
  editProfilePopup.open();
});

addImageButton.addEventListener("click", () => {
  formValidators["add-image-form"].resetValidation();
  addImagePopup.open();
});
