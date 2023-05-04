//Завдання 1
function mcDonalds(hamburber, fri) {
    if (hamburber >= 4 && fri) {
        console.log('Ми поїли');
    }
    else {
        console.log('Ми йдемо в інше кафе');
    }
}

mcDonalds(4, 1);


//Завдання 2 
function price(productPrice) {
    if (productPrice >= 1000 && productPrice <= 1900) {
        console.log('Ціна товару знаходиться між 1000 та 1900')
    }

    else {
        console.log('Ціна товару не знаходиться між 1000 та 1900')
    }
}

price(1500);

//Завдання 3.1
function price1(productPrice1) {
    if (productPrice1 < 1000 || productPrice1 > 1900) {
        console.log('Ціна товару не знаходиться між 1000 та 1900')
    }
    else {
        console.log('Ціна товару знаходиться між 1000 та 1900')
    }
}
price1(2000);

//Завдання 3.2
function price2(productPrice2) {
    if (!(productPrice2 >= 1000 && productPrice2 <= 1900)) {
        console.log('Ціна товару не знаходиться між 1000 та 1900')
    }
    else {
        console.log('Ціна товару знаходиться між 1000 та 1900')
    }
}
price2(2000);


//Завдання 4
function timeYear(timeOfYear) {
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

}
timeYear(4);

//Завдання 5 
function avg(a, b, c) {
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
}

avg(6, 9, 5);


//Завдання 6 
const week = (weekDay) => {
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
}
week(2);


//Завдання 7 
function symbol(mathSymbol, x, y, r) {
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
}

symbol('/', 4, 2, 0);


//Завдання 8
function cutWord(word) {
    word = word.replace(/[аеиіоуяюєї]/gi, '');
    console.log(word);
}

cutWord('Тетяна Динь');


//Завдання 9 
function unitConverter (meters) {

    let kilometers = meters / 1000;

    let met = meters % 10;
    let kilo = kilometers % 10;

    let meterFloat = meters % 1;
    let kilometerFloat = kilometers % 1;
    
    if ((meterFloat !== 0) && (kilometerFloat !== 0)) { //для випадку, коли метри і кілометри - не цілі числа
        console.log(meters + ' метра це ' + kilometers + ' кілометра');
    }
    
    else if (meters >= 11 && meters <= 20) { //з 11 по 20
        console.log(meters + ' метрів це ' + kilometers + ' кілометра');
    
    }
    else if (met === 1) {   //1, 21, 31, 41, 51, 61, 71, і т.д
        console.log(meters + ' метр це ' + kilometers + ' кілометра');
    }
    
    else if (met >= 2 && met <= 4) {  // 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54
        console.log(meters + ' метри це ' + kilometers + ' кілометра');
    }
    
    else if ((met >= 5 && met <= 9)) {  //5, 6, 7, 8, 9, 25, 26,27,28,29
        console.log(meters + ' метрів це ' + kilometers + ' кілометра');
    }
    
    else if ((met === 0) && (kilo === 0 || (kilometers >= 11 && kilometers <= 20))) {  //11 000 метрів це 11 кілометрів
        console.log(meters + ' метрів це ' + kilometers + ' кілометрів');
    
    }
    else if (met === 0 && kilo === 1) {  //1000 метрів це 1 кілометр
        console.log(meters + ' метрів це ' + kilometers + ' кілометр');
    }
    
    else if ((met === 0) && (kilo >= 5 && kilo <= 9)) {  //5000 метрів це 5 кілометрів
        console.log(meters + ' метрів це ' + kilometers + ' кілометрів');
    }
    
    else if ((met === 0) && (kilo >= 2 && kilo <= 4)) {  //2000 метрів це 2 кілометри
        console.log(meters + ' метрів це ' + kilometers + ' кілометри');
    }
    
    else if (met === 0) { // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 і т.д 
        console.log(meters + ' метрів це ' + kilometers + ' кілометра');
    }
    else {
        console.log('Помилка переводу');
    }
}
unitConverter(32);

