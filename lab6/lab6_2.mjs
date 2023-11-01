import { task } from './lab6_1.mjs'; // подключаю функцию из файла
const x = { name: Promise.resolve('Need more gold!!')}; // задаю объект со свойствами и промисом
console.log(await task(x));
