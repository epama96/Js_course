'use strick'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

let answer = 59;

alert('Привет чувак! предлогаю поиграть игру. Я загадал число от 1 до 100, тебе нужно угадать. Все без фокусов, все честно! Угадаешь, получишь квартиру почти в центре Москвы. Не сможешь угадать, выключишь или просто уйдешь, то я приду за тобой... ');

function play(){
    const num = prompt('Ну чтож, начнем? Угадай число от 1 до 100');
    if (num === null) {
        alert('все не то Миша, давай по новой')
        play();
    }
    if (isNumber(num)) {
         if (num > answer) {
            alert('Нет, мое число меньше')
            play();
         } else if (num < answer) {
            alert('Нет, мое число больше')
            play();
         } else {
            alert('Красаучик! Поздравляю, ты посмотри на него, ваще четк. вот твой приз');}
            start();
        } else {
            alert('Дурачек, нужно цифры');
            play();
        }
}
play();