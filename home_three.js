//1)))))))--створити масив з:
//    - з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль
let array= [1,2,3,4,5];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log(array);
//або виводимо кожне значення масиву поетапно
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
let array_string=['Ivan','Roman','Oksana','Lana','Ira'];
// виводимо кожне значення масиву поетапно
console.log(array_string[0]);
console.log(array_string[1]);
console.log(array_string[2]);
console.log(array_string[3]);
console.log(array_string[4]);
//all elements
console.log(array_string);
//з 5 значень стрічкового, числового та булевого типу
let array_mas=['Lila','Mary','false','true',5,78,'marta'];
console.log(array_mas[0]);
console.log(array_mas[1]);
console.log(array_mas[2]);
console.log(array_mas[3]);
console.log(array_mas[4]);
console.log(array_mas[5]);
console.log(array_mas[6]);
//all elements
console.log(array_mas);
//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let array_mas1=[''];
array_mas1[0]=2;
array_mas1[1]='Hello';
array_mas1[2]='world';
array_mas1[3]='true';
console.log(array_mas1[0]);
console.log(array_mas1[1]);
console.log(array_mas1[2]);
console.log(array_mas1[3]);
//all elements
console.log(array_mas1);
//виведення за допомогою циклу
for(let i=0;i<array_mas1.length;i++){
    console.log(array_mas1[i]);
}
//
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0;i<10;i++){
    document.write('<div>');
    document.write('I study in Okten');
    document.write('</div>');
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i=1;i<=10;i++){
    document.write('<div>');
    document.write('I buy'+i+'sports suit');
    document.write('</div>');
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i<20){
    document.write('<h1>');
    document.write('Work and study');
    document.write('</h1>');
    i++;
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k=0;
while (k<20){
    document.write('<h1>');
    document.write(`world ${k}`);
    document.write('</h1>');
    k++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі
let number_array=[1,3,54,-45,56,78,90,100,56,-555];
for (let i=0;i<number_array.length;i++){
    console.log(number_array[i]);
}
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let string_value=['cat','dog','elephant','lion','tiger','snakes','monkey','cow','horse','mice'];
for (let i=0;i<string_value.length;i++){
    console.log(string_value[i]);
}
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let different_mass=[true,false,'lion','tiger','snakes',41,'monkey',4,89,-566];
for (let i=0;i<different_mass.length;i++){
    console.log(different_mass[i]);
}
// Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let array_list=['cat','dog','elephant','lion','tiger',true,false,6,8,9];
for (let i=0;i<array_list.length;i++){
    if( typeof array_list[i]==='boolean'){
        console.log(array_list[i]);
    }
}
// Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let array_list1=['tiger',true,false,6,8,9,-444,99,'flat','things'];
for (let i=0;i<array_list1.length;i++){
    if( typeof array_list1[i]==='number'){
        console.log(array_list1[i]);
    }
}
//- Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let array_list2=['tiger',true,false,666,888,999,-444,777,'flat','things','monkey','cow','horse','mice'];
for (let i=0;i<array_list2.length;i++){
    if( typeof array_list2[i]==='number'){
        console.log(array_list2[i]);
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr_list=[''];
arr_list[0]=111;
arr_list[1]='Katy';
arr_list[2]=true;
arr_list[3]='roman';
arr_list[4]=false;
arr_list[5]=123;
arr_list[6]=778;
arr_list[7]='red';
arr_list[8]=-1123;
arr_list[9]='green';
for(let i=0;i<arr_list.length;i++){
    console.log(arr_list[i]);
}
//- Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<10;i++){
    console.log(`${i}`);
    document.write(`<div>`);
    document.write(`${i}`);
    document.write(`</div>`);
}
//- Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for(let m=0;m<100;m++){
    console.log(`${m}`);
    document.write(`<div>`);
    document.write(`${m}`);
    document.write(`</div>`);
}
console.log('____________________');
//- Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write.

for(let k=0;k<200;k+=2) {
    console.log(`Виведення поточного кроку ${k}`);
    document.write(`<div>`);
    document.write(`Виведення поточного кроку ${k}`);
    document.write(`</div>`);
}
//- Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
console.log('________Вивід тільки парних позицій____________');
for(let k=0;k<100;k++) {
    if ((i % 2) === 0) {
        console.log(`${k}`);
        document.write(`<div>`);
        document.write(`${k}`);
        document.write(`</div>`);
    }
}

//- Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
console.log('_________Вивід тільки не парних позицій___________');
for(let k=1;k<100;k++) {
    if((k%2)===1){
        console.log(`${k}`);
        document.write(`<div>`);
        document.write(`${k}`);
        document.write(`</div>`);
    }
}