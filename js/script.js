'use strick'
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money = +prompt('Ваш месячный доход?', 40000);
let income = 'work';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, комуналка, такси');
let deposite = confirm('Есть ли у вас депозит в банке?');
let mission = 200000;
let period = 2;
let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

let start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};
start();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposite);

console.log(addExpenses.length);

console.log("Период равен", period, "месяца");
console.log("Цель заработать", mission, "рублей");

console.log(addExpenses.split(','));

let expenses = [];
function getExpensesMonth() { 
    let sum = 0;

    for (let i = 0; i < 1; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', 'чТО ТО');
        sum = +prompt('Во сколько это обойдется?', 200);
  }
  
  while (isNaN(sum) || sum === '' || sum === null); {
    for (let i = 0; i < 1; i++) {
      expenses[i] = prompt('Введите обязательную статью расходов?', 'чТО ТО');
      sum = +prompt('Во сколько это обойдется?', 200);
}
  };
  console.log(expenses);
  return sum;
};
 
let accumulatedMonth = getAccumulatedMonth();
let budgetDay = accumulatedMonth / 30; 
console.log(budgetDay);

function getAccumulatedMonth() { 
    return (money - getExpensesMonth());
}
getAccumulatedMonth();

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

if (getTargetMonth> 0) {
  console.log(`Цель будет достигнута за: ${getTargetMonth} месяцев`);
} else {
  console.log('Цель не будет достигнута');
}

console.log(getExpensesMonth());
console.log(addExpenses.split(','));
console.log(getTargetMonth());
console.log(getStatusIncome());
console.log(getAccumulatedMonth());

