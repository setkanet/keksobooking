function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return null;
  } else if (max < 0 || min < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, fraction) {
  if (max <= min) {
    return null;
  } else if (max < 0 || min < 0) {
    return null;
  }
  const randomNumber = (Math.random() * (max - min)) + min;
  return +randomNumber.toFixed(fraction);
}

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const TITLES = [
  'Хорошее жилье',
  'Отличный вид',
  'Метро рядом',
  'Первый этаж',
  'Тихий район',
  'Возле рынка',
  'Стадион напротив',
  'У парка',
  'Просторная кухня',
  'Вежливые соседи',
];
const MIN_PRICE = 500000;
const MAX_PRICE = 1000000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const PROPERTIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = [
  'Кухня полностью экипирована бытовой техникой: холодильник, посудомоечная машина, варочная панель.',
  'Квартира оснащена всем необходимым для жизни, заходи и живи.',
  'Квартира уютная и просторная, тихая, заезжай и живи, все в состоянии нового. Подъезд чистый и без запаха.',
  'Хотите жить в шикарной дизайнерской студии и получать эстетическое удовольствие от нахождения в ней? ',
  'Есть вся необходимая мебель и техника. Рассмотрим всех порядочных и платежеспособных.',
  'Предпочтительный портрет арендаторов: возраст от 25 лет, дети не младше 8 лет, без домашних животных. ',
  'Большая лоджия обрамляет всю квартиру.Из каждой комнаты выход на лоджию с завораживающей панорамой города.',
  'На территории комплекса комфортный бассейн с ионизированной водой, сауна.',
  'Беспроблемная парковка,автомойка -приятный бонус для автовладельцев.',
  'Огороженная территория,высокопрофессиональная охрана,система видео наблюдения,консьерж.',
];
const PICTURES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const FROM_LATITUDE = 35.65000;
const TO_LATITUDE = 35.70000;
const FROM_LONGITUDE = 139.70000;
const TO_LONGITUDE = 139.80000;

const advertsCount = 10;
const adverts = [];

for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}

function createFlat(index) {
  const titlesRandomIndex = getRandomInteger(0, TITLES.length - 1);
  const pricesRandomInteger = getRandomInteger(MIN_PRICE, MAX_PRICE);
  const typesRandomIndex = getRandomInteger(0, TYPES.length - 1);
  const roomsRandomInteger = getRandomInteger(MIN_ROOMS, MAX_ROOMS);
  const quantityRandomInteger = getRandomInteger(MIN_GUESTS, MAX_GUESTS);
  const checkinsRandomIndex = getRandomInteger(0, CHECKINS.length - 1);
  const checkoutsRandomIndex = getRandomInteger(0, CHECKOUTS.length - 1);
  const propertiesStart = getRandomInteger(0, PROPERTIES.length - 1);
  const propertiesEnd = getRandomInteger(propertiesStart + 1, PROPERTIES.length + 1);
  const descriptionsRandomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const picturesRandomIndex = getRandomInteger(0, PICTURES.length - 1);
  const latsRandomInteger = getRandomFloat(FROM_LATITUDE, TO_LATITUDE, 5);
  const lngsRandomInteger = getRandomFloat(FROM_LONGITUDE, TO_LONGITUDE, 5);

  return {
    author: {
      avatar: AVATARS[index],
    },
    offer: {
      title: TITLES[titlesRandomIndex],
      address: `${latsRandomInteger}, ${lngsRandomInteger}`,
      price: pricesRandomInteger,
      type: TYPES[typesRandomIndex],
      room: roomsRandomInteger,
      guests: quantityRandomInteger,
      checkin: CHECKINS[checkinsRandomIndex],
      checkout: CHECKOUTS[checkoutsRandomIndex],
      features: PROPERTIES.slice(propertiesStart, propertiesEnd),
      description: DESCRIPTIONS[descriptionsRandomIndex],
      photos: PICTURES[picturesRandomIndex],
    },
    location: {
      lat: latsRandomInteger,
      lng: lngsRandomInteger,
    },
  };
}
