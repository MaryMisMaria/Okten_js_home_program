//1-Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let idButton = document.getElementById('button_one');
idButton.onclick = function () {
    document.getElementById('text').style.display = 'none';
};
//  2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let tagButton = document.createElement('button');
document.body.appendChild(tagButton);
tagButton.classList.add('click');
tagButton.style.background = 'red';
tagButton.style.height = '100px';
tagButton.style.width = '100px';
tagButton.innerText = 'CLICK';
tagButton.onclick = function () {
    this.style.display = 'none';
}

//3- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let btn = document.getElementById('btn1');
// btn.onsubmit= function (e){
//     let ageUser = document.getElementsByClassName('user_age');
//    console.log(this.ageUser.value);
// let formEvent=document.getElementById('enterAge');
// formEvent.onsubmit=function (e){
//     e.preventDefault();
//     console.log(e.ageUser.value);
// }
// let ageUser = document.getElementsByClassName('userAge');
// let form=document.forms.age;
// console.log(form);
// form.onsubmit=function (e){
//     e.preventDefault();
//   if (+this.ageUser.value<18){
//       console.log('you cannot log in');
//   }else{
//       console.log('Welcome');
//   }
// };
//4- Создайте меню, которое раскрывается/сворачивается при клике

// let classMenu=document.getElementsByClassName('menu')[0];
// classMenu.onclick=function (){
//    classMenu.classList.add('menuM');
// }
// classMenu.addEventListener('click',function (){ classMenu.classList.add('menuM')});
//5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// - Вывести список комментариев в документ, каждый в своем блоке.
//- Добавьте каждому комментарию по кнопке для сворачивания его body.

let menuCome = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lo', body: 'lorem ipsum sit ameti'},
    {title: 'ira', body: 'lorem ipsum dolo ameti'},
    {title: 'tomato', body: 'lorem ipsum dolo sit ameti'},
    {title: 'banana', body: 'lorem '},
    {title: 'red', body: 'sit ameti'}
];

for (let item of menuCome) {
    let divMain = document.createElement('div');
    document.body.appendChild(divMain);
    let titleDiv = document.createElement('h2');
    titleDiv.innerText = item.title;
    let bodyDiv = document.createElement('div');
    bodyDiv.innerText = item.body;
    bodyDiv.classList.add('body-come');
    let btn = document.createElement('button');
    btn.innerText = 'click';
    // btn.addEventListener('click', function () {
    //     btn.classList.toggle('hide-body')
    // });
    btn.onclick=function (){
        btn.classList.add('hide-body');
    };
    document.body.appendChild(divMain);
    divMain.appendChild(titleDiv);
    divMain.appendChild(bodyDiv);
    divMain.appendChild(btn);
}