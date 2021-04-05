console.log('hello world');

let money = 1000;
let income = 'work';
let addExpenses = 'taxi, internet, food';
let deposite = true;
let mission = 200000;
let period = 2;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposite);

console.log(addExpenses.length);

console.log("Период равен", period, "месяца");
console.log("Цель заработать", mission, "рублей");

console.log(addExpenses.split(','));

let budgetDay = money / 30;
console.log(budgetDay);


let nun = 266219;
// let resultOne = [nun].toString().split('').map(n => n*1); - удалось разделить число на масивы, но перемножить не смог
//                                                             Воспользовался функцией
function resultTwo(number) {
    return [...number.toString()].reduce((p, v) => p * v);
}
let mul = (resultTwo(nun))**3 + " ";
console.log(mul.substring(0, 2));

