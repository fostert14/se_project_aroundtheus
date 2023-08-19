//import all the classes
import Section from "../components/Section.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { cardListSelector } from "../components/constants.js";
import Card from "../components/Card.js";

// render the cards
const CardSection = new Section(
  {
    renderer: (item) => {
      const card = new Card(item, "#card-template");
    },
  },
  cardListSelector
);
