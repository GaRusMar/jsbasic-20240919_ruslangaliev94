// Объекты

// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log(true + false); //1
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log(5 && 2);
// console.log(5 || 0);
// console.log(0 || 5);
// console.log(null + 1);
// console.log(undefined + 1);

// let firstName = 'John';
// let lastName = 'Doe';
// let age = 5;

let testName = 'Ruslan'; //обявим перемнуую
let role = 'artist';


let user1 = {
  testName, // вызовим пеерменную имя свойтсво берется из имени переменной
  firstName: 'John',
  lastName: 'Doe',
  // last Name: 'Doe',// ошибка
  'last Name': 'Doe',// модем использвать только квадртные скобки для обращения
  age: 5,
  [role]:
    true, //имя совйтсва возьмется из значения переменной
  address: {
    street: 'улица Ленина'
  },
};
console.log(user1);

console.log(user1.firstName);
console.log(user1['firstName']); // имя совйства из вншеней пермменой например из promt


let prop = 'age';

console.log(user1.prop); //undefined
console.log(user1['last Name']);


user1.age = 52;
console.log(user1.age);


console.log(user1.address.street);


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
  [user1]: 'Друг', //[object Object]
  [user2]: 'Враг', //[object Object] оно и запишется
};

console.log(user3);

// имена свойств будуи всегд преобразоваться к строками

console.log({a: 1}.toString()); //[object Object]


// выведим свойства
// используем for in который улчше использвать только для объектов а не с массивами
for (let k in user3) {
  console.log('k:', k);
  console.log('user3[k]:', user3[k]);
}

45:20
