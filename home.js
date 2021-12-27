//-створити форму з інпутами для name та age.
// При відправці форми записати обєкт в localstorage
// let name=document.getElementById('name');
// console.log(name);
let btn = document.getElementById('btn');
let nameUser = document.forms.user.nameS;
let ageUser = document.forms.user.age;

function saveUser(userName, userAge) {
    let user = {nameUser: userName, ageUser: userAge};
    console.log(user);

};
btn.onclick = function () {
    let value = 'value';
    let user = saveUser(nameUser.value, ageUser.value);
    localStorage.setItem(value, JSON.stringify(user));
    let newArr = [];
    let users = newArr.push(nameUser.value, ageUser.value);
}
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми обєкти зберігаються в масиві в локальному сховищі.
let formMod = document.forms.car;
formMod.onclick = function (e) {
    e.preventDefault();
};
let carData = document.getElementById('carData');
let carModel = document.forms.car.model;
let carType = document.forms.car.type;
let carVolume = document.forms.car.volume;

function saveCar(modelCar, typeCar, volumeCar) {
    let car = {carModel: modelCar, carType: typeCar, carVolume: volumeCar};
    console.log(car);
};

carData.onclick = function () {
    let car = saveCar(carModel.value, carType.value, carVolume.value);
    let item = 'value';
    let newCar = [];
    let cars = newCar.push(car);
    localStorage.setItem(item, JSON.stringify(car));
    localStorage.setItem(item, JSON.stringify(cars));
};