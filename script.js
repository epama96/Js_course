'use strick'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

const getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

alert('Привет чувак! предлогаю поиграть игру. Я загадал число от 1 до 100, тебе нужно угадать. Все без фокусов, все честно! Угадаешь, получишь квартиру почти в центре Москвы. Не сможешь угадать, выключишь или просто уйдешь, то я приду за тобой... ');

function newGame(){
  let randomNumber = +getRandomInt(100);
  let attempts = 10;
    function play() {
        if (attempts < 1) {
          if (confirm('Попытки закончились, хотите сыграть ещё?')) {
            newGame();
          } else {
              alert('ну и ладно');
              return;
          }
        } else {
            const num = prompt('Ну чтож, начнем? Угадай число от 1 до 100');
            if (num === null) {
                alert('все не то Миша, давай по новой')
                play();
        }
        if (isNumber(num)) {
            attempts--;
            if (num > randomNumber) {
                alert(`Нет, мое число меньше. У тебя осталось попыток: ${attempts}`)
                play();
            } else if (num < randomNumber) {
                alert(`Нет, мое число больше. У тебя осталось попыток: ${attempts}`)
                play();
            } else { 
                if (confirm('Красаучик! Поздравляю, ты посмотри на него, ваще четк. Поиграем еще??:)')) {
                newGame();
                } else {
                alert('Ну не хочешь, как хочешь');
                return;
                }
            }
            } else {
                alert('Дурачек, нужно цифры');
                play();
            }
        }
    }
    play();
 };
newGame();