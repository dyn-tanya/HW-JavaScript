//Цикли потрібні для автоматизації виконання певних однотипних дій

//while (поки умова істина виконуй умови всередині вайл)
let num = 50;

while (num < 90) {
  console.log(num)  //infiniti
}


let num1 = 80;

while (num1 < 90) {
  console.log(num1);
  num1++;
}

//do - while  (спочатку виконується дія, потім перевірка умови)

let num2 = 80;

do {
  console.log(num2);
  num2++;
}
while (num2 < 90);


//for
// let i=1 - ітератор, з чого починається цикл
// i<8 - умова виходу з циклу, те на чому зупиниться
//i++ - крок
// i - iterator

for (let i = 1; i < 8; i++) {
  console.log(i);
}

num = 10;
for (let i = 1; i < 8; i++) {
  console.log(num);
  num++;
}

num = [1, 2, 3, 4];
for (let i = 1; i < num.length; i++) {
  console.log(num);
  num++;
}


num = 10;  //безкінечний цикл
for (let i = 0; i <= 0; i--) {
  console.log(num);
  num++;
}


num = 0;
for (let i = 0; i < 8; i++) {
  if (num === 5) {
    break; //повністю зупиняє цикл
  }
  console.log(num);
  num++;
}


num = 0;
for (let i = 0; i < 8; i++) {
  if (i === 5) {
    continue; // пропускаємо цю ітерацію і продовжуємо цикл
  }
  console.log(i);

}

//як краще не робити - цикл всередині цикла
for (let i = 0; i < 3; i++) {

  console.log(`i=${i}`);

  for (let j = 0; j < 3; j++) {
    console.log(`j=${j}`);

  }
}



