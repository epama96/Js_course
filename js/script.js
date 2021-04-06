'use strick'

let money = +prompt('Ваш месячный доход?');
let income = 'work';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposite = confirm('Есть ли у вас депозит в банке?');
let mission = 200000;
let period = 2;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposite);

console.log(addExpenses.length);

console.log("Период равен", period, "месяца");
console.log("Цель заработать", mission, "рублей");

console.log(addExpenses.split(','));

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - (+amount1 + +amount2);
console.log('Бюджет на месяц:' +budgetMonth);
let know = mission / budgetMonth;
let budgetDay = budgetMonth / 30;
console.log('Цель будет достигнута через:', Math.round(know), ('месяц'));
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
    console.log(' Увас хороший доход');
} else if (budgetDay < 1200 && budgetDay >600){
    console.log('У вас средний доход');
} else if (budgetDay < 600 && budgetDay >0){
    console.log('У вас низкий доход');
} else {
    console.log('Просто покончи с этим')
};

