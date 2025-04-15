// Преобразования типов
console.log('' + 1 + 0); // "10" (конкатенация строк)
console.log('' - 1 + 0); // -1 (математическая операция)
console.log(true + false); // 1 (true=1, false=0)
console.log(6 / '3'); // 2 (строковый '3' преобразуется в число)
console.log('2' * '3'); // 6 (оба преобразуются в числа)
console.log(4 + 5 + 'px'); // "9px" (сначала сложение, потом конкатенация)
console.log('$' + 4 + 5); // "$45" (конкатенация)
console.log('4' - 2); // 2 (строковый '4' преобразуется в число)
console.log('4px' - 2); // NaN (нельзя преобразовать '4px' в число)
console.log(7 / 0); // Infinity (деление на ноль)
console.log(5 && 2); // 2 (последнее истинное значение)
console.log(5 || 0); // 5 (первое истинное значение)
console.log(0 || 5); // 5 (первое истинное значение)
console.log(null + 1); // 1 (null преобразуется в 0)
console.log(undefined + 1); // NaN (undefined преобразуется в NaN)

// Объекты

let testName = 'Ruslan'; // объявим переменную
let role = 'artist';

let user1 = {
  testName, // используем переменную — имя свойства берётся из названия переменной
  firstName: 'John',
  lastName: 'Doe',
  // last Name: 'Doe', // ошибка — нельзя использовать пробел без кавычек
  'last Name': 'Doe', // можно использовать, но только с кавычками и доступом через скобочную нотацию
  age: 5,
  [role]: true, // имя свойства берётся из значения переменной
  address: {
    street: 'улица Ленина'
  },
};

console.log(user1);

console.log(user1.firstName); // доступ по точке
console.log(user1['firstName']); // доступ по строке, можно использовать переменные (например, из prompt)

let prop = 'age';

console.log(user1.prop); // undefined — так как ищет ключ 'prop', а не значение переменной prop
console.log(user1['last Name']); // 'Doe'

user1.age = 52;
console.log(user1.age); // 52

console.log(user1.address.street); // 'улица Ленина'

// удалим
// user1.artist = undefined
delete user1.artist;
console.log(user1);

let user2 = {
  firstName: 'Michael',
  lastName: 'Washington',
};

console.log(user2);

let user3 = {
  firstName: 'Leo',
  lastName: 'Tomson',
  [user1]: 'Друг', // [object Object]
  [user2]: 'Враг', // [object Object] — именно так и запишется
};

console.log(user3);

// имена свойств всегда преобразуются в строки

console.log({a: 1}.toString()); // '[object Object]'

// выведем свойства
// используем for...in — его лучше применять только к объектам, не к массивам
for (let k in user3) {
  console.log('k:', k);
  console.log('user3[k]:', user3[k]);
}

// через in можно проверить наличие ключа в объекте
let obj1 = {
  a: 0,
};

console.log(obj1);

// проверим, не пустой ли объект (в плане значений)

if (obj1.a) {
  console.log('объект не пустой 1'); // не увидим, так как проверяется значение, а 0 — это falsy
}

if ('a' in obj1) {
  console.log('объект не пустой 2'); // увидим, так как in проверяет наличие ключа
}

// передача по ссылке и примитивы

let a1 = 1;
let a2 = 1;

console.log(a1 === a2); // true — сравниваются значения примитивов

let o1 = {a: 1};
let o2 = {a: 1};

console.log(o1 === o2); // false

// когда мы записываем в переменную какой-то объект (не примитив)
// (всё, что не является объектом — это примитив)

// то в эту переменную подставляется ссылка на этот объект, которая хранится в памяти

// объекты не копируются по значению. Объект может занимать много памяти,
// и JS может не знать, сколько именно нужно выделить этой памяти,
// поэтому он хранится где-то в памяти, а в переменную подставляется ссылка на этот объект

// в o1 и o2 хранятся две разные ссылки на два разных объекта

// при сравнении они никогда не будут равны, даже если у них одинаковое содержимое

let o3 = o1;

console.log(o3 === o1); // true — потому что o3 и o1 ссылаются на один и тот же объект

// объекты передаются по ссылке

// Копирование объекта
let user5 = {
  firstName: 'maxim',
  lastName: 'galkin',
};

let user5Address = {
  street: 'Lenina',
  role: 'artist'
};

// метод
Object.assign(user5, user5Address, {a: 1});

console.log(user5); // user5 теперь содержит свойства из всех объектов

let newUser = {};

Object.assign(newUser, user5, user5Address);
console.log('newUser', newUser); // скопированы свойства

// Опциональная цепочка (optional chaining)

let user6 = {
  firstName: 'maxim',
  lastName: 'galkin',
  address: {
    street: 'улица Ленина'
  },
};

let user7 = {
  firstName: 'Filipp',
  lastName: 'Borbo',
};

console.log(user6.address.street); // 'улица Ленина'
// console.log(user7.address.street); // TypeError: Cannot read properties of undefined (reading 'street')

console.log(user7.address?.street); // optional chaining — undefined, ошибки нет

let b1 = 1;
let b2 = b1;

b2 = 7;

console.log(b1); // 1
console.log(b2); // 7

// при изменении b2 переменная b1 не затрагивается (примитивы передаются по значению)

let b3 = {a: 1};
let b4 = b3;

b4.a = 7; // работаем с одним и тем же объектом

console.log(b3); // { a: 7 }
console.log(b4); // { a: 7 }

// Методы
// Функция, которая является свойством объекта

let user9 = {
  firstName: 'Filipp',
  lastName: 'Borbo',

  // fullName: function () {
  //   console.log('this', this);
  //   console.log(this.firstName, this.lastName);
  // }

  fullName() {
    console.log(this.firstName, this.lastName);
  }
};

// user8.fullName(); // ReferenceError: user8 is not defined

user9.fullName(); // 'Filipp Borbo'

// this — ссылается на объект, из которого вызван метод. this — динамический
// В стрелочных функциях нет собственного this

function fullName() {
  console.log(this.firstName, this.lastName);
}

let user10 = {
  firstName: 'a',
  lastName: 'b',
  fullName
};

user9.fullName(); // 'Filipp Borbo'
user10.fullName(); // 'a b'

console.log(Object.keys(user10)); // [ 'firstName', 'lastName', 'fullName' ]
console.log(Object.values(user10)); // [ 'a', 'b', [Function: fullName] ]
console.log(Object.entries(user10)); // [ ['firstName', 'a'], ['lastName', 'b'], ['fullName', [Function: fullName]] ]

Number.isFinite(); // false — потому что аргумент не передан
