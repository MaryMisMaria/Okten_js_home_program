//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let checkStat = document.getElementById('status');
// console.log(checkStat);
// let newArr=[ ];
// checkStat.onclick = function () {
//     if (this.checked) {
//         console.log(usersWithAddress.filter((value => !value.status)));
//      //  document.body.appendChild(usersWithAddress.filter((value => !value.status)));
//     } else {
//         console.log(usersWithAddress.filter((value => value.status)));
//     }
// };
// let checkAge = document.getElementById('age');
// console.log(checkAge);
// checkAge.onclick = function () {
//     if (this.checked) {
//         console.log(usersWithAddress.filter((value => value.age>29)));
//     } else {
//         console.log(usersWithAddress.filter((value => value.age<29)));
//     }
// };
// let checkCity = document.getElementById('city');
// console.log(checkCity);
// checkCity.onclick = function () {
//     if (this.checked) {
//         console.log(usersWithAddress.filter((value => value.address.city==='Kyiv')));
//     } else {
//         console.log(usersWithAddress.filter((value => value.address.city='different')));
//     }
// };
let checkStatus=document.getElementById('status');
checkStatus.onclick=function (){
  if(this.checked){
      for (let item of usersWithAddress){
          if (item.status === false) {
              let main=document.createElement('div');
              let id=document.createElement('div');
              id.innerText=item.id;
              let name=document.createElement('div');
              name.innerText=item.name;
              let age=document.createElement('div');
              age.innerText=item.age;
              let status=document.createElement('div');
              status.innerText=item.status;
              let address=document.createElement('div');
              id.innerText=`${item.address.city} ${item.address.street}  ${item.address.number}`;
              main.appendChild(id);
              main.appendChild(name);
              main.appendChild(age);
              main.appendChild(status);
              main.appendChild(address);
              document.body.appendChild(main);
          }
      }
  }
};
let checkCity=document.getElementById('city');
checkCity.onclick = function (){
    if(this.checked){
        for (let item of usersWithAddress){
            if (item.address.city==='Kyiv') {
                let mainCity=document.createElement('div');
                let id=document.createElement('div');
                id.innerText=item.id;
                let name=document.createElement('div');
                name.innerText=item.name;
                let age=document.createElement('div');
                age.innerText=item.age;
                let status=document.createElement('div');
                status.innerText=item.status;
                let address=document.createElement('div');
                id.innerText=`${item.address.city} ${item.address.street}  ${item.address.number}`;
                mainCity.appendChild(id);
                mainCity.appendChild(name);
                mainCity.appendChild(age);
                mainCity.appendChild(status);
                mainCity.appendChild(address);
                document.body.appendChild(mainCity);
            }
        }
    }
};

let checkAge=document.getElementById('age');
checkAge.onclick = function (){
    if(this.checked){
        for (let item of usersWithAddress){
            if (item.age>29) {
                let mainAge=document.createElement('div');
                let id=document.createElement('div');
                id.innerText=item.id;
                let name=document.createElement('div');
                name.innerText=item.name;
                let age=document.createElement('div');
                age.innerText=item.age;
                let status=document.createElement('div');
                status.innerText=item.status;
                let address=document.createElement('div');
                id.innerText=`${item.address.city} ${item.address.street}  ${item.address.number}`;
                mainAge.appendChild(id);
                mainAge.appendChild(name);
                mainAge.appendChild(age);
                mainAge.appendChild(status);
                mainAge.appendChild(address);
                document.body.appendChild(mainAge);
            }
        }
    }
};