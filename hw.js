/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

let hamburber = 4;
let fri = 1;

if (hamburber >= 4 && fri) {
    console.log('Ми поїли');
}
else {
    console.log('Ми йдемо в інше кафе');
}


/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

let productPrice = 1500;

if (productPrice >= 1000 && productPrice <= 1900) {
    console.log('Ціна товару знаходиться між 1000 та 1900')
}

else {
    console.log('Ціна товару не знаходиться між 1000 та 1900')
}

/*3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

//Варіант 1
let productPrice1 = 2000;

if (productPrice1 < 1000 || productPrice1 > 1900) {
    console.log('Ціна товару не знаходиться між 1000 та 1900')
}
else {
    console.log('Ціна товару знаходиться між 1000 та 1900')
}
//Варіант 2 з оператором !
let productPrice2 = 2000;

if (!(productPrice2 >= 1000 && productPrice2 <= 1900)) {
    console.log('Ціна товару не знаходиться між 1000 та 1900')
}
else {
    console.log('Ціна товару знаходиться між 1000 та 1900')
}

/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

let timeOfYear = 3;

if (timeOfYear == 1) {
    console.log('Зима');
}
else if (timeOfYear == 2) {
    console.log('Весна');
}
else if (timeOfYear == 3) {
    console.log('Літо');
}
else if (timeOfYear == 4) {
    console.log('Осінь');
}
else {
    console.log('За таким номером немає пори року')
}


/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

let a = 6;
let b = 9;
let c = 5;

if (a > b) {
    if (a > c) {
        if (b > c) {
            console.log('Середнє число:' + b);
        }
        else {
            console.log('Середнє число:' + c);
        }
    }
    else {
        console.log('Середнє число:' + a);
    }
}

else {
    if (b > c) {
        if (a > c) {
            console.log('Середнє число:' + a);
        }
        else {
            console.log('Середнє число:' + c);
        }
    }
    else {
        console.log('Середнє число:' + b);
    }
}


/*6.  Задано номер дня тижня.
За заданим номером вивести назву дня тижня використовуючи switch.
Результат виводити в консоль.*/

let weekDay = 3;

switch (weekDay) {
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятниця');
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;
    default:
        console.log('За таким номером немає дня тижня');
        break;
}


/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

let mathSymbol = '+';
let x = 4;
let y = 2;
let r = 0;

switch (mathSymbol) {
    case '+':
        r = x + y;
        break;
    case '-':
        r = x - y;
        break;
    case '*':
        r = x * y;
        break;
    case '/':
        r = x / y;
        break;
}

console.log('r = ' + r);