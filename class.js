//
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1=document.createElement('form');
// let form2=document.createElement('form');
// let inputName1=document.createElement('input');
// let inputAge1=document.createElement('input');
// let inputName2=document.createElement('input');
// let inputAge2=document.createElement('input');
//
// form1.appendChild(inputName1);
// form1.appendChild(inputAge1);
// form2.appendChild(inputName2);
// form2.appendChild(inputAge2);
// document.body.appendChild(form1);
// document.body.appendChild(form2);
///// document.getElementById('btnSave').onclick=function (){
//     let inputOneName=document.forms.f1.name1.value;
//     let inputOneAge=document.forms.f1.age1.value;
//     let inputTwoName=document.forms.f2.name2.value;
//     let inputTwoAge=document.forms.f2.age2.value;
//     console.log(inputOneName,inputOneAge,inputTwoName,inputTwoAge);
// }
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// //(Додатковачастина для завдання)
// let btn = document.forms['createT'];
// btn.onsubmit = function (e) {
//     e.preventDefault();
//     let column = +btn.column.value;
//     let row = +btn.row.value;
//     let item = btn.item.value;
//   //  console.log(column, row, item);
//     let table = document.createElement('table');
//     for(let i=0;i<row;i++){
//        let tr= document.createElement('tr');
//         table.appendChild(tr);
//         for(let j=0;j<column;j++){
//             let td= document.createElement('td');
//             tr.appendChild(td);
//             td.innerText=item;
//         }
//     }
//
//     document.body.appendChild(table);
//
// };

//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку
let arrayWorld=['бистро','red','mess'];
let checkBtn=document.getElementById('check');
checkBtn.onclick=function (){
    let enter=document.getElementById('enter').value;
    for (let item of arrayWorld){
        if(enter===item){
            console.log('you enter bad world');
        }
    }
}
//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//   Кинути алерт з попередженням у випадку якщо містить.
//   Перевірку робити при натисканні на кнопку

let arraySentence=['бистро','red','mess'];
let checkBtnS=document.getElementById('check');
checkBtnS.onclick=function (){
    let enter=document.getElementById('enter').value;
    for (let item of arraySentence){
        if(enter.includes(item)){
            console.log('you enter bad sentence');
        }
    }
}