//Всі функції повинні бути описані стрілочним типом!!!!
// 1- створити функцію яка обчислює та повертає площу прямокутника висотою
console.log('___________1____________');
let rectangle = (a, b) => {
    return a * b
};
console.log(rectangle(3, 5));
// 2- створити функцію яка обчислює та повертає площу кола
console.log('___________2____________');
const pi = 3.14;
let circle = (r) => (pi * Math.pow(r, 2));
console.log(circle(3));
// 3- створити функцію яка обчислює та повертає площу циліндру
console.log('___________3____________');
let cylinder = (r, h) => (pi * Math.pow(r, 2) * h);
console.log(cylinder(3, 5));
// 4- створити функцію яка приймає масив та виводить кожен його елемент
console.log('___________4____________');
let array = (arr) => (console.log(arr));
array([3, 5, 6]);
//5- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
console.log('___________5____________');
let paragraph = (a) => (document.write(`<p>${a}</p>`));
paragraph('hello')
// 6- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('___________6____________');
let list = (a) => (document.write(`<ul>
<li>${a}</li>
<li>${a}</li>
<li>${a}</li>
</ul>`));
list('my homework');
//7- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('___________7___________');
let list2 = (a,list) => {
    for(let i=0;i<list;i++) {
        (document.write(`<ul>
<li>${a}</li>
</ul>`))
    }
};
list2('hello',6);
//8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('_____________8____________');
let arrayList=(arr)=>{
    document.write('<ul>');
    for(let list of arr){
        document.write(`<li>${list}</li>`);
    }
    document.write('</ul>');
};
arrayList([1,3,5,8,true,'f',false,'ar']);
//9- створити функцію яка приймає масив обєктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного обєкту окремий блок.
document.write('_____________9__________');
let users=(arr)=>{
    for(let item of arr){document.write(`<div>  ${item.id} -  ${item.name}  </div>`);}
};
users([{id:1},{name:'mary'}]);
users([{id:2},{name:'maria'}]);