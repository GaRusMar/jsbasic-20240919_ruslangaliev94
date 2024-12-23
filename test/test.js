// let user = 'John'
// console.log(user)
//
// user = 'Bob'
// console.log(user)
//
// // если let - будет ошибка, второй раз надо убрать let
// // нельзя объявлять одну и ту же переменную при помощи let в одной области видимости.
// // let это про блочную область видимости.
//
// if (5 > 2) {
//     let user = 'Luke'
//     console.log(user)
//     // переменная user c let доступна только внутри этого блока
// }
//
// const age = 30;
// // age = 31 - ошибка
//
// // const - мы не можем переприсвоить значение
//
//
// //Типы данных, их всего 8
//
// //1. number  число
// let num = 7;
// let floatNum = 7.5;
//
// //2. BigInt для больших целых чисел
// // ограничение на размер числа, который мы можем записать 2**53 - 1 и -2**53 + 1
// let bigNum = 1n;
// //для крипты в основном
//
// //3.String - строка
// let firstName = 'Arnold';
// let secondName = 'Shwarzneger';
// let str1 = "I'm happy";
// let str2 = 'I\'m happy'; //экранируем при помощи /
// //template string ``
// let str3 = `Hello`;
// let str4 = `${2 + 2}`; // - тут уже можно писать выражения
// let str5 = `строка 1
// строка 2`; // - сохраняется например перенос строк, или использовать \n
//
//
// //4.Boolean - булевый тип данных - имеет два значения true и false
// true; // истина
// false; // ложь
// console.log(5 > 2)
// console.log(5 < 2)
//
//
// //5.null - значение неизвестно
// null;
// let userAge = null; //значение неизвестно сейчас, в дальнейшем может быть узнаем. Или будем получать null когда будем искать на странице, но его нет
//
// //6.undefined - значение не определено
// undefined;
// let someLet;
// console.log(someLet)
//
// //7.Symbol - для создания уникальных индификаторов, нахер он нужен
//
// //8.Object
//
//
// //Преобразование типов
// // JS - язык с динамической типизацией
// // можно все подряд складывать
//
// //К строке:
// console.log(5 + 5) //+ это оператор, 5 это операнд = 10
// console.log(5 + '5') //+ это оператор, 5 это операнд = '55'
//
// // нужно всегда знать с каким типом данных мы работаем
//
// //К числу:
// console.log(4 / '2')
// console.log(4 - '2')
// console.log(4 - '2px') // если js не сможет что то преобразовать к числу, то вернется NaN
//
// console.log(typeof NaN) // NaN не является отдельным типом данных - number
//
// // typeof - оператор возвращает строку с типом данных операнда
// console.log(typeof 'test') // string
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object - ошибка языка JS
//
// console.log(typeof typeof 5) //typeof 5 - number - строка, a typeof строка - string
//
// console.log(4 - parseInt('2px')) // parseInt - метод парсит строку и получает из нее целое число, первое
// console.log(4 - parseFloat('2.5px')) // parseFloat - метод парсит строку и получает из нее дробное число
//
// //Преобразование к логическому или к булевому(Boolean) значению
//
// let condition = '';
// //false - ложные значения: 0 '' null undefined Nan
// //все остальное
// if (condition) {
//     console.log('if равен true')
// }
//
//
// //сравнение
// console.log(5 == '5') //обычное сравнение дает true
// console.log(5 === '5') //строгое сравнение дает false, так как тип данных разный
//
//
// // Инкрементирование
// let a = 1;
// // a = a + 1
// // a += 1
// a++ //Инкрементирование
// console.log(a)
// a-- //Декрементирование
// console.log(a)
//
// // Когда a++ - постинкремент
// // Когда a-- - постдекремент
// // Когда ++a - прединкремент
// // Когда --a - преддекремент
//
// // Разница в порядке
// let b = 1;
// // let c = b++
// let c = ++b
//
// console.log('b', b);
// console.log('c', c); // 1 сначала скопировалась 1 и только потом будет b++
//
//
// //
// let x = 0
//
// console.log('x', x++)//0
// console.log('x', ++x)//2
//
//
// //логические операторы JS
// // И ИЛИ Отрицание
//
// //ИЛИ ||
//
// // let condition1 = 0 || 1;
// let condition1 = false || 'test' || console.log('hello'); //  'test' - первая истина
// let condition2 = false || null || 0; // 0 - последняя ложь
// console.log(condition1)
// console.log(condition2)
//
// //И && возвращает ложный операнд, если все истинные, то возвращает последний истинный.
// // Приоритет у && выше чем у ||
// let and = 0 && 2
// let and2 = 1 && 3
// console.log('and', and)
// console.log('and2', and2)
//
// // Оператор отрицания !
// // преобразовывает операнд к логическому типу и переворачивает его значение.
// let not = !true;
// console.log('not', not) //false
//
//
// console.log(5 + '5')
// console.log(5 + +'5')
// console.log(5 + '-5')
// console.log(5 + +'-5')
// console.log(5 + -'5')
// console.log(5 + Number('5'))
// console.log(5 + Number('5px'))
//
//
// console.log('' + 1 + 0) // 10 string
// console.log(typeof ('' - 1 + 0)) // -1 number
// console.log(typeof (true + false)) // 1 number
//
// console.log(6 / '3') // 2
// console.log('2' * '3') // 6
//
// console.log(4 + 5 + 'px') // 9px
// console.log('$' + 4 + 5) // $45
//
// console.log('4' - 2) // 2
// console.log('4px' - 2) // NaN
// console.log(parseInt('4px') - 2) // метод parseInt = 4
//
// console.log(7 / 0) // Infinity
//
// console.log(5 && 2) // 2
// console.log(5 || 0) // 5
// console.log(0 || 5) // 5
// console.log(null + 1) // 1
// console.log(null + 1) // 1
// console.log(undefined + 1) // NaN


