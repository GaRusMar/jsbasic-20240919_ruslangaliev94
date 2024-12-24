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

// через in можно узнать о наличии свойства в объекте. Проверяет наличие ключа в нашем объекте.
let obj1 = {
    a: 0,
}
console.log('obj1', obj1)

if (obj1.a) {
    console.log('#1', 'object not empty') // не увидим, так идет проверка значения свойства, есть оно или нет. Ноль при преобразовании к логическому будет выдавать false.
}

if ('a' in obj1) { //Проверяет наличие ключа в нашем объекте.
    console.log('#2', 'object not empty')
}


//передача по ссылки и примитивы
let a1 = 1;
let a2 = 1;
console.log('a1 === a2:', a1 === a2)

let o1 = {a: 1};
let o2 = {a: 1};
let o3 = o1;


console.log('o1 === o2:', o1 === o2)//false
//Всегда будет false. Когда в переменную записываем какой-то объект, не примитив (все что не является объектом - это примитив), то в эту переменную подставляется ссылка на этот объект, которая хранится в памяти.
//Объекты не копируются по значению, потому что объект может занимать очень много памяти, его размер JS изначально не известен, поэтмоу он просто храниться где то в памяти, а ссылка на него передается в нашу переменную.
//И когда мы создаем еще один объект(например o2), то на самом деле мы создаем новый объект и ссылка на него так же копируется в переменную o2.
//в o1 и o2 хранятся две разные ссылки на два разных объекта.
//это как два одинаковых телефона(модель, цвет, память), но физически это два разных телефона, тоже самое и с объектами.

console.log('o3 === o1:', o3 === o1)//true, так как записали не новый объект, а ссылку на тот же самый объект


//Копирование объекта
let user5 = {
    firstName: 'Maxim',
    lastName: 'Galkin',
}

let user5Address = {
    address: 'Lenina',
    role: 'artist',
}

let newUser = {}

Object.assign(user5, user5Address, {a: 1})
console.log(user5) //{ firstName: 'Maxim', lastName: 'Galkin', address: 'Lenina' }

Object.assign(newUser, user5, user5Address, {a: 1})
console.log(newUser) //{ firstName: 'Maxim', lastName: 'Galkin', address: 'Lenina' }


//опциональная цыпочка
let user6 = {
    firstName: 'Maxim',
    lastName: 'Galkin',
    address: {
        street: 'Lenina',
    }
}
let user7 = {
    firstName: 'Filip',
    lastName: 'Kirkorov',
}

console.log(user6.address.street)
console.log(user7.address) // undefined
//console.log(user7.address.street) // ошибка Cannot read properties of undefined (reading 'street'), потому что user7.address возвращает undefined, а потом у undefined пытаемся получить street
console.log(user7.address?.street) //undefined, ошибки уже нет. Так как используем опциональный оператор чеин "?". Если есть address, то получим street, если нет, то undefined


// ссылки

let b1 = 1;
let b2 = b1; //она скопировалась, это уже не ссылка на b1, это новая еденица, скопировалась и записалась. Это примитивы.
b2 = 7;
console.log('b1', b1)
console.log('b2', b2)


let b3 = {a: 1};
let b4 = b3;
b4.a = 7
console.log('b3', b3) // b3 { a: 7 }
console.log('b4', b4) //b4 { a: 7 }

//тут уже свойство объекта b3 изменилось. в b4 хранится ссылка на объект b3. В b4.a = 7 Работаем с одним и тем же объектом.


//Методы
//Значением свойств могут являться функции
//Метод - это когда свойством объекта является функция


let user9 = {
    firstName: 'Filip',
    lastName: 'Kirkorov',
    // fullName: function () {
    // fullName() { // можем записать покороче, без слов : function
    //     console.log('this:', this) // используем специальную переменную this, ее так же называют контекстом. Переменная this ссылается на объект, из которого эта функция(метод) была вызвана.
    // console.log(user8.firstName + user8.lastName)
    // console.log(this.firstName, this.lastName) // поэтому можем писать тут this.firstName + this.lastName
    // }
    fullName,
}
user9.fullName() //и теперь, даже если будет меняться user8 на user9, fullName будет выводиться

//this ссылается на объект из которого вызвана функция(метод). this не постоянный, он динамический
// А если сделаем так

// let fullNameMethod = user9.fullName;
// fullNameMethod() //типо тут undefined undefined. Метод fullNameMethod вызывается не из объекта, а просто сам по себе, из глобального контекста. В браузере это глобальный объект Window


// создадим общую функцию для всех наших юзеров
function fullName() {
    console.log('общая функция для всех наших юзеров:', this.firstName, this.lastName)
}

let user10 = {
    firstName: 'Maksim',
    lastName: 'Galkin',
    fullName,
}

user10.fullName()

// у стрелочный функции нет контекста, this работать не будет
// let fullName2 = () => {
//     console.log('общая функция для всех наших юзеров:', this.firstName, this.lastName)
// }


console.log(Object.keys(user10))//можем пердать какой то объект и метод вернет массив, список ключей объекта
console.log(Object.values(user10))//можем пердать какой то объект и метод вернет массив, список значений объекта
console.log(Object.entries(user10))//можем пердать какой то объект и метод вернет массив массивов, и каждый вложеный массив это свойство и его значение
