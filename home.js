// 1) Створити змінні. Присвоїти кожному з них значення:
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let b = 'owu';
let c = 'com';
let e = 'ua';
let k = 1;
let z = -999;
let d = 123;
let p = 3.14;
let n = 2.7;
let j = 16;
let m = true;
let l = false;
// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(k);
console.log(z);
console.log(d);
console.log(p);
console.log(n);
console.log(j);
console.log(m);
console.log(l);
alert(a);
alert(b);
alert(c);
alert(e);
alert(k);
alert(z);
alert(d);
alert(p);
alert(n);
alert(j);
alert(m);
alert(l);
document.write('a');
document.write('b');
document.write('c');
document.write('e');
document.write('k');
document.write('z');
document.write('d');
document.write('p');
document.write('n');
document.write('j');
document.write('m');
document.write('l');
//2)- Переприсвоїти кожній змінній з завдання значення на довільне.
a = 'hello world';
b = 'cats';
c = 'dogs';
e = 'time';
k = 100;
z = 9;
d = 3;
n = 2.75678;
j = 1600;
m = false;
l = true;
//Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(k);
console.log(z);
console.log(d);
console.log(p);
console.log(n);
console.log(j);
console.log(m);
console.log(l);
alert(a);
alert(b);
alert(c);
alert(e);
alert(k);
alert(z);
alert(d);
alert(p);
alert(n);
alert(j);
alert(m);
alert(l);
//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зєднати їх в одну змінну person
let firstName = 'Mys';
let middleName = 'Maria';
let lastName = 'Mikhalivna';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);
alert(person);
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt('Введіть ваше ім`я:');
console.log(name);
let father_name = prompt('Введіть ваше по-батькові:');
console.log(father_name);
let age = prompt('Введіть ваш вік:');
console.log(age);
console.log(`Вітаю ${name} ${father_name} . Тобі ${age} років`);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let one = 100;
let two = '100';
let three = true;
console.log(typeof (one));
console.log(typeof (two));
console.log(typeof (three));
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
console.log(5 < 6);
//   5 ? 6 -> false
console.log(5 > 6);
//   5 ? 6 -> false
console.log(5 == 6);
//   5 ? 6 -> false
console.log(5 < 6);
//   10 ? 10 -> true
console.log(10 == 10);
//   10 ? 10 -> true
console.log(10 !== 10);
//   10 ? 10 -> false
console.log(10 < 10);
//   10 ? 10 -> false
console.log(10 > 10);
//   10 ? 10 -> false
console.log('10' > '10');
//   123 ? '123' -> false
console.log(123 !== 123);
//   123 ? '123' -> true
console.log(123 == 123);
// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";  // Тут проведена декларація і ініціалізація змінної str типу string
//      let a = 5; // Тут проведена декларація і ініціалізація змінної а типу number
  document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");// атведення але пропущено лапки тому результату не буде
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

