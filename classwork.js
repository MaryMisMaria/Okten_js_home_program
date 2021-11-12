//Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
let array = [1, 22, 44, 'child', 'people'];
console.log(array);
Math.random();
// 3  Створити обєкт book з наступними полями  - назва, кількість сторінок, жанр
let book = [{name: 'Good people', number_pages: 120, genre: 'poem'},
    {name: 'Winter', number_pages: 200, genre: 'tale'},
    {name: 'Red dog', number_pages: 1234, genre: 'poem'}
];
console.log(book[0]);
console.log(book[1]);
console.log(book[2]);
//4. Створити маис обєктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий обєкт
let books = [{name: 'Red Riding Hood', number_pages: 320, genre: 'tale'},
    {name: 'Winter holidays', number_pages: 204, genre: 'tale'},
    {name: 'Red dog', number_pages: 1234, genre: 'poem'},
    {name: '101 Dalmatians', number_pages: 184, genre: 'poem'}
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
// 5 Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s
let height = 23;
let width = 10;
let s = 2 * (height + width);
console.log(s);
//6. Напиши код, який знаходить обєм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v
let heightC = 10;
const pi = 3.14;
let dC = 4;
let rC = dC / 2;
let v = pi * Math.pow(rC, 2) * heightC;
console.log(v);
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора
// (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let c = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(c);

