//- створити функцію, яка якщо приймає один аргумент,
// просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function change(){
//     for (let i=0; arguments.length;i++){
//         if(arguments===null ||arguments===undefined){
//             console.log(arguments);
//         }
//         else if (arguments){
//             const res=arguments[0].concat(arguments[1]);
//             return res;
//         }
//     }
function change() {
    let res = 0;
    for (let argument of arguments) {
        if (arguments.length === null) {
            console.log(arguments);
        } else if (arguments.length > 1) {
            let res = res+argument;
        }
    }
    console.log(res);
}
/// або другий спосіб
function f(obj1, obj2) {
    if (!obj1 && !obj2){
        return 'bad values';
    }
    if (!obj1){
        return obj2;

    } else if (!obj2){
        return obj1;

    } else {
        return obj1+obj2;
    }
}
let a, b;

console.log(f(a, b));
console.log(change(3,9));
console.log(change('a', 'c', 7));
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function f(arr1, arr2) {
    let res = [];
    for (let i = 0, j = 0, k = 0; i < arr1.length, j < arr2.length; i++, j++, k++) {
        if (i === j) {
            res[k] = arr1[i] + arr2[j];
        }
        console.log(res[k]);
    }
}

f([12, 3, 789], [2, 7, 4]);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function object(arr) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        for (const arrElementKey in arrElement) {
            resArr.push(arrElement[arrElementKey]);
        }
    }
    console.log(resArr);
}

object(array);
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function object2(arr) {
    let resArray = [];
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        for (const arrKey in arrElement) {
            resArray.push(arrKey);
        }
    }
    console.log(resArray);
}

object2(array);