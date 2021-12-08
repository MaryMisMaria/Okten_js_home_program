// - Створити функцію конструктор яка дозволяє створювати обєкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, обєм двигуна. додати в обєкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і додає його в поточний обєкт car
console.log('______________1_______________');

function Car(model, producer, manufactureOfTheCar, MaxSpeed, engineV) {
    this.model = model;
    this.producer = producer;
    this.manufactureOfTheCar = manufactureOfTheCar;
    this.MaxSpeed = MaxSpeed;
    this.engineV = engineV;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model}, producer - ${this.producer} , manufactureOfTheCar -${this.manufactureOfTheCar}, MaxSpeed - ${this.MaxSpeed}, engineV - ${this.engineV}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.MaxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.manufactureOfTheCar = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = Car('Bmv', 'hermany', '1998', 89, 200);
console.log(car1);
this.drive();
this.info();
this.increaseMaxSpeed(6);
this.changeYear(5);
this.addDriver('mark');
console.log('_______________2________________');
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, producer, manufactureOfTheCar, MaxSpeed, engineV) {
        this.model = model;
        this.producer = producer;
        this.manufactureOfTheCar = manufactureOfTheCar;
        this.MaxSpeed = MaxSpeed;
        this.engineV = engineV;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`);
    };

    info() {
        console.log(`model - ${this.model}, producer - ${this.producer} , 
    manufactureOfTheCar -${this.manufactureOfTheCar}, MaxSpeed - ${this.MaxSpeed}, engineV - ${this.engineV}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.MaxSpeed += newSpeed;
    };


    changeYear(newValue) {
        this.manufactureOfTheCar = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    }
}
let cars2=new Cars('toyota','K',1988,200,300);
cars2.drive();
cars2.info();
cars2.increaseMaxSpeed(6);
cars2.changeYear(9);
cars2.addDriver('Makar');
console.log('_____________3_______________');
//
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// Створити масив з 10 попелюшок.
let Cinderellas = [
    new Cinderella('Mary', 34, 36),
    new Cinderella('Maria', 24, 37),
    new Cinderella('Vira', 29, 38),
    new Cinderella('Ira', 28, 39),
    new Cinderella('Sofia', 21, 40),
    new Cinderella('Jenny', 33, 41),
    new Cinderella('Ivana', 35, 42),
    new Cinderella('Marta', 32, 36),
    new Cinderella('Lila', 30, 38),
    new Cinderella('Mia', 31, 38),
];
console.log(Cinderellas);

////Сторити обєкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}

let prince = new Prince('Roman', 34, 37);
console.log(prince);

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findCinderella(Cinderellas, prince) {
    for (let i of Cinderellas) {
        if (i.footSize === prince.shoes) {
            return console.log( `знайдено попелюшку ${i.name}`) ;
        }
    }
}
findCinderella(Cinderellas, prince);
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderellaM= Cinderellas.find (i => i.footSize===prince.shoes);
console.log(findCinderellaM);