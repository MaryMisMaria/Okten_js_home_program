//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//1. перебрати його циклом while
console.log('________1__________');
let i = 0;
while (i < array.length) {
    console.log(`${array[i]} - порядовий номер елемента у масиві ${i}`);
    i++;
}
console.log('________2__________');
//2. перебрати його циклом for
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]} - порядовий номер елемента у масиві ${i}`);
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('________3__________');
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(`${array[i]} - порядовий номер елемента у масиві ${i}`);
    }
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('________4__________');
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
        console.log(`${array[i]} - порядовий номер елемента у масиві ${i}`);
    }
}
//5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('________5__________');
let k = 0;
while (k < array.length) {
    if (array[k] % 2 === 0) {
        console.log(`${array[k]} - порядовий номер елемента у масиві ${k}`);
    }
    k++;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('________6__________');
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(`${array[i]} - порядовий номер елемента у масиві ${i}`);
    }
}
//7. замінити кожне число кратне 3 на слово "okten"
console.log('________7__________');
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = 'Okten';
    }
    console.log(array[i]);
    document.write('<div>');
    document.write(`${array[i]}`);
    document.write('</div>');
}

//   8. вивести масив в зворотньому порядку.
console.log('________8_________');
let array1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let count_mas = array1.length-1;
for( let i=count_mas; i>=0;i--){
    console.log(array1[i]);
}
//9.1 всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let array_number = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('________9.1__________');
let l = array_number.length-1;
while (l>=0) {
    console.log(`${array_number[l]} - порядовий номер елемента у масиві ${l}`);
    l--;
}
console.log('________9.2__________');
//9.2. перебрати його циклом for
for (let i = array_number.length-1; i>=0; i--) {
    console.log(`${array_number[i]} - порядовий номер елемента у масиві ${i}`);
}
//9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('________9.3__________');
for (let i =array_number.length-1;i>=0;i--) {
    if (i % 2 === 0) {
        console.log(`${array_number[i]} - порядовий номер елемента у масиві ${i}`);
    }
}
//9.4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('________9.4__________');
for (let i = array_number.length-1;i>=0; i--) {
    if (i % 2 === 1) {
        console.log(`${array_number[i]} - порядовий номер елемента у масиві ${i}`);
    }
}
//9.5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('________9.5__________');
let z = array_number.length-1;
while (z>=0) {
    if (array_number[z] % 2 === 0) {
        console.log(`${array_number[z]} - порядовий номер елемента у масиві ${z}`);
    }
    z--;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('________9.6__________');
for (let i =array_number.length-1;i>=0; i--) {
    if (array_number[i] % 2 === 0) {
        console.log(`${array_number[i]} - порядовий номер елемента у масиві ${i}`);
    }
}
//7. замінити кожне число кратне 3 на слово "okten"
console.log('________9.7__________');
for (let i = array_number.length-1;i >=0; i--) {
    if ((array_number [i] % 3 )=== 0) {
        array_number[i] = 'Okten';
    }
    console.log(array_number[i]);
    document.write('<div>');
    document.write(`${array_number[i]}`);
    document.write('</div>');
}
