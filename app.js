// TABLA DEL 5

const fs = require('fs');

console.clear();
console.log('===============')
console.log(' Tabla del: 2')
console.log('===============')


const base=2;
let salida='';

for (let i = 1; i <= 10; i++) {

salida +=  `${base} x ${i} = ${i * base}\n`
 
}
 
fs.writeFile('tabla-5.txt', salida, (err) => {
 if err



})