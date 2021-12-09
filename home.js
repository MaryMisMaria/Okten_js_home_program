//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
console.log('________1_____');
//     -- отримує текст з параграфа з id "content"
let idContent = document.getElementById('content');
console.log(idContent);
//     -- отримує текст з блоку з id "rules"
let idRules = document.getElementById('rules');
console.log(idRules);
//     -- замініть текст параграфа з id 'content' на будь-який інший
idContent.innerHTML = 'Okten';
//     -- замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerHTML = 'Okten hello';
//     -- змініть кожному елементу колір фону на червоний
let allElements = document.body.children;
for (let element of allElements) {
    element.style.background = 'red';
}
//     -- змініть кожному елементу колір тексту на синій
let allText=document.body.children;
for (let element of allText) {
 element.style.color = 'blue';
}
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classContentId = document.getElementById('rules');
console.log(classContentId.classList);
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classFc_rules=document.getElementsByClassName('fc_rules');
for (let element of classFc_rules){
    element.style.color='green';
}