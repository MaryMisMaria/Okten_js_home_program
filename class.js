//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) додає клас з назвою групи, елементу з ід main_header
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add('group');
//     b) робить шириниу елементу ul 400px
let tagUl = document.getElementsByTagName('ul');
for (let item of tagUl) {
    item.style.width = '400px';
    item.style.color = 'red';
    item.style.background = 'green';
}
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
let getClassLinkList = document.getElementsByClassName('linkList');
for (let item of getClassLinkList) {
    item.style.width = '50%';
    item.style.color = 'black';
    item.style.background = 'yellow';
}
//     d) отримує текст який зберігається в елементі з класом listElement2
let classListElement2 = document.getElementsByClassName('listElement2');
for (let item of classListElement2) {
    item.innerHTML = 'hello world';
}
//     e) отримує всі елементи li та змінює ім колір фону на сірий
let tagLi = document.getElementsByTagName('li');
for (let item of tagLi) {
    item.style.background = 'grey';
}
//     f) отримує всі елементи 'a' та додає їм клас anchor
let aAll = document.getElementsByTagName('a');
for (let item of aAll) {
    item.classList.add('anchor');
}
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aAllX = document.getElementsByTagName('a');
for (let item of aAllX) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
        item.style.color = 'red';
    }
}
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aAllXXX = document.getElementsByTagName('a');

for (let item of aAllXXX) {
    let XXX = item.innerText;
    item.classList.add(`element_${XXX}`);
}
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
for (let item of subHeader) {
    item.style.background = prompt('Введіть значення кольору');
}
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeader1 = document.getElementsByClassName('sub-header');
for (let item of subHeader1) {
    if (item.innerText === 'content 2 segment') {
        item.style.background = prompt('Введіть значення кольору');
    }
}
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let classContent_1 = document.getElementsByClassName('content_1');
for (let item of classContent_1) {
    item.innerText = prompt('Введіть повідомлення');
}
//     l) отримати елементи p та змінити їм padding на 20px
let elementP = document.getElementsByTagName('p');
for (let item of elementP) {
    item.style.padding = '20px';
    item.style.background = 'red';
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let classText2 =document.getElementsByClassName('text2');
for (let item of classText2) {
    item.innerText = 'sep-2021';
}