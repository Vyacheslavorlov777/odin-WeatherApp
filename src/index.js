import "./styles.css";
import _ from "lodash";
import main from "./main.js";
import menu from "./menu.js";
import contacts from "./contacts.js";
import contactsRestourant from "../asset/resource/contacts/contactsRestourant.js";
import drinks from "../asset/resource/category/drinks.js";
import pasts from "../asset/resource/category/pasts.js";
import soups from "../asset/resource/category/soups.js";

import imgPast from "../asset/resource/img/tarelka-s-vkusnym-ital-anskim-bludom-iz-makaron.jpg"
import imgSoup from "../asset/resource/img/vid-sboku-tradicionnogo-russkogo-ovosnogo-borsa-v-misku-belogo.jpg"
import imgDrink from "../asset/resource/img/vid-sboku-kokteil-rom-mohito-s-laimom-matoi-i-l-dom-v-bokale.jpg"

const elements = {
  main: document.querySelector('.first'),
  menu: document.querySelector('.menu'),
  contacts: document.querySelector('.contacts'),
  content: document.querySelector('#content'),
}

elements.menu.addEventListener('click', (e) => {
  e.preventDefault();

  elements.content.innerHTML = ``;

  menu('Past`s', pasts, imgPast, 'row');
  menu('Soup`s', soups, imgSoup, 'row-reverse', 'bgc_line');
  menu('Drink`s', drinks, imgDrink, 'row');
});

elements.main.addEventListener('click', (e) => {
  e.preventDefault();

  elements.content.innerHTML = ``;

  main();
});

elements.contacts.addEventListener('click', (e) => {
  e.preventDefault();

  elements.content.innerHTML = ``;

  contacts(contactsRestourant, elements.content)
});
