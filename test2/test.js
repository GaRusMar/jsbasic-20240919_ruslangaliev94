let user = 'John'
console.log(user)

user = 'Bob'
console.log(user)

// если let - будет ошибка, второй раз надо убрать let
// нельзя объявлять одну и ту же переменную при помощи let в одной области видимости.
// let это про блочную область видимости.

if (5 > 2) {
    let user = 'Luke'
    console.log(user)
    // переменная user c let доступна только внутри этого блока
}

const age = 30;
// age = 31 - ошибка

// const - мы не можем переприсвоить значение


//Типы данных, их всего 8

//1. number  число
let num = 7;
let floatNum = 7.5;

//2. BigInt для больших целых чисел
// ограничение на размер числа, который мы можем записать 2**53 - 1 и -2**53 + 1
let bigNum = 1n;
//для крипты в основном

//3.String - строка
let firstName = 'Arnold';
let secondName = 'Shwarzneger';
let str1 = "I'm happy";
let str2 = 'I\'m happy'; //экранируем при помощи /
//template string ``
let str3 = `Hello`;
let str4 = `${2 + 2}`; // - тут уже можно писать выражения
let str5 = `строка 1
строка 2`; // - сохраняется например перенос строк, или использовать \n


//4.Boolean - булевый тип данных - имеет два значения true и false
true; // истина
false; // ложь
console.log(5 > 2)
console.log(5 < 2)


//5.null - значение неизвестно
null;
let userAge = null; //значение неизвестно сейчас, в дальнейшем может быть узнаем. Или будем получать null когда будем искать на странице, но его нет

//6.undefined - значение не определено
undefined;
let someLet;
console.log(someLet)

//7.Symbol - для создания уникальных индификаторов, нахер он нужен

//8.Object


//Преобразование типов
// JS - язык с динамической типизацией
// можно все подряд складывать

//К строке:
console.log(5 + 5) //+ это оператор, 5 это операнд = 10
console.log(5 + '5') //+ это оператор, 5 это операнд = '55'

// нужно всегда знать с каким типом данных мы работаем

//К числу:
console.log(4 / '2')
console.log(4 - '2')
console.log(4 - '2px') // если js не сможет что то преобразовать к числу, то вернется NaN

console.log(typeof NaN) // NaN не является отдельным типом данных - number

// typeof - оператор возвращает строку с типом данных операнда
console.log(typeof 'test') // string
console.log(typeof undefined) // undefined
console.log(typeof null) // object - ошибка языка JS

console.log(typeof typeof 5) //typeof 5 - number - строка, a typeof строка - string

console.log(4 - parseInt('2px')) // parseInt - метод парсит строку и получает из нее целое число, первое
console.log(4 - parseFloat('2.5px')) // parseFloat - метод парсит строку и получает из нее дробное число

//Преобразование к логическому или к булевому(Boolean) значению

let condition = '';
//false - ложные значения: 0 '' null undefined Nan
//все остальное
if (condition) {
    console.log('if равен true')
}


//сравнение
console.log(5 == '5') //обычное сравнение дает true
console.log(5 === '5') //строгое сравнение дает false, так как тип данных разный


// Инкрементирование
let a = 1;
// a = a + 1
// a += 1
a++ //Инкрементирование
console.log(a)
a-- //Декрементирование
console.log(a)

// Когда a++ - постинкремент
// Когда a-- - постдекремент
// Когда ++a - прединкремент
// Когда --a - преддекремент

// Разница в порядке
let b = 1;
// let c = b++
let c = ++b

console.log('b', b);
console.log('c', c); // 1 сначала скопировалась 1 и только потом будет b++


//
let x = 0

console.log('x', x++)//0
console.log('x', ++x)//2


//логические операторы JS
// И ИЛИ Отрицание

//ИЛИ ||


