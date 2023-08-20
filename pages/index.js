//import all the classes
import Section from "../components/Section.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { cardListSelector, initialCards } from "../components/constants.js";
import Card from "../components/Card.js";

// render the cards
const CardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(cardData, "#card-template");
      initialCards.addItems(newCard);
    },
  },
  cardListSelector
);
