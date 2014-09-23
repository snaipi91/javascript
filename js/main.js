/**
 * Created by Andrey on 18.09.14.
 */

window.onload = function() {

    var canvas = {
        init : function() {
            var canvas = document.getElementById('block');
            var canv = canvas.getContext('2d');
            return canv;
        }
    }

    var canvas = canvas.init();

    var Core = {
        constructor : function(name,live) {
            this.name = name;
            this.live = live;
            return this;
        },
        canvas : canvas,
        lifeScale : function(h) {
            this.canvas.fillStyle = "#ff0000";
            this.canvas.fillRect(30,h,this.live,3);
        }
    }

    var Car = Object.create(Core);

    Car.constructor = function(name, live, speed) {
        Core.constructor.apply(this, arguments);
        this.speed = speed + "km/h" || null;
        return this;
    }

    var mersedez = Object.create(Car).constructor("S-500", 300, 257);
    var man = Object.create(Core).constructor("Louser", 121);
    var wolf = Object.create(Core).constructor("Bobi", 157);
    wolf.lifeScale(10);
    man.lifeScale(30);
    console.log(mersedez);

}

