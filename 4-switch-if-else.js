//Умови

if (4 == 9) { //умова має бути true
    console.log('Expression is true')

}

if (4 == 9) console.log('Expression is true')



if (4 == 9) { //умова має бути true
    console.log('Expression is true')
}
else {  //коли false
    console.log('Expression is false')
}

if (4) { //умова має бути true
    console.log('Expression is true')
}
else {  //коли false
    console.log('Expression is false')
}


let num = 47;

if (num < 49) {
    console.log('Error')
}
else if (num > 100) {
    console.log('Some big number')
}

else {
    console.log('ok')
}

//тернарний оператор - бо для реалізації потребує три агументи для запису (для того, щоб код виглядав быльш лаконічно)
let num1 = 500;
(num1 === 50) ? console.log('ok') : console.log('error');

//switch-case  коли цікавить пряме порівняння з рядом можливих значень

let number = 52;

switch (number) {  //коли багато різних умов. В середину switch передається змінна, перевіряє чи дорівнює змінна значенням, кторі стоять біля case, поки не знайде правильне
    //В кінці кожного блоку має бути ключове слово break, щоб зупинити виконання свіч кейса. Використовувати коли if/else недостатньо
    case 49:
        console.log('your value 49');
        break;
    case 50:
        console.log('your value 50');
        break;
    case 51:
        console.log('your value 51');
        break;
    case 52:
        console.log('your value 52');
        break;
    default:
        console.log('Rhis is default output');
        break;
}

//Якщо купуєте BMW то виводити в консоль BMW, аналогічно для Audi, Mersedes, Ford


let car = 'Ford';

switch (car) {  
    case 'BMW':
        console.log('Я тепер власник BMW');
        break;
    case 'Audi':
        console.log('Я тепер власник Audi');
        break;
    case 'Mersedes':
        console.log('Я тепер власник Mersedes');
        break;
    case 'Ford':
        console.log('Я тепер власник Ford');
        break;
    default:
        console.log('Поки хожу пішки');
        break;
}