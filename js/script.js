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