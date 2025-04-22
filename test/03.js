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
// - Удобны для коротких функций и колбеков


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
    return // интерпретатор завершает выполнение здесь!
    {
        a: 1
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
    }

    func2();
}

func1();

// ❗ Внешний код не имеет доступа к переменным, объявленным внутри функции
// console.log('test', test); // ReferenceError: test is not defined

// ✅ Внутри функции можно объявлять другие функции (вложенность)


// так как функция является объектом, у нас никогда не будут функции равны друг другу, даже если они индетичны
console.log((function () {
}) === (function () {
})); //false


//массивы []
// массив не является отельным типом данным, это объект
//можно созалать через констртор, но чаще создают литеральным образом


// хрнаить можем все что угодно
let arr1 = [1, 2, 'test', {a: 3}];
console.log('arr1:', arr1);

// можно обратиться по индуксу к элементу массива(в объекте это ключ), индексы начинаются с 0

console.log('arr1[0]', arr1[0])
console.log('arr1[2]', arr1[2])


let arr2 = [1, 2, 3, [4, 5], 6, 7];
console.log('arr2[3][0]', arr2[3][0]) //4


1:03
