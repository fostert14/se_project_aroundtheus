//import all the classes
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { cardListSelector, initialCards } from "../components/constants.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImages.js";

const imagePopup = new PopupWithImage({ popupSelector: "#image-popup" });
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

cardSection.renderItems();
