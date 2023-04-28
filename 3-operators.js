console.log('arr' + '-object');  //concatenation, склеює рядки

console.log(2 + 2);  //додавання

console.log(2 + '2');  //concatenation, динамічне приведення типів / 22 результат

console.log(2 + + '2'); //додавання 

//інкремент і декремент - вик-ся для скорочення коду, збільшують або зменшують значення на одиницю, 

let incr = 10;
let decr = 10;

//Постфіксна форма
//incr++; //інкремент
//decr-- //декремент

//console.log(incr);
//console.log(decr);

//Префіксна форма
//++incr;
//--decr;
//console.log(incr);
//console.log(decr);

console.log(incr++); //виводиться початкове значення 10
console.log(decr--); // виводиться початкове значення 10

console.log(++incr);  //виводиться 12
console.log(--decr); //виводиться 8

console.log(5<2); //отримаємо булевий тип значення (false)
console.log(5%2); //остача від ділення

//console.log(2*4 = 8); // = оператор присвоєння, а не порівняння 
console.log(2*4 == 8); //оператори порівняння (true)
console.log(2*4 == '8'); //звичайне порівняння (true)
console.log(2*4 === 8); //строге порівняння не приводить дані до одного типу(true)

let isChecked = false;
let isClosed = true;

//&& і - повертає істину або хибне
console.log(isChecked && isClosed); ////false/true - false, true/true= true, false/false = false

// || або - працює тільки коли один із виразів повертає істину
console.log(isChecked || isClosed); //false/true - true, true/true= true, false/false = false

//заперечення !

let isChecked1 = true;
let isClosed1 = false;
console.log(isChecked1 && !isClosed1); //!isClosed1 = true
console.log(isChecked1 || isClosed1);



//в кафе, хочу з'їсти гамбургер і картоплю фрі, хоча б 1 гам і 1 картопла, тоді я ситий. В іншому випадку - не ситий
// Якщо змінити на 1 картоплю, то спрацьовує умова


let hamburber = true;
let fri = true;

if (hamburber&&fri) {
    console.log('Я ситий')
}

let hamburber1 = 5;
let fri1 = 4;

if (hamburber1&&fri1) {
console.log('Я ситий')
}

console.log(hamburber1&&fri1) //повертає фолс, якщо фолс не знайдено, повертається останнє значення. Повертає числа, а не булеві значення, якщо замінити


//5 значень, які призводять до false:
//0
// ""  - пустий рядок
//null
//underfined
//Nan

//Всі інші приводять до true

//Хочете щоб були або 3 гамбургери і кола або дві порції нагетсів і 2 картоплі фрі

let hamburbers = 2;
let cola = 2;
let nuggets = 2;
let fries = 1;

if (hamburbers >= 3 && cola || nuggets >= 2 && fries >= 2 ) {
console.log('Всі поїли')
}




