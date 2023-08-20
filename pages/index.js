//import all the classes
import Section from "../components/Section.js";

import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { cardListSelector, initialCards } from "../components/constants.js";

// render the cards
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const newCard = new Card(cardData, "#card-template");
      cardSection.addItem(newCard.getView());
    },
  },
  cardListSelector
);

cardSection.renderItems();
