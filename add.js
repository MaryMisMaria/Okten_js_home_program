//- Дано натуральное число n. Выведите все числа от 1 до n.
console.log('______________1_________');

function numbers(n) {
    return n ? numbers(n - 1) + n.toString() : "";
}

console.log(numbers(9));
//
//- Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
console.log('__________2_________');

function comparison(a, b) {
    if (a < b) {
        let i = a;
        while (i <= b) {
            console.log(i);
            i++;
        }
    } else if (a > b) {
        let i = a;
        while (i >= b) {
            console.log(i);
            i--;
        }
    }
}

console.log('__________Вивід a<b_________');
comparison(5, 9);
console.log('__________Вивід a>b_________');
comparison(15, 9);
//3 -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
console.log('__________3_________');

function rearrangement_of_elements(array, i_num) {
    for (let i = 0; i < array.length; i++) {
        if (i === i_num) {
            let result = array[i];
            array[i] = array[i + 1];
            array[i + 1] = result;
        }
    }
    console.log(array);
}

rearrangement_of_elements([9, 8, 0, 4], 0);
console.log('__________3.2_________');
rearrangement_of_elements([9, 0, 8, 4], 0);
console.log('__________3.3_________');
rearrangement_of_elements([9, 8, 4, 0], 0);
//4- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('______________4__________');
function zero_sort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            let result = array[i];
            array[i] = array[array.length-1];
            array[array.length-1] = result;
        }
    }
    console.log(array);
}

zero_sort([1,0,6,0,3]);
console.log('______________4.1__________');
zero_sort([1,0,6,0,3]);
console.log('______________4.2__________');
zero_sort([1,0,6,0,3]);