//2 Объекты-------------------------------------------------------

//объект является ассоциативным массивом, вместо индексов как в массивах, тут ключи
//имена свойств в объекте всегда являются строками

let firstName = 'Filipp'
let lastName = 'Kirkorov'
let age = 30
let role = 'artist' //значение


let user1 = {
    firstName, // имя свойство берется из имени переменной
    // firstName: 'Filipp',
    lastName: 'Kirkorov',
    'last Name': 'Kirkorov',
    age: 30,
    [role]: true, // имя свойство берется из значения переменной
    address: {
        street: 'ул. Ленина'
    }
}


console.log(user1.firstName) //dot notation

//примеры когда используем квадратные скобки
console.log(user1['firstName'])

// let prompt = prompt('test')
let prop = 'age'
console.log(user1.prop) //undefined, так как нет
console.log(user1[prop])
console.log(user1['last Name']) //когда пробелы у имени свойства
user1.age++
console.log(user1.age)
console.log(user1.address.street)
console.log(user1['address'].street)

//как удалить
console.log(user1)
delete user1.artist
console.log(user1)


let user2 = {
    firstName: 'Максим',
    lastName: 'Galkin',
}
let user3 = {
    firstName: 'Alla',
    lastName: 'Pugacheva',
    [user1]: 'Друг',
    [user2]: 'Муж'
}

console.log('user2', user2)
console.log('user3', user3) //user3 { firstName: 'Alla', lastName: 'Pugacheva', '[object Object]': 'Муж' }

//имена свойств всегда буду являться строками и всегда будет преобрзование к строке

//объект при преобразовании в строку будет выдавать [object Object]
console.log({a: 1}.toString()) //[object Object]

// как пробежаться по объекту и вывести все его свойства
// цикл for in для объектов. Он может работать и с массивами, но лучше использовать для объектов.

for (let k in user3) {
    // console.log('k in user3', k)
    console.log('user3[k]', user3[k])
}


// 49:28








