let arr = ['22522', '950003', '1234423', '45302', '45678', '9876', '2345'];

arr.forEach(em => {
  if (String(em).search(/(2|4)/) === 0) {
    console.log(em);
  }
});

let n = 100;
nextPrime:
for (let i = 2; i <= n; i++) { 
  let a = 2;
  for (; a < i; a++) { 
    if (i % a === 0) {
    continue nextPrime; 
    }
  }
  console.log(`${i}: Простое число. Делители числа: 1 и `, a);
}