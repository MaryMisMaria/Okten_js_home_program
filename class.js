//є масив -
// створити під кожен обєкт свій блок з конопкою "додати до улюблених" при натисканні на яку обєкт
// потрапляє до масиву favorites улюблених обраних обєктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let key='value';
localStorage.setItem(key, JSON.stringify([]));
for(let item of users){
    let divMain=document.createElement('div');
    divMain.classList.add('main');
    let mainName=document.createElement('div');
    mainName.innerText=item.name;
    mainName.classList.add('box');
    let ageName=document.createElement('div');
    ageName.classList.add('box');
    ageName.innerText=item.age;
    let statusName=document.createElement('div');
    statusName.classList.add('box');
    statusName.innerText=item.status;
    let btn=document.createElement('button');
    btn.innerText='Add to favorites';
    btn.onclick=function (){
        const favoritesUser = JSON.parse(localStorage.getItem(key));
        favoritesUser.push(item);
        localStorage.setItem(key, JSON.stringify(favoritesUser));
        btn.disabled = true;
    };
    divMain.appendChild(mainName);
    divMain.appendChild(ageName);
    divMain.appendChild(statusName);
    document.body.appendChild(divMain);
    divMain.appendChild(btn);
}
