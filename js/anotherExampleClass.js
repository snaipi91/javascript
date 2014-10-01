/**
 * Created by Andrey on 26.09.14.
 */
/*Abstract example
    Prototype and Class
        - obj.prototype (нельзя получить прототип) можно если обратиться
          obj.__proto__ (лучше так не делать т.к. в разных браузерах по разному);
        - свойство prototype существует только у function и оно хранит prototype от которого будут наследоваться все объекты
          при помощи ключевого слова new
        - метод .toString() преобразовывает Object в строку вида [Object object], можно переопределить методы например:
          Worker.prototype.toString = function() { ... } вернет то что в теле функции
    get and set
        - get data() {} при обращение например: obj.data сработает геттер
        - set data() {} когда присваивание срабатывает сеттер например: obj.data = new Data();
    ::::
    Каждое свойство имеет 4 атрибута {Writable, Enumerable, Configurable, Value} так же если есть {get, set}
    - можно посмотреть атрибуты через статический метод Object.getOwnPropertyDescriptor(Worker, "name") 1-аргумент объект 2-свойство
    - так же править атрибуты используя статический метод Object.defineProperty(obj, property, {descriptor})
        value : значение
        writable : (false, true) разрешение на запись
        enumerable : (false, true) выводить / не выводить
        configurable : (false, true) разрешает / запрещает перезаписывать свойство (выдает ошибку) так же при false нельзя удалить св-во
    - статический метод Object.defineProperties(object, { property : {descriptor}})
    - Object.keys(obj) показывает все свойства ( за исключением configurable : false )
    - Object.seal(obj) не позволяет расширять объект
*/
window.onload = function() {

    // класс Worker
    var Worker = function (name) {
        this.name = name;
    };

    // Функция на проверку класса передаваемого аргумента
    var classOf = function(obj) {
        return Object.prototype.toString.call(obj).slice(8,-1);
    };

    // Записываем в прототип метод greet
    Worker.prototype.greet = function () {
        console.log("Hello " + this.name);
    };

    // Класс Developer extend Worker
    var Developer = function (name, skills, pass) {
        Worker.apply(this, arguments); // исполняем в контексте Developer с передаваемыми аргументами arguments[] - массив
        this.skills = skills || [];
        this.pass = pass;
        // Метод toJSON возвращает нами указанные свойства
        this.toJSON = function() {
            return {
                name: this.name,
                skills: this.skills
            }
        }
    };

    // Developer extend Worker
    Developer.prototype = Object.create(Worker.prototype); // свойство constructor будет указывать на функцию Worker
    Developer.prototype.constructor = Developer; // теперь указывает на Developer

    var person1, person2, person3;

    person1 = new Worker("Jonh");
    person2 = new Worker("Lion");
    person3 = new Developer("Василий", ["HTML", "CSS", "Javascript", "PHP", "LESS"]);

    Object.seal(person3)

    // выводит [Uncaught TypeError: Cannot define property:oldSchool, object is not extensible. ]
    Object.defineProperties(person3, {school : {
        value : "150 Street",
        writable : false
    }})

}
