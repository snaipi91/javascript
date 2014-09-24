/**
 * Created by Andrey on 18.09.14.
 */

window.onload = function() {

    //Объект canvas
    var canvas = {
        init : function() {
            var canvas = document.getElementById('block');
            var canv = canvas.getContext('2d');
            return canv;
        }
    }

    // замыкание
    var drawHeight = (function() {
        var i = 15;
        return function() {
            return i +=15;
        }
    }());

    // Инициализация canvas, возвращаем в переменную ссылку на объект canvas
    var canvas = canvas.init();

    // Создаем Объект Core
    var Core = {
        constructor : function(name,live) {
            this.name = name;
            this.live = live;
            return this; //возвращаем объект
        },
        canvas : canvas, //свойству canvas присваевыем ссылку на объект
        //метод lifeScale объекта Core
        lifeScale : function() {
                this.canvas.fillStyle = "#ff0000";
                this.canvas.fillRect(30,this.drawHeight(),this.live,3);
        },
        drawHeight : drawHeight //ссылка на замыкание
    }


    // Создаем прототип Объекта Core
    var Car = Object.create(Core);

    // Создаем конструктор
    Car.constructor = function(name, live, speed) {
        //Вызываем конструктор объекта Core в его контексте, использую функцию apply
        //arguments[] - все передаваемые аргументы
        Core.constructor.apply(this, arguments);
        //приисваевыем новое свойство
        this.speed = speed + "km/h" || null;
        return this; // возвращаем объект из конструктора
    }

    // создаем новый метод "переопределяем" в случае если метод не будет найден, поиск пойдет по цепочке прототипов...
    Car.lifeScale = function() {
        this.canvas.fillStyle = "#00ff00";
        this.canvas.fillRect(30,this.drawHeight(),this.live,3);
    };


    //render
    // Вызов конструктора объектов и методов
    var mercedes = Object.create(Car).constructor("S-500", 300, 257);
    var man = Object.create(Core).constructor("Jon", 121);
    var woman = Object.create(Core).constructor("Milla", 100);
    var Opel = Object.create(Car).constructor("Astra", 800, 301);
    man.lifeScale();
    woman.lifeScale();
    mercedes.lifeScale();
    Opel.lifeScale();
}

