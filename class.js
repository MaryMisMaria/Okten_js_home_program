//1-- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
console.log('_______________1__________________');

function validName(name) {
    let res = name
        .replaceAll('__', ' ')
        .replaceAll('..', ' ')
        .replaceAll('---', ' ');
    return res;
}

console.log(validName('Ron__Whisley'));
console.log(validName('Hermione__Granger'));
console.log(validName('Harry..Potter'));

//2- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log('_______________2__________________');

function randomize(number) {
    let arrRandom = [];
    for (let i = 0; i < number; i++) {
        arrRandom.push(Math.round(Math.random() * 100));
    }
    return arrRandom;
}

console.log(randomize(30));

//3-- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log('_________3_____________');
let arrSort = randomize(30);
let sorted = arrSort.sort((a, b) => a - b);
console.log(sorted);
let sorted1 = arrSort.sort((a, b) => b - a);
console.log(sorted1);

//4- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log('____________4____________');
let filter = arrSort.filter(num => (num % 2 === 0));
console.log(filter);

//5-- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові

console.log('____________5___________');
let strArray = randomize(40);
let strArr = strArray.map(num => num.toString());
console.log(strArr);

//6- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого
// , або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log('____________6___________');
let sortNums=(direction,array)=>{
  if(direction==='ascending'){
    return  array.sort((a,b)=>a-b);
  }else if( direction==='descending'){
    return  array.sort((a,b)=>b-a);
  }else {
     return -1;
  }
}
console.log(sortNums('ascending',[11,21,3]));
console.log(sortNums('descending',[11,21,3]));

console.log('___________7_______________');
//7-- є масив
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];
//-- відсортувати його за спаданням за monthDuration
let sortedMonth=coursesAndDurationArray.sort ((a,b)=>a.monthDuration-b.monthDuration);
console.log(sortedMonth);
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('___________курси з тривалістю більше 5 місяців__________');
 let  filteredMonth=coursesAndDurationArray.filter(num=>num.monthDuration>5);
 console.log(filteredMonth);