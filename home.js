//1- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log('__________1______');
let str='hello world';
console.log(str.length);
console.log('__________1.1______');
let str1='lorem  ipsum';
console.log(str1.length);
console.log('__________1.2______');
let str2='javascript is cool';
console.log(str2.length);
//2- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log('__________2___________');
let strToUpperCase= str.toUpperCase();
console.log(strToUpperCase);
let str1ToUpperCase= str1.toUpperCase();
console.log(str1ToUpperCase);
let str2ToUpperCase= str2.toUpperCase();
console.log(str2ToUpperCase);
//3- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('__________3___________');
let strToLowerCase=str.toLowerCase();
console.log(strToLowerCase);
let str1ToLowerCase=str1.toLowerCase();
console.log(str1ToLowerCase);
let str2ToLowerCase=str2.toLowerCase();
console.log(str2ToLowerCase);
//4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('__________4___________');
let string=' dirty string   ';
let trim=string.trim();
console.log(trim);
console.log('__________5___________');
//5 - Напишіть функцію stringArray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
  // let strS = 'Каждый охотник желает знать';
function stringArray(strS,value){
    let split=strS.split(value);
    console.log(split);
    document.writeln(split);
    return split;
}
stringArray('Каждый охотник желает знать',' ');
//6- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
console.log('____________6_________');
function delete_characters(str, length){
   let result=str.substr(0, length);
   console.log(result);
   return result;
}
delete_characters('Каждый охотник желает знать', 10);
//7- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log('_____________7______________');
function insert_dash(stringS){
      let result= stringS.toUpperCase().split(' ').join('-');
      console.log(result);
      return result;
}
insert_dash('HTML JavaScript PHP');
//8- Напишіть функцію, яка приймає рядок як аргумент і перетворює
// регістр першого символу рядка з нижнього регістру у верхній.
console.log('_____________8_____________');
function stringUpperCase(stringS){
    let res= stringS[0].toUpperCase()+stringS.slice(1);
    console.log(res);
    return res;
}
stringUpperCase('hello world');
//9- Напишіть функцію capitalize(str), яка повертає рядок,
// у якому кожне слово починається з великої літери.
console.log('_____________9____________');
function capitalize(str){
    let result=str.split(' ').map(str=>str.charAt(0).toUpperCase()+str.slice(1)).join(' ');
    console.log(result);
    return result;
}
capitalize('hello my world');