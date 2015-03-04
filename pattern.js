//
//pattern js
//

var module = (function() {
  var _private = {
    i: 5,
    get: function() {
      console.log('Текущее значение:' + this.i);
    },
    set: function(val) {
      this.i = val;
    },
    run: function() {
      console.log('процесс запущен');
    },
    jump: function() {
      console.log('резкое изменение');
    }
  };
  return {
    facade: function(args) {
      _private.set(args.val);
      _private.get();
      if (args.run) {
        _private.run();
      }
    }
  }
}());

module.facade({run:true, val:10}); // Текущее значение: 10, процесс запущен

//Singleton 
var Singleton_B;
(function(){
    var instance;
    var anticlone_proxy;

    Singleton_B = function(){
        if( instance ){ return instance; }

        instance = 
        {
            _counter: 0,
            log: function( text ){ this._counter++; console.log( text + this._counter ); }
        }

        anticlone_proxy =
        {
            log: function( text ){ return instance.log( text ); }
        }

        return anticlone_proxy;
    };
})();
