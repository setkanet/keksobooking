/*
1. Функция, возвращающая случайное целое число из переданного диапазона включительно.
2. Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
Источники:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://learn.javascript.ru/number
*/

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    console.log('Значение числа max  должно быть больше значение числа min');
  } else if (max < 0 || min < 0) {
    console.log('Значения введенных чисел должны быть больше или равны 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(50, 52);

function getRandomFloat(min, max, fraction) {
  if (max <= min) {
    console.log('Значение числа max  должно быть больше значение числа min');
  } else if (max < 0 || min < 0) {
    console.log('Значения введенных чисел должны быть больше или равны 0');
  }
  let randomNumber = (Math.random() * (max - min)) + min;
  return +randomNumber.toFixed(fraction);
}
getRandomFloat(51.99998, 53, 5);
