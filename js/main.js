import './forms.js';
import './map.js';
import './sort.js';
import './card.js';
import {
  flatCreate
} from './flat-create.js';

import {
  addAdvertsCards
} from './card.js';
// import { create } from 'browser-sync';

// ! Получение массива данных объявлений по заданому количеству
const advertsCount = 10;
const adverts = [];
for (let i = 0; i < advertsCount; i++) {
  adverts[i] = flatCreate(i);
}

addAdvertsCards(adverts);
