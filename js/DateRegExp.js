/**
 * Created by Andrey on 07.10.14.
 */
var date = new Date(1991,9,31);
console.log(date); //Thu Oct 31 1991 00:00:00 GMT+0400

/*
*  Date Object
*   methods
*       - getDay()
*       - getFullYear()
*       - getHours()
*       - getMonth()
*       по аналогии так же есть и сеттеры
*       - setDay(3);
*
*       -toTimeString() вывести только время
*       -toDateString() вывести только дату
*
*       -Date.now() возвращает текущее время timestamp
*       -getTime() возвращает кол-во миллисекунд прошедшего с даты 1970
*
* */


/*
*   Math Object
*
*
*
*
* */

var getRandom = function(min, max) {
    return Math.random() * (max - min) + min; //возвращает случайное число в диапозоне
}

console.log(Math.floor(getRandom(3,10)));

/*
*   RegExp Object
*
*       pattern = new RegExp("\w+", "gim")
*           - 1 параметр регулярное выражение
*           - 2 параметр (флаги)
*       var pattern = /\w+/g регулярное выражение
*
*       flags:
*           pattern.global
*           pattern.ignoreCase
*           pattern.multiLine
*
*       methods
*           - match(pattern)
*           - search(pattern) возвращает индекст match
*           - split(pattern) разбивает на массив
* */

 var pattern = /\w+/g;
var string = "Craft is a self-hosted PHP application built on Yii, but you don’t need to know PHP or Yii to use it.";
var res = string.match(pattern);
console.log(res); // вернем массив match(ей)