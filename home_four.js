//1---- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('_____________1___________');
function area_rectangle(a, b) {
    return a * b;
}
console.log(area_rectangle(2, 3));
console.log('_____________2___________');
//2- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle_area(r){
    const pi=3.14;
    return 2*pi*Math.pow(r,2);
}
console.log(circle_area(5));
//3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('_____________3____________');
function cylinder_area(r,h){
    const pi=3.14;
  return 2*pi*r*h;
}
console.log(cylinder_area(3,5));
//4- створити функцію яка приймає масив та виводить кожен його елемент
console.log('_____________4____________');
let array=[111,222,333,444,555,666,777];
function array_give(array) {
    // for(let elem of array){
    //     console.log();
    // }
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
array_give(array);
// 5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('_____________5____________');
function listParagraph(a){
    document.write('<p>');
    document.write(`${a}`);
    document.write('</p>');
}
listParagraph('hello');
// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('_____________6____________');
function listCreate(a){
    document.write('<ul>');
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write('</ul>');
}
listCreate('Study');
// 7- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
document.write('_____________7____________');
function listCreate2(a,list){
    document.write('<ul>');
    for(let i=0;i<list;i++){
        document.write(`<li>${a} ${i}</li>`);
    }
    document.write('</ul>');
}
listCreate2('hello friends',5);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('_____________8____________');
function listArray(array){
    document.write('<ul>');
    for(let list of array){
        document.write(`<li>${list}</li>`);
    }
    document.write('</ul>');
}
listArray([1,3,5,8,true,'f',false,'ar']);
//9- створити функцію яка приймає масив обєктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного обєкту окремий блок.
document.write('_____________9__________');
function users(arr){
    for(let item of arr){
        document.write(`<div>  ${item.id} -  ${item.name}  </div>`);
    }
}
users([{id:1},{name:'mary'}]);
