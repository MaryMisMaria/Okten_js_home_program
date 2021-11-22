//1---- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('_____________1______________');
function minNumber(a,d,c){
    if(a>d && a>c && d<c){
        console.log(d);
    }else if(a<d && a<c && d<c){
        console.log(a);
    }else {
        console.log(c);
    }
}
minNumber(2,4,5);
//2- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('_____________2______________');
function maxNumber(a,d,c){
    if(a>d && a>c && d<c){
        console.log(a);
    }else if(a<d && a<c && d>c){
        console.log(d);
    }else {
        console.log(c);
    }
}
maxNumber(2,5,8);
//3- створити функцію яка повертає найбільше число з масиву
console.log('_____________3_____________');
function arrayMax(array_number){
    let max_value=array_number[0];
    for (let element of array_number){
        if(element > max_value){
            max_value=element;
        }
    }
    return max_value;
}
console.log(arrayMax([1,3,5,6,888,90]));
//4- створити функцію яка повертає найменьше число з масиву
console.log('_____________4_____________');
function arrayMin(array_numbers){
    let min_value=array_numbers[0];
    for (let element of array_numbers){
        if(element < min_value){
            min_value=element;
        }
    }
    return min_value;
}
console.log(arrayMin([1,3,5,6,888,90]));
//5- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('_____________5______________');
let sum_arr=0;
function arraySum(array){
  for (let item of array){
      sum_arr+=item;
  }
  return sum_arr;
}
console.log(arraySum([1,3,5,5]));

//6- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('_____________6______________');
function arrayAverage(array){
    let sum=0;
    for (let item of array){
        sum+=item;
    }
   let  average_value=sum/array.length;
    return average_value;
}
console.log(arrayAverage([1,3,5,5]));
//7-- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
console.log('_____________7_____________');
function minMax(array){
    let min_val=array[0];
    let max_val=array[0];
    for(let element of array){

        if (max_val>element){
            max_val=element;
        }
        if (element<min_val){
            min_val=element;
        }
    }
    console.log(max_val);
    return min_val;
}
minMax([6,4,6,7]);
//8- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log('_____________8_____________');
function randomArray(size){
    let array=[];
  for(let i=0; i<size;i++){
      array[i]=Math.round(Math.random()*100);
  }
  return array;
}
console.log(randomArray(10));
//9- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
console.log('_____________9_____________');
function randomLimit(size,limit){
    let array=[];
    for(let i=0; i<size;i++){
        array[i]=Math.round(Math.random()*limit);
    }
    return array;
}
console.log(randomLimit(20,7));
//10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log('______________10____________');
function backArray(array){
    let back_array=[ ];
    for (let i =array.length-1,j=0;i>=0;i--,j++){
        back_array[j]=array[i];
    }
    return back_array;
}
console.log(backArray([467,9865,96]));
