'use strick'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

let money;
let income = 'work';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, комуналка, такси');
let deposite = confirm('Есть ли у вас депозит в банке?');
let mission = 200000;
let period = 2;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
}


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

console.log(addExpenses.split(','));
 

let expenses = [];
function getExpensesMonth() { 
    let sum = 0;
  
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        sum = +prompt('Во сколько это обойдется?');
          if (isNumber(sum)) {
            sum += sum;
          } else { do {
            sum = prompt('Во сколько это обойдется?');
          }
          while (!isNumber(sum));
        }
    }
    console.log(sum);
    return sum;
  }

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц:', expensesAmount)

function getAccumulatedMonth() { 
    return (money - expensesAmount);
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
if (getTargetMonth> 0) {
    console.log(`Цель будет достигнута за: ${getTargetMonth} месяцев`);
  } else {
    console.log('Цель не будет достигнута');
}

showTypeOf(budgetDay());
showTypeOf(getExpensesMonth());
showTypeOf(addExpenses.split(','));
showTypeOf(getTargetMonth());
showTypeOf(budgetDay());