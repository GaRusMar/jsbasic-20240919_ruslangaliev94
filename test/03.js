// 📌 ФУНКЦИИ И МАССИВЫ

// 🔁 Функция — это способ повторять одно и то же действие, например, вывод сообщения в консоль

// 📍 Несколько способов объявления функции:

// --- Function Declaration (Объявление функции) ---
helloUser1(); // Можно вызывать до объявления
helloUser1();
helloUser1();

function helloUser1() {
    console.log('Hello пользователь 1');
}

// ✅ Можно вызывать до места объявления в коде
// потому что интерпретатор «поднимает» такие функции вверх (hoisting)


// --- Function Expression (Функциональное выражение) ---
let helloUser2 = function () {
    console.log('Hello пользователь 2');
};

helloUser2(); // ⛔ Нельзя вызывать до объявления

// 📌 Разница:
// - Function Declaration «поднимается» вверх
// - Function Expression — нет. Вызывать раньше времени нельзя.


// --- Arrow Function (Стрелочная функция) ---
let helloUser3 = () => {
    console.log('Hello пользователь 3');
};

helloUser3();

// 🔎 Особенности стрелочных функций:
// - Нельзя вызывать до объявления
// - Нет собственного контекста (this)
// - Нельзя вызвать через `new`
// - Нет объекта `arguments`
// - Контекст берётся из внешнего окружения
// - Удобны для коротких функций и колбэков


// --- Возврат из функции (return) ---
function sum() {
    if (5 > 2) {
        return 1 + 2; // выход из функции
    }
    console.log('sum:', 1 + 2); // не выполнится
}

let sumResult = sum();
console.log('sumResult:', sumResult); // 3


// 💡 Важно! return работает на уровне строки
function test() {
    return; // интерпретатор завершает выполнение здесь!
    {
        a: 1;
    }
}

let testResult = test();
console.log('testResult:', testResult); // undefined


// --- Аргументы функции ---
function sumNumbers(m, n) {
    return m + n;
}

console.log('sumNumbers:', sumNumbers(2, 3)); // 5

