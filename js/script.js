let nun = 266219;
// let resultOne = [nun].toString().split('').map(n => n*1); - удалось разделить число на масивы, но перемножить не смог
//                                                             Воспользовался функцией
function resultTwo(number) {
    return [...number.toString()].reduce((p, v) => p * v);
}
let mul = (resultTwo(nun))**3 + " ";
console.log(mul.substring(0, 2));