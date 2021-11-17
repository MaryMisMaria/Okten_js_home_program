//1. Створити пустий масив та :
// let array = [' '];
// //a. заповнити його 50 парними числами за допомоги циклу.
//for(let i=0;i<100;i++){
//     array[i]=1+array[i];
//     console.log(array[i]);
// }
// b. заповнити його 50 непарними числами за допомоги циклу.
//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log('____________________________________________');
let array_mas=[ ];
for (let i=0;i<20;i++){
    array_mas[i]=Math.floor(Math.random()*10)+6;
    console.log(array_mas[i]);
}
//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
console.log('_____________________1.d_______________________');
let array_mas1=[ ];
for (let i=0;i<20;i++){
    array_mas1[i]=Math.floor(Math.random()*732)+8;
    console.log(array_mas[i]);
}
console.log('____________________2______________________');
//2. Вивести за допомогою console.log кожен третій елемен
let array_mas2=[ ];
for (let i=0;i<20;i++){
    array_mas2[i]=Math.floor(Math.random()*732)+8;
    if(i%3===0){
        console.log(array_mas2[i]);
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
console.log('____________________3_____________________');
let array_mas3=[ ];
for (let i=0;i<20;i++){
    array_mas3[i]=Math.floor(Math.random()*732)+8;
    if(i%3===0){
        if(array_mas3[i]%2===0 ){
            console.log(array_mas3[i]);
        }
    }
}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// та записати їх в новий масив
console.log('____________________4_____________________');
let array_mas4=[ ];
let array_new=[ ];
for (let i=0;i<20;i++) {
    array_mas4[i] = Math.floor(Math.random() * 732) + 8;
    if (i % 3 === 0) {
        if (array_mas4[i] % 2 === 0) {
            array_new[i] = array_mas4[i];
            console.log(array_new[i]);
        }
    }
}
console.log('_________5_____________');
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let array_number=[1,4,67,8,9,9,87,6,99,55456,4636,36,1];
for(let i=0;i<array_number.length;i++){
    if( array_number[i]%2===0){
        console.log(array_number[i-1]);
    }
}
//
//6. Є масив з числами [100,250,50,168,120,345,188],
 //   Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('_________6____________');
let mass_purchase=[100,250,50,168,120,345,188];
let sum_array;
for(let i=0;i<mass_purchase.length;i++){
    sum_array=(+mass_purchase[i])/2;
}
console.log(sum_array);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('_________7___________');
let array_ran=[ ];
let array_ran_multiply=[ ];
for (let i=0;i<5;i++){
    array_ran[i]=Math.floor(Math.random()*732)+8;
    console.log(array_ran[i]);
    array_ran_multiply[i]=5*(array_ran[i]);
    console.log(array_ran_multiply[i]);
}
//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
console.log('_________8__________');
let different_mass=['tiger',true,false,666,888,999,-444,777,'flat','things','monkey','cow','horse','mice'];
for(let i=0;i<different_mass.length;i++){
    if( typeof (different_mass[i])==='number'){
        console.log(different_mass[i]);
    }
}
////////////////////////////- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
   {id: 1, name: 'vasya', age: 31, status: false},
   {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
 let citiesWithId = [
     {user_id: 3, country: 'USA', city: 'Portland'},
     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
     {user_id: 2, country: 'Poland', city: 'Krakow'},
     {user_id: 4, country: 'USA', city: 'Miami'}
 ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
console.log('__________Вивід обєднаних масивів__________');
const users=usersWithId.concat(citiesWithId);
console.log(users);
for(const user of users){
    console.log('_____________________');
    for (const key in user){
        console.log(key,user[key]);
        console.log('_____________________');
    }
}
 //- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('_________________9____________________');
let array_numbers=[1,4,67,8,9,9,87,6,99,55456,4636,36,1];
for(let i=0;i<array_numbers.length;i++){
    if(array_number[i]%2===0){
        console.log(array_numbers[i]);
    }
}
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log('_________________10____________________');
let array_numbers1=[1,4,67,8,9,8,7,6,99,55,456,46,36,36,1];
let new_arr_num=[];
for (let i=0;i<array_numbers.length;i++){
    new_arr_num[i]=array_numbers1[i];
    console.log(new_arr_num[i]);
}
console.log('_________________11.1____________________');
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let  arr_str=['a','b','c'];
let tmp=[];
for (let i=0; i< arr_str.length; ++i){
    tmp+= arr_str[i];
}
console.log(tmp);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('_________________11.2____________________');
let k=0;
let tmp1=[];
while (k<arr_str.length){
    tmp1+=arr_str[k];
    k++;
}
console.log(tmp1);
console.log('_________________11.3____________________');
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let  arr_str1=['a','b','c'];
// for (let m of arr_str1){
//     tmp2+=arr_str1[m];
// }
// console.log(tmp2);
const arr_str1 = ['a', 'b', 'c'];
let tmp2=[ ];
for (let element of arr_str1) {
    tmp2+= element;
}
console.log(tmp2);