// Аргументы по умолчанию + объект `arguments`
function sumNumbers2(m, n = 0) {
    console.log('args[2]:', arguments[2]);      // можно обращаться к аргументам по индексу
    console.log('args.length:', arguments.length);

    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log('sumNumbers2:', sumNumbers2(3, 2, 4, 5, 6)); // 20


// --- Область видимости переменных (Scope) ---
let a = 1;

function func1() {
    console.log('func1 a:', a); // доступ к внешней переменной `a`

    let b = 2;

    let func2 = function () {
        let c = 3;
        console.log('func2 a:', a); // внешняя
        console.log('func2 b:', b); // внешняя из `func1`
        console.log('func2 c:', c); // локальная
    };

    func2();
}

func1();

// ❗ Внешний код не имеет доступа к переменным, объявленным внутри функции
// console.log('test', test); // ReferenceError: test is not defined

// ✅ Внутри функции можно объявлять другие функции (вложенность)


// так как функция является объектом, у нас никогда не будут функции равны друг другу, даже если они идентичны
console.log((function () {
}) === (function () {
})); // false


// массивы []
// массив не является отдельным типом данных, это объект
// можно создать через конструктор, но чаще создают литеральным образом

// хранить можем всё, что угодно
let arr1 = [1, 2, 'test', {a: 3}];
console.log('arr1:', arr1);

// можно обратиться по индексу к элементу массива (в объекте это ключ), индексы начинаются с 0
console.log('arr1[0]:', arr1[0]);
console.log('arr1[2]:', arr1[2]);

let arr2 = [1, 2, 3, [4, 5], 6, 7];
console.log('arr2[3][0]:', arr2[3][0]); // 4


// как найти элемент в массиве
let arr3 = [1, 2, 3, 'test', {a: 1}];

// если хотим убедиться, есть ли элемент в массиве — и хотим просто true/false
console.log(arr3.includes('test')); // возвращает true или false

// если хотим узнать индекс элемента в массиве
console.log(arr3.indexOf('test')); // возвращает индекс или -1
console.log(arr3.indexOf(123));    // -1, если не найден

console.log(arr3.find((el) => {
    return el === 'test';
})); // возвращает сам элемент или undefined


// количество элементов в массиве
let arr4 = [1, 2, 3];
console.log('arr4.length:', arr4.length);

// для строк тоже работает
console.log('test'.length);


// методы массивов

// push — добавляет в конец массива
console.log('arr4:', arr4);
arr4.push(4);
console.log('arr4:', arr4);

// pop — удаляет последний элемент массива
arr4.pop();
console.log('arr4:', arr4);

// unshift — добавляет элемент в начало массива
arr4.unshift(0);
console.log('arr4:', arr4);

// shift — удаляет элемент с начала массива
arr4.shift();
console.log('arr4:', arr4);

// всегда лучше добавлять в конец массива через push
// если добавляем в начало — все элементы сдвигаются, меняются индексы
// но на практике это "экономия на спичках", в 99% случаев это не важно


// перевернуть массив: reverse — меняет текущий массив, не создаёт новый
let arr5 = [1, 2, 3, 4, 5, 6];
console.log('arr5:', arr5);
console.log('arr5.reverse():', arr5.reverse());
console.log('arr5 после reverse:', arr5);


// более сложные методы
let users = [
    {
        firstName: 'Alla',
        lastName: 'Pugacheva',
        gender: 'Female',
    },
    {
        firstName: 'Filippo',
        lastName: 'Kirkorov',
        gender: 'Male',
    },
    {
        firstName: 'Olga',
        lastName: 'Buzova',
        gender: 'Female',
    },
    {
        firstName: 'Maxim',
        lastName: 'Galkin',
        gender: 'Male'
    },
];

// задача: отфильтровать пользователей и получить список женщин как массив строк
// ['Alla Pugacheva', 'Olga Buzova']

let userResult = [];
for (let user of users) {
    if (user.gender === 'Female') {
        userResult.push(`${user.firstName} ${user.lastName}`);
    }
}

console.log('userResult:', userResult);


// другой способ: filter + map

// filter — фильтрует массив, возвращает новый массив отфильтрованных элементов
// принимает функцию, которая возвращает true/false
let femaleObj = users.filter((user) => {
    return user.gender === 'Female';
});

console.log('femaleObj:', femaleObj);

// map — не фильтрует, возвращает новый массив с результатом выполнения функции
let femaleStr = femaleObj.map((user) => {
    return `${user.firstName} ${user.lastName}`;
});

console.log('femaleStr:', femaleStr);

// итог: отфильтровали и вернули то, что нужно

// короткая запись
let femaleStr2 = users
    .filter(user => user.gender === 'Female')
    .map(user => `${user.firstName} ${user.lastName}`);

console.log('femaleStr2:', femaleStr2);

// если стрелочная функция принимает только один аргумент — скобки можно не писать
// фигурные скобки тоже можно не писать, если сразу идёт return
// один аргумент + сразу возврат = максимально кратко


// решить задачу с методом reduce

let femaleStrReduce = users.reduce((acc, user) => {
    if (user.gender === 'Female') {
        acc.push(`${user.firstName} ${user.lastName}`);
    }
    return acc;
}, []);

console.log('femaleStrReduce:', femaleStrReduce);

//🔍 Пояснение:
//
// reduce принимает два аргумента: аккумулятор acc и текущий элемент user.
//
// Если gender равен 'Female', мы добавляем строку с именем и фамилией в аккумулятор.
//
// Начальное значение аккумулятора — пустой массив [].
//
// В конце reduce возвращает этот массив, как и требовалось.
//
// 🧠 Этот способ удобен, когда нужно одновременно фильтровать и преобразовывать — всё в одном проходе, без промежуточных массивов.

//пример
let numbersNew = [1, 2, 3, 4]


let sumNumbersNew = numbersNew.reduce((acc, number) => {
    return acc + number;
}, 0);

console.log('sumNumbersNew:', sumNumbersNew);


let male = users.reduce((acc, user) => {
    if (user.gender === 'Male') {
        acc.push(`${user.firstName} ${user.lastName}`)
    }
    return acc
}, []);

console.log('male:', male)


let fruits = ['apple', 'banana', 'cherry'];

let bigFruits = fruits.map(fruit => {
    return fruit.toUpperCase()
});

console.log(bigFruits)


let fruitData = [
    {name: 'apple', count: 2},
    {name: 'banana', count: 5},
    {name: 'cherry', count: 3},
];

let strs = fruitData.map(str => `Фрукт: ${str.name}, Кол-во: ${str.count}`);

console.log(strs)


let nums = [1, 2, 3, 4, 5];

let numsDouble = nums.map(element => Math.pow(element, 2));

console.log(numsDouble)


let words = ['car', 'bike', 'train', 'bus', 'plane'];

let wordsLength = words.filter(element => element.length > 3);

console.log(wordsLength)


// Метод массива find() ищет первый элемент, который удовлетворяет условию, и возвращает его.
//
// 📌 В отличие от filter(), find() вернёт один элемент, а не массив.
let products = [
    {id: 101, name: 'Ноутбук', price: 1500},
    {id: 102, name: 'Смартфон', price: 700},
    {id: 103, name: 'Планшет', price: 900}
];

let expensiveProduct = products.find(product => product.price > 800)

console.log(expensiveProduct)


// Метод some() проверяет, есть ли хотя бы один элемент, удовлетворяющий условию.
//     Он возвращает true или false, а не сам элемент.


let usersxxx = [
    {name: 'Руслан', age: 32},
    {name: 'Аня', age: 28},
    {name: 'Миша', age: 17}
];

let hasTeen = usersxxx.some(user => user.age < 18);

console.log(hasTeen); // должно быть true


let arr = [1, 2, 3];
console.log(arr.pop());
console.log(arr);


