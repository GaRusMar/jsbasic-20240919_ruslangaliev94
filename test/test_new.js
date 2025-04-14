// 3 Способа объявления переменных

// var let const

//имя переменной не может начинаться с числа

//Имя переменной чустивительно к регистру

//var поддерживается в новом js

var user = 'John';

console.log('user', user);

var user = 'Bob';

console.log('user', user);

// область видимости переменной


// переменные которые объявлены через var не блочной области видимости, у них глобальная область видимости или область видимости функции
if (5 > 2) {
  var user = 'Max';
}
console.log('user', user);


//у let блочная область видимости, поэтому надо перед блоком надо объявлять
if (5 > 2) {
  let user = 'Ruslan';
}
console.log('user', user);


//const неизменяемая константа


const age = 30;
// age = 31; TypeError: Assignment to constant variable.

// константе мы не можем присвоить другое значение


// типы данных их всего 8

// number
let num = 7;
let floatNum = 7.5;

//BigInt
// новый тип данных для больших целых чисел(не дробные), для крипты например
// есть ограничения чисел
// 2**53 - 1
// -2**53 + 1

let bigNum = 1n;


//string строка
let firstName = 'Arnold';
let lastName = "Shwarzneger";

// кавычки можно писать разные

let str = 'I\'m happy'; //экранировали кавычку
str = "I\'m happy"; //или используем другие кавычки и все

//еще третий вид кавычек Template string или обратные кавычки, для выполнения операций.
// Поддерживается форматирование например перенос строки
// для других кавычек использовать /n
let str2 = `Hello ${2 + 2}`;
console.log(str2);


//boolean
true;
false;


console.log(5 > 2);


// null - значение не известно на данный момент, но потом мы его узнаем или получаем элемент которого нет
null;
let userAge = null;

// underfined - значение не определено например объявили переменную и не зажади никакого значения
// underfined;
let someVar;
// console.log('someVar:', someVar); //underfined is not defined


//Symbol - новый тип данных для создания уникальных индификаторов


//Object


// Преобразование типов
// JS - динамическая типизация

//Преобразование к строке
// все что мы хотим показт пользваотелю например в alert все будет строка
//promt всегда возварщает строку

// При сложении
console.log(5 + 5); //тут 5 операнды, а + это оператор   = 10
console.log(5 + "5"); //тут 5 операнды, а + это оператор  = 55


// Преобразрвание к числу
console.log(4 / '2'); // число 2
console.log(4 - '2'); // число 2
console.log(4 - '2px'); // NaN так как JS не смог преобразвать к числу NaN - not a number

console.log(typeof 'test'); //string
console.log(typeof 1); //number
console.log(typeof undefined); //undefined
console.log(typeof null); //object - прикол JS - ошибка
console.log(typeof NaN); //number NaN — это специальное значение, обозначающее "не число", но технически оно принадлежит к типу number

console.log(typeof typeof 5); //string

console.log(4 - parseInt('2px')); // преобразуем к числу с помощью parseInt
console.log(4 - parseFloat('2.5px')); // преобразуем к числу с помощью parseFloat


//преобразвание к логическому или boolean

let condition = 123;


if (5 > 2) {
  console.log('IF равен true');
}
if (1) {
  console.log('IF равен true');
}

//false - 0, отрицательное число, пустая строка '', null, undefined, NaN
//все остальное true


// Сравнение
console.log(5 == '5');
console.log(5 === '5'); //строгое сравнение, так проверяется тип данных

//Инкрементирование

let a = 1;
// a = a + 1;
// a += 1;


// Постинкремент
a++; //2
console.log(a);

// Постденкремент
a--;
console.log(a);

// Прединкрмент
++a;

// Предденкремент
--a;


// Все дело в операторах, = тоже оператор

let b = 1;
let c = b++;

console.log(b);
console.log(c); //сначала записалось значие b т.е 1, а затем уже идет b увеличивается на 1


let d = 1;
let e = ++d;

console.log(d);
console.log(e); //сначала увеличолсь значие d


let x = 0;
console.log(x++); //0
console.log(++x); //2


// логические операторы JS

// И ИЛИ ОТРИЦАНИЕ


// ИЛИ ||

// let or = 0 || 123;
// console.log('or', or); //1 // возварщается сам операнд если true

let or = 0 || 'test' || 123;
console.log('or', or); //'test' // возварщается 'test' так как первый истиный операнд найден


//И &&
// И выше ИЛИ
let and = 0 && 2; //возвращает первый ложный операнд
console.log(and);

//Отрицание !
let not = !!'test';
console.log(not);

console.log(!!1);
console.log(!!0);


console.log(5 + '5'); //55
console.log(5 + +'5'); //10
console.log(5 + -'5'); //0
console.log(5 + Number('-5')); //0
console.log(5 + Number('5')); //10
console.log(5 + Number('5px')); //`NuN`


console.log('test'.length);
