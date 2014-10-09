/**
 * Created by Andrey on 08.10.14.
 */
/*
* исполнить js-code в браузере [url]      - javascript: javascript code;
* <a href="javascript: bookmarkletFunction();">bookmarklet</a> - букмарклет
*
*   var timer = setTimeout(function() {  выполняется асинхронно, возвращают значение
*       ...
*   }, 1000);
*
*   clearInterval(timer); останавливает счетчик
*
*
*   window.location - Object
*       - hash [#] то что после символа: один из способов сохранения состояния в одностроничных js приложениях
*         window.onhashchange = function() { ... } следить за изменением hash
*       - href переадрессация
*
*   window.screen - Object
*       screen width and height - узнаем разрешение экрана пользователя
*       screen.availWidth and availHeight - доступное разрешение при котором мы можем открыть браузер
*       screen.colorDepth - узнать глубину цвета ( кол-во бит\пиксель )
*
*   window.history - Object
*       history.length показывает историю
*       history.back назад
*       history.forward вперед
*       history.go(3) перейти на 3 стр вперед
*
*       history.pushState(obj, 'description', link) obj - объект состояния, описание, link - относительная ссылка
*
*
* */

console.log(encodeURI("http://dom.ru/page?name=Жорик"));
// decodeURI - аналогичная

function init() {
    alert("DOM load");
}

window.addEventListener('load', init, false); // прослушивает события