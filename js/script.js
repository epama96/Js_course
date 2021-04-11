'use strick'

let money = +prompt('Ваш месячный доход?', 40000);
let income = 'work';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, комуналка, такси');
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

let expenses1 = prompt('Введите обязательную статью расходов?', 'что то');
let amount1 = prompt('Во сколько это обойдется?', 200);
let expenses2 = prompt('Введите обязательную статью расходов?', 'еще что то ');
let amount2 = prompt('Во сколько это обойдется?', 300);
 
//console.log('Бюджет на месяц:' +budgetMonth);
//let know = mission / budgetMonth;
//let budgetDay = budgetMonth / 30;
//console.log('Цель будет достигнута через:', Math.round(know), ('месяц'));
//console.log('Бюджет на день: ', Math.floor(budgetDay));
/*
if (budgetDay > 1200) {
    console.log(' Увас хороший доход');
} else if (budgetDay < 1200 && budgetDay >600){
    console.log('У вас средний доход');
} else if (budgetDay < 600 && budgetDay >0){
    console.log('У вас низкий доход');
} else {
    console.log('Просто покончи с этим')
};*/

let a = +amount1;
let b = +amount2;
let c = money;
function getExpensesMonth() {
    return (a + b);
}
function getAccumulatedMonth() { 
    return (c - getExpensesMonth());
}
getAccumulatedMonth();

function accumulatedMonth() {
    console.log (getAccumulatedMonth());
}
accumulatedMonth();

function getTargetMonth () {
    return mission / getAccumulatedMonth();
}
function budgetDay() {
    return getAccumulatedMonth() / 30;
} 
let showTypeOf = function(data) {
    console.log(data, typeof(data));
}

showTypeOf(budgetDay());
showTypeOf(getExpensesMonth());
showTypeOf(addExpenses.split(','));
showTypeOf(getTargetMonth());
showTypeOf(budgetDay());
showTypeOf(getStatusIncome());