//import all the classes
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
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImages.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { handleProfileFormSubmit } from "../utils/utils.js";

//function
function handleImageFormSubmit(evt, cardSection, imagePopup) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  const newCard = new Card(
    { name: name, link: link },
    "#card-template",
    imagePopup
  );
  cardSection.addItem(newCard.getView());
  evt.target.reset();
  addImagePopup.close();
  formValidators["add-image-form"].resetValidation();
}

const imagePopup = new PopupWithImage({ popupSelector: "#image-popup" });
export const editProfilePopup = new PopupWithForm(
  "#edit_profile_modal",
  handleProfileFormSubmit
);
export const addImagePopup = new PopupWithForm("#add_image_modal", (evt) => {
  handleImageFormSubmit(evt, cardSection, imagePopup, () => {
    addImagePopup.close();
  });
});
imagePopup.setEventListeners();

// render the cards
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const newCard = new Card(cardData, "#card-template", imagePopup);
      cardSection.addItem(newCard.getView());
    },
  },
  cardListSelector
);

enableValidation(settings);
cardSection.renderItems();

//specific event listeners

editButton.addEventListener("click", () => {
  editProfilePopup.open();
});

addImageButton.addEventListener("click", () => {
  addImagePopup.open();
});
