// Задание 1

let a = Number(10);
alert(a);

a = 20;
alert(a);

// Задание 2 

let iphoneAge = Number(2007);
alert(`Айфон появился в ${iphoneAge} году`);

// Задание 3 

let brendanEich = ("Brendan Eich");
alert(brendanEich);

// Задание 4 

let x = Number(10);
let y = Number(2);

alert(`Сумма ${x} + ${y} = ${x + y}`);
alert(`Разность ${x} - ${y} = ${x - y}`);
alert(`Умножение ${x} x ${y} = ${x * y}`);
alert(`Деление ${x} : ${y} = ${x / y}`);

// Задание 5 

let base = Number(2);
let power = Number(5);
alert(base ** power);

// Задание 6 

let m = Number(9);
let n = Number(2);
alert(m % n);

// Задание 7 

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// Задание 8 

let age = Number(prompt('Сколько вам лет?'));
alert(`Тебе ${age} лет`);

// Задание 9 

let user = {
    name: 'Данис',
    age: 26,
    isAdmin: true
}

user.cityOfresidence = 'Tbilisi';
user.age = 27;
delete user.cityOfresidence;
user.info = prompt('Какую информацию хотите узнать о пользователе?');

console.log(user);
alert(user.info);

// Задание 10 

let nickname = prompt('Назови имя');
alert(`Привет ${nickname}!`);