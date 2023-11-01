import { task } from './lab5_1.mjs';
console.log(await task(1));       
console.log(await task(0));       // '25.10.2023'
console.log(await task(17));      

try {
    console.log(await task(18));      // ERROR 'no'
   } catch (e) {
    console.log(e);
   } 