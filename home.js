// //Все робити за допомоги js.
// // - створити блок,
let createDiv = document.createElement('div');
createDiv.classList.add('wrap');
createDiv.innerText = 'hello my world'
createDiv.style.height = '100px';
// // - додати йому класи wrap, collapse, alpha, beta
createDiv.classList.add('wrap');
createDiv.classList.add('collapse');
createDiv.classList.add('alpha');
createDiv.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
createDiv.style.background = 'red';
createDiv.style.color = 'blue';
createDiv.style.fontSize = '10px';
// // - додати цей блок в body.
document.body.appendChild(createDiv);
// - клонувати його повністю, та додати клон в body.
let cloneDiv = createDiv.cloneNode(true);
document.body.appendChild(cloneDiv)

// - Є масив:

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let classM = document.getElementsByClassName('menu')[0];
let array = ['Main', 'Products', 'About us', 'Contacts'];
for (let count of array) {
    let createLi = document.createElement('li');
    createLi.innerText=count;
    classM.appendChild(createLi);
}
// // - Є масив
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
 ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
 for(let count of coursesAndDurationArray){
  let divProduct = document.createElement('div');
   divProduct.innerText=`${count.title} ${count.monthDuration}`;
  document.body.appendChild(divProduct);
 }
// - Є масив
     let coursesAndDurationArrayX = [
         {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
         {title: 'Python Complex', monthDuration: 6},
         {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4},
     ];
// За допомоги скріпта для кожного елементу масиву зробит1и <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
    for (let item of coursesAndDurationArrayX) {
         let createDiv = document.createElement('div');
         document.body.appendChild(createDiv);
         createDiv.classList.add('item');
         let createH1=document.createElement('h1');
         createH1.classList.add('heading');
         createDiv.appendChild(createH1);
         createH1.innerText=item.title;
         let createP=document.createElement('p');
         createP.classList.add('description');
         createP.innerText=item.monthDuration;
         createDiv.appendChild(createP);
    }