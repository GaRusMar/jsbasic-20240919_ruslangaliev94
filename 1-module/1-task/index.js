function factorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}



// factorial(0)
// factorial(1)
// factorial(2)
// factorial(3)
// factorial(4)
// factorial(5)
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         console.log(`${n}! = 1`); // Выводим аккуратный результат для 0! или 1!
//         return 1; // Возвращаем результат
//     }
//     let result = 1;
//     let arr = [];
//     for (let i = n; i > 1; i--) {
//         result *= i
//         arr.push(i)
//     }
//     let arrString =  arr.join(' * ')
//     console.log(`${n} ! = ${arrString} * 1  = ${result}`)






//     return result
// }
















