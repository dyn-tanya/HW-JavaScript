//Функція - блок коду, що можна багаторазово виконувати. Допомагають уникати дублювання і потім можна використати в будь-якому місці

let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c);

a = 8;
b = 12;

c = a + b;
console.log(c);


//Якщо функція не повертає ніякого результату, то вона повертає значення underfined
//Функції бувають іменовані, анонімні, присвоєні якісь змінній, можуть бути аргументом при виклику іншої функції або властивістю об'єкту


//Іменована функція (є ім'я)

function sum(a, b) { //об'явлення функції, (a, b) -  параметри, значення котрих являють собою змінні, динамічно передаються всередину ффункції. 
    let c = a + b;
    return c; //просто повертає результат, якщо далі буде код, то він не виконається, більш гнучко будувати тести, можемо зберегти значення в змінній і потім скільки треба використати в коді
    console.log(c);
    //console.log('qwerty');
}

console.log(sum(8, 12)); //як число сприймається

let sumVar = sum(8, 12);
console.log('sumVar=' + sumVar);

sum(3, 12) //виклик фунції з аргументами
sum(9, 12)


//Анонімна функція

const anonimFunc = function (a, b) {
    let c = a + b;
    console.log(c);
}
anonimFunc(1, 2);

//анонімна стрілочна функція, не мають ключового слова function
const arrowFunc = (a, b) => {
    let c = a + b;
    console.log(c);
}

arrowFunc(1, 2);

//Дефолтне значення щоб зробити універсальну функцію

const funcWithDefaultParam = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultParam(3, 5));
console.log(funcWithDefaultParam(3));


console.log(Date());

const myRequestWithDate = (field1, timestamp = Date()) => { //функція, котра переймає значення
    let requestBody = {
        someData: 1,
        someData: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequestWithDate('232323', '1323'))
console.log(myRequestWithDate('232323'))

const playWithReturnFunc = () => {
    for (let i = 0; i < 8; i++) {
        console.log(i);
        if (i == 6) {
            return '2323'; //відмінність від брейка, в тому що ретюрн повертає значення, а брейк просто прериває операцію
        }
    }
}

console.log(playWithReturnFunc());


//Callback функції - певний спосіб оголошення функцый в js. Коли оперуємо діями, час виконання яких може відрізнятись. Запити на сервер. Щоб синхронізувати собою певні події
//Для 1-2 дій колбеки
// JS не чекає поки функція дасть результат, запустив і пішов далі

function someFunc(){
    console.log('Hello!')
}

setTimeout(someFunc, 5000)

function request1(){
    setTimeout( function (){
        console.log('First')
    } , 5000)   //5 сек затримка
    
}

//setTimeout штучна затримка, 

function request2(){
         console.log('Second');

    
}
request1();
request2();

function someFunctionWithCallback (param1, callbackFunction){
    console.log(`Here is my parametr: ${param1}`); //інтерполяція
    callbackFunction(); //коли явно вказуємо де функція має виконатись
   
}

someFunctionWithCallback('parampaasd', function(){
    console.log('Text from callback')
})

//функція з тестами з бібліотекою Мока
function it(testDescription, testActions){
    console.log(`Here is my test description: ${testDescription}`);
    testActions();
}

it ('Auth test', () => {  // call back функія, виконається за певним порядком
    console.log('Some test actions...')
})

