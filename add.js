//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str,n){
   while(str.length){
       let resArr=[];
              resArr.push(str.substring(0,n));
              str=str.substring(0,n);
              str.length++;
   }
}
console.log(cutString('ffytfvguilh.j',2));