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
  editAvatarButton,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithDelete from "../components/PopupWithDelete";

const formValidators = {};
let cardSection;

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
  addImagePopup.renderLoading(true);
  api
    .addNewCard({ name, link })
    .then((newCardData) => {
      const { name, link } = newCardData;
      cardSection.addItem(
        new Card(
          newCardData,
          "#card-template",
          imagePopup,
          (title, link) => imagePopup.open(title, link),
          (cardElement, cardID) => {
            deleteImagePopup.open(cardElement, newCardData._id);
          },
          api
        ).getView()
      );
    })
    .catch((err) => console.error("Error adding new card:", err));
  addImagePopup.close();
}

function handleProfileFormSubmit(name, description) {
  editProfilePopup.renderLoading(true);
  api
    .updateUserInfo({ name: name, about: description })
    .then((updatedUser) => {
      userInfo.setUserInfo({
        name: updatedUser.name,
        job: updatedUser.about,
      });
      editProfilePopup.close();
    })
    .catch((err) => {
      console.error("Error updating user info:", err);
    });
}

function handleAvatarSubmit(link) {
  editAvatarPopup.renderLoading(true);
  api
    .updateAvatar(link)
    .then((newAvatar) => {
      userInfo.setUserInfo({
        avatar: newAvatar.avatar,
      });
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.error("Error updating avatar:", err);
    });
}

function handleDeleteConfirmation(cardElement, cardID) {
  deleteImagePopup.renderLoading(true);
  api
    .deleteCard(cardID)
    .then(() => {
      cardElement.remove();
      cardElement = null;
      deleteImagePopup.close();
    })
    .catch((err) => {
      console.error("Error deleting card:", err);
    });
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
    (title, link) => imagePopup.open(title, link),
    (cardElement) => {
      deleteImagePopup.open(cardElement, cardData._id);
    },
    api
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
      avatar: userData.avatar,
    });
  })
  .catch((err) => {
    console.error("Error fetching user data:", err);
  });

//Api Card Fetch Request

api
  .getInitialCards()
  .then((cards) => {
    cardSection = new Section(
      {
        items: cards.reverse(),
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
  avatarSelector: ".profile__picture",
});

const imagePopup = new PopupWithImage({ popupSelector: "#image-popup" });

const editProfilePopup = new PopupWithForm(
  "#edit_profile_modal",
  ({ name, description }) => handleProfileFormSubmit(name, description)
);

const editAvatarPopup = new PopupWithForm("#change_avatar", ({ link }) =>
  handleAvatarSubmit(link)
);

const addImagePopup = new PopupWithForm(
  "#add_image_modal",
  ({ title, link }) => {
    handleImageFormSubmit(title, link);
  }
);
const deleteImagePopup = new PopupWithDelete(
  "#delete-popup",
  handleDeleteConfirmation
);
deleteImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
addImagePopup.setEventListeners();
imagePopup.setEventListeners();
editAvatarPopup.setEventListeners();

enableValidation(settings);

//specific event listeners

editButton.addEventListener("click", () => {
  formValidators["profile-form"].resetValidation();
  setEditPopupValues();
  editProfilePopup.open();
});

editAvatarButton.addEventListener("click", () => {
  formValidators["change-avatar-form"].resetValidation();
  editAvatarPopup.open();
});

addImageButton.addEventListener("click", () => {
  formValidators["add-image-form"].resetValidation();
  addImagePopup.open();
});
