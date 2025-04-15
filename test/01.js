// 3 способа объявления переменных в JavaScript
// var, let, const

// Правила именования переменных:
// 1. Имя переменной не может начинаться с числа
// 2. Имя переменной чувствительно к регистру (userAge и UserAge - разные переменные)
// 3. Нельзя использовать зарезервированные слова (например, let, const, function и т.д.)

// var - устаревший способ объявления, имеет функциональную область видимости
var user = 'John';
console.log('user', user); // John

// var позволяет переопределять переменные в той же области видимости
var user = 'Bob';
console.log('user', user); // Bob

// Область видимости переменных

// Переменные, объявленные через var, имеют функциональную область видимости
// или глобальную, но не блочную
if (5 > 2) {
  var user = 'Max';
}
console.log('user', user); // Max (переменная изменилась глобально)

// let имеет блочную область видимости
if (5 > 2) {
  let user = 'Ruslan';
  console.log('user внутри блока', user); // Ruslan
}
console.log('user', user); // Max (значение из var осталось)

// const - объявление константы (неизменяемой переменной)
const age = 30;
// age = 31; // TypeError: Assignment to constant variable.

// Типы данных в JavaScript (всего 8)

// 1. number - для целых и дробных чисел
let num = 7;
let floatNum = 7.5;

// 2. BigInt - для очень больших целых чисел
let bigNum = 1n;

// 3. string - строки
let firstName = 'Arnold';
let lastName = "Schwarzenegger";

// Экранирование кавычек
let str = 'I\'m happy'; // экранировали кавычку
str = "I'm happy"; // или используем двойные кавычки

// Шаблонные строки (template strings) с обратными кавычками
let str2 = `Hello ${2 + 2}`; // Поддерживают интерполяцию выражений
console.log(str2); // Hello 4

// 4. boolean - логические значения
true;
false;
console.log(5 > 2); // true

// 5. null - явное отсутствие значения
let userAge = null;

// 6. undefined - значение не определено
let someVar;
console.log('someVar:', someVar); // undefined

// 7. Symbol - для создания уникальных идентификаторов
// 8. Object - для сложных структур данных

// Преобразование типов (JavaScript использует динамическую типизацию)

// Преобразование к строке
console.log(5 + "5"); // "55" (конкатенация)

// Преобразование к числу
console.log(4 / '2'); // 2
console.log(4 - '2'); // 2
console.log(4 - '2px'); // NaN (Not a Number)

// Проверка типов с помощью typeof
console.log(typeof 'test'); // "string"
console.log(typeof 1); // "number"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (известная особенность JavaScript)
console.log(typeof NaN); // "number" (NaN технически относится к типу number)

// Явное преобразование типов
console.log(4 - parseInt('2px')); // 2
console.log(4 - parseFloat('2.5px')); // 1.5

// Преобразование к boolean
// Ложные значения: false, 0, "", null, undefined, NaN
// Все остальные значения - истинные
if (1) {
  console.log('1 преобразуется в true');
}

// Сравнение
console.log(5 == '5'); // true (нестрогое сравнение с приведением типов)
console.log(5 === '5'); // false (строгое сравнение без приведения типов)

// Инкремент и декремент
let a = 1;
a++; // постинкремент (возвращает значение, затем увеличивает)
console.log(a); // 2

++a; // прединкремент (увеличивает, затем возвращает значение)
console.log(a); // 3

// Разница между пост- и префиксной формами
let b = 1;
let c = b++; // c = 1, b = 2
console.log(b, c); // 2, 1

let d = 1;
let e = ++d; // d = 2, e = 2
console.log(d, e); // 2, 2

// Логические операторы

// ИЛИ (||) - возвращает первый истинный операнд
let or = 0 || 'test' || 123;
console.log('or', or); // 'test'

// И (&&) - возвращает первый ложный или последний истинный операнд
let and = 0 && 2;
console.log(and); // 0

// Отрицание (!)
let not = !!'test'; // двойное отрицание для приведения к boolean
console.log(not); // true

// Хитрости преобразования типов
console.log(5 + '5'); // "55"
console.log(5 + +'5'); // 10 (унарный плюс преобразует строку в число)
console.log(5 + Number('5')); // 10

// Свойство length для строк
console.log('test'.length); // 4
