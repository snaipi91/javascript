// observable

/**
 @class Tape
 @constructor
 */
function Tape() {
    let photos = [],
        subscribes = [];

    /**
     @type Function
     @param {object} user
     */
    Tape.prototype.subscribe = observer => {
          subscribes.push(observer);
    };

    /**
     @type Function
     @param {object} user
     */
    Tape.prototype.unsubscribe = observer => {
        subscribes.forEach((subscribe, i) => {
            if(subscribe.lastName === observer.lastName) {
                subscribes.splice(i, 1)
            }
        });
        console.log(subscribes);
    };

    Tape.prototype.setPhoto = photo => {
        if(!photo) {
            throw new Error();
        }

        photos.push(photo);
        subscribes.forEach(subscribe => {
            subscribe.msg(subscribe);
        })
    };

    Tape.prototype.getPhotos = () => {
        return subscribes;
    }
}

/**
 @class User
 @constructor
 */
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    User.prototype.msg = (subscribe) => {
        console.log(`${subscribe.firstName} ${subscribe.lastName} - add new photo for you`);
    }
}

let tape = new Tape(),
    jsperov = new User('Andrey', 'Perov'),
    uri93 = new User('Uriy', 'Soloviyev');

tape.subscribe(jsperov);

tape.setPhoto({ main: 'http://photo.me/fjksajkf.jpeg'});
tape.setPhoto({ main: 'http://photo.me/fjk.jpeg'});

tape.subscribe(uri93);

tape.setPhoto({ main: 'http://photo.me/png24.jpg'});

tape.unsubscribe(jsperov);

/* console.log

    Andrey Perov - add new photo for you
    Andrey Perov - add new photo for you
    Andrey Perov - add new photo for you
    Uriy Soloviyev - add new photo for you

*/
