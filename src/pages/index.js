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

function handleSubmit(request, popupInstance, loadingText = "Saving...") {
  popupInstance.renderLoading(true, loadingText);
  request()
    .then(() => {
      popupInstance.close();
    })
    .catch(console.error)
    .finally(() => {
      popupInstance.renderLoading(false);
    });
}

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
      renderCard(newCardData);
      addImagePopup.close();
    })
    .catch((err) => console.error("Error adding new card:", err))
    .finally(() => {
      addImagePopup.renderLoading(false);
    });
}

function handleProfileFormSubmit(name, about) {
  function makeRequest() {
    return api.updateUserInfo({ name, about }).then((updatedUser) => {
      userInfo.setUserInfo({
        name: updatedUser.name,
        about: updatedUser.about,
        avatar: userInfo.getUserInfo().avatar,
      });
    });
  }
  handleSubmit(makeRequest, editProfilePopup);
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
    })
    .finally(() => {
      editAvatarPopup.renderLoading(false);
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
    })
    .finally(() => {
      deleteImagePopup.renderLoading(false);
    });
}

const setEditPopupValues = () => {
  const { name, about } = userInfo.getUserInfo();
  editProfilePopup.setInputValues({ name, about });
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
      about: userData.about,
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
  aboutSelector: ".profile__info-description",
  avatarSelector: ".profile__picture",
});

const imagePopup = new PopupWithImage({ popupSelector: "#image-popup" });

const editProfilePopup = new PopupWithForm(
  "#edit_profile_modal",
  ({ name, about }) => handleProfileFormSubmit(name, about)
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
