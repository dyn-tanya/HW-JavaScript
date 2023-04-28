/*Типи данних


1) Прості типи або примітивні
 - string (Текст)
 - number (число)
 - boolean (логічний тип - true/false)
 - null 
 - underfined 
 - Symbol
 - bigint
 _______________________________

2) Об'єкти
 - Звичайний об'єкт {}  json
 - масиви
 - об'єкт дати
 - регулярні вирази
 - Помилки (ерори)
________________________________
*/

let number = 5;

let floatNumber = 5.5;

//infiniti(безкінечність), NaN

console.log(4 / 0); //infiniti
console.log(-4 / 0); //-infiniti

console.log('string' * 4); //NaN

//boolean - бінарний тип - істина або хибне, так або ні, 1 або 0. Змінні вик-ся для певних логічний операцій, порівняння 2 величин
//Результат усіх перевірок в тестах, чи є певний елемент на сторінці і т.д

let isExist = true; //false

//null

console.log(qwerty); //null в первісному вигляді

let value = null; //для запиту треба явно вказувати значення
console.log(value);

//null - конкретне значення, вивід в консоль null, underfined - відсутність будь-якого значення. underfined присвоюється змінній яку об'явили і не присвоїли значення

// underfined
let value2;
console.log(value2);

//object (зручно зберігати дані)

let obj = {};  //пустий json

let person = {
    name: "Tanya",
    age: 27,
    status:
    {
        qwe1: 123
    }
};

console.log(person.status.qwe1);


let person1 = new Object();  //аналог let obj = {};
person1.name = "Tanya2"
person1.age = 27;

//console.log(person1);

console.log(`Name: ${person1.name}`)
console.log(`Age: ${person1.age}`)

let endpoint = 'help'
console.log(`https://someurl/${endpoint}`)

//array масиви можуть бути частиною об'єкту. Масив - це перелік елементів, числа текст інші масиви, булеві значення і т.д

let arr = ['text', 'some test', 6, { name: 123 }, []];
//console.log(arr);
console.log(arr[0]);


//
let numArr = [1, 2, 3]; //масив - упорядкований список, є номер по порядку
let numObj = {
    a: 1,
    b: 2,
    c: 3
}; //в об'єктів немає номерів по порядку, є ключі та значення

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Tanya': 1000,
    'Vlada': 1200,  //без лапок, це тільки як окремий файл json

};

let salaryArr = ['Anna', 1000, 'Vlada', 1200]; //не зрозуміло що до чого відноситься

let someArrObj = { //призначили ключі номерами по порядку, якщо ключом э цифра, то доступ до значення відбувається таким як масив. Масиви є об'єктами бо в них завжди ключі являються цифрами.
    // Якщо об'єкт ключами якого є цифри - працюємо як з масивом

    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 1200
};

console.log(salaryArr[0]);

console.log(someArrObj[0]);

let someArrObj2 = {

    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 1200
};

console.log(`b1: ${someArrObj2["b"]}`);

someArrObj2.b = 2000;

console.log(`b2: ${someArrObj2["b"]}`);

let someText = "Hello world!"
//console.log(someText.length); //метод для довжина рядка
//console.log(someText.substring(0,6)); //вивести значення з 1 до 6 (Hello виведеться)
//console.log(someText.toUpperCase()); //верхній регістр
//console.log(someText.toLocaleLowerCase()); //нижній регістр
//console.log(someText.indexOf('o'));  //виводить порядковий номер з буквою о
// console.log(someText.trim());//видаляє пробіли, табуляцію, перенос рядка
//console.log(someText.charAt(4));  //виводить по індексу букву о
console.log(someText[1]);

let myArr = [];

myArr.push('Доброго'); //додаємо елемент в масив
myArr.push('вечора');
console.log(myArr)

//console.log(myArr.length);
//console.log(myArr.join(' ')); //об'єднуємо елементи масиву і розділяємо пробілом

console.log(myArr.pop()); //виводить останній елемент в масиві
console.log(myArr)

let newObj = {
    a: 1,
    b: 2,
    c: 'qwerty'
}


console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length); //порахувати довжину рядка

let someNum = 12.4;
console.log(Math.round(someNum)); //вивести ціле значення

let resolution = "12.2px"
console.log(parseInt(resolution)); //дістати зі змінної ціле число
console.log(parseFloat(resolution)); 

//масиви і об'єкти являють собою різні логічні структури



