/**
 * Created by Andrey on 02.10.14.
 */

var arrString = ["Earth", "Mars", "Moon"];
var arrNumber = [,,,,4];
console.log(arrNumber); // [4:4]
arrString[10] = "New String";
console.log(arrString.length);
// Property .length it's [index last element + 1]

/*
    methods Array EcmaScript 3
        - join     |     array.join(default - ','); Превращает массив в строку
        - reverse  |     array.reverse(); Переворачивает массив
        - sort     |     array.sort(default - сортирует в алфавитном порядке[function(){}]);  так же принимает функцию
        - concat   |     array.concat("String") - складывает массив, возвращает новый массив
        - splice   |     array.splice(1,1, "New") - изменяет исходный массив.
                         1 аргумент откуда начать удаление, 2 аргумент кол-во, 3 аргумент что добавить
                         splice возвращает удаленные элементы
        - push
        - unshift     - добавление элементов

        - pop
        - shift       - удаляет элементы, возвращая их

    methods Array EcmaScript 5
        - forEach       |   array.forEach(callbackFunction(elem,index,array){ ... }); изменяет массив внутри калбэка
        - map           |   array.map(function(e) { ... }) передает в качестве аргумента element
        - filter        |   array.filter(function(e) { ... }) возвращает массив использую филтрацию попадает все что (TRUE)
        - every         |   array.every(function(e) { ... }) аналогично filter разница лишь в том, что возвращает Boolean true/false
        - reduce        |   array.reduce(function(a,b) { ... }
        - indexOf, lastIndexOf

    function ----
        объект arguments - ведёт себя как массив
        callback функция обратного вызова
        функции создают локальную область видимости

        Замыкания:
            при вызове функции создается объект который содержит локальные переменный этой функции
            когда мы определяем функцию, внутри функции эта функция сохраняет ссылку на этот объект с локальными переменнами
            объект существует только тогда когда есть функции которые на него ссылаются
  */

// замыкание
var drawHeight = (function() {
    var i = 15;
    return function(num) {
        i = num !== undefined ? num : i;
        return i +=15;
    }
}());

console.log(drawHeight(31)); //46
console.log(drawHeight()); //61
console.log(drawHeight()); //76

func = function(callback) {
    var time = new Date();
    callback(time); // callback
}

func(function(t) {
    console.log(t + " time");
})


// Выражение вызова

var street = (function(name) {
    return "my street" + name;
}("103 Ivanovo"));

console.log(street) // присваиваем сразу значение функции переменной


arrString.forEach(function(elem, index, array) {
    array[index] = elem.toUpperCase();
});
console.log(arrString) // изменит массив в Верхнем регистре

var newArr = arrString.filter(function(e) {
    return e.length > 7;
});

console.log(newArr); // вернет New String


/*
    Исключения try catch finally
         try {
         инструкция
         } catch(идентификатор){
         инструкция
         } finally {
         инструкция
         }
    - в try выполняется код, если попадается ошибка исполняется код в блоке catch, передается обЪект throw myError
    - Error (name, stack, message); - properties
    - пробрасывает объект ошибок дальше по стеку вызовов

 */

var myError = new Error("My message error");
myError.name = "myError";

function slow(a) {
    if(a > 3) throw myError; // выводит ошибку
}

try {
    slow(7);
} catch(e) {
    console.log(e.name);
} finally {
    console.log(true) // срабатывает всегда
}
