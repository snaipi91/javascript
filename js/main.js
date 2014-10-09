/**
 * Created by Andrey on 18.09.14.
 */
//Abstract example

/*
*
* JSON
*   JSON.stringify(egor) - преобразовывает объект в строку
*
* methods
*   XMLHttpRequest.abort() обрывает текущий запрос
*   XMLHttpRequest.setRequestHeader(header, value) если заголовок уже есть, он заменяется
*   XMLHttpRequest.getAllResponseHeaders() возвращает строку со всеми заголовками
*   XMLHttpRequest.getResponseHeader(headerName) возвращает значение заголовка ответа сервера
*
*properties
*   XMLHttpRequest.onreadystatechange ссылается на ф-цию обработчик событий
*   XMLHttpRequest.readyState состояние от 0 до 4
*   XMLHttpRequest.responseText текст ответ от сервера
*   XMLHttpRequest.status возвращает ответ от сервера
* */

window.onload = function() {

    function ajax(getValue) {
        var request = new XMLHttpRequest(); // объект асинхронного и синхроного запроса
        //method open(method, URL[, async(true || false), user, pass]);
        request.open('POST','/ajax.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200)
                proccess(request.responseText);
                console.log(request.responseText);
        }

        request.send("request=" + JSON.stringify(vasy)); //отправляет запрос, аргумент - тело запроса
    }

    function proccess(text) {
        document.getElementById("textRes").innerHTML += text + '<br>';
    }

    document.getElementById('submit').onclick = function() {
        var val = document.getElementById('textExm');
        ajax(val.value);
    }

    var Worker = function (name) {
        this.name = name;
    };

    var classOf = function(obj) {
        return Object.prototype.toString.call(obj).slice(8,-1);
    };

    Worker.prototype.greet = function () {
        console.log("Hello " + this.name);
    };

    var Developer = function (name, skills) {
        Worker.apply(this, arguments);
        this.skills = skills || [];
        this.toJSON = function() {
            return {
                name: this.name,
                skills: this.skills
            }
        }
    };

    Developer.prototype = Object.create(Worker.prototype);
    Developer.prototype.constructor = Developer;

    var andrey, egor, vasy;

    andrey = new Worker("Aliev");
    egor = new Worker("Silov");
    vasy = new Developer("Vasuliy", ["HTML", "CSS"]);

}


