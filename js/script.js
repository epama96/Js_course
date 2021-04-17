'use strick'

let money = +prompt('Ваш месячный доход?', 40000);
let income = 'work';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, комуналка, такси');
let deposite = confirm('Есть ли у вас депозит в банке?');
let mission = 200000;
let period = 2;
let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposite);

console.log(addExpenses.length);

console.log("Период равен", period, "месяца");
console.log("Цель заработать", mission, "рублей");

console.log(addExpenses.split(','));

let expenses1 = prompt('Введите обязательную статью расходов?', 'что то');
let amount1 = +prompt('Во сколько это обойдется?', 200);
let expenses2 = prompt('Введите обязательную статью расходов?', 'еще что то ');
let amount2 = +prompt('Во сколько это обойдется?', 300);
 
let accumulatedMonth = getAccumulatedMonth();
let budgetDay = accumulatedMonth / 30; 
console.log(budgetDay);

function getExpensesMonth() {
    return (amount1 + amount2);
}
getExpensesMonth();

function getAccumulatedMonth() { 
    return (money - getExpensesMonth());
}
console.log (accumulatedMonth);

function getTargetMonth () {
    return mission / accumulatedMonth;
};
let getStatusIncome = function () {
  if (budgetDay < 300) {
    return (' низкий уровень дохода');
  } else if (budgetDay <= 800) {
    return ('средний уровень дохода');
  } else {
    return ('Высокий уровень дохода');
  
  }
};
console.log(getExpensesMonth());
console.log(addExpenses.split(','));
console.log(getTargetMonth());
console.log(getStatusIncome());
console.log(getAccumulatedMonth());