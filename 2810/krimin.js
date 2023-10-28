import { readFile } from 'node:fs/promises';

const file = await readFile('package.json', 'utf-8', (e, x) => console.log(e ? e : x));

console.log(file);let a = 0; 
function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }
  
  function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) a = ++a;
    }
  }
  
  printPrimes(7930);
  console.log(a);