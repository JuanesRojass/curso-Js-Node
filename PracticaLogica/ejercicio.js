const colors = require('colors');
base = 5;

for (let i = 1; i<=10; i++){
    // console.log(` ${base} x ${i} = ${base * i}\n`.green);
    console.log(colors.green(`${base}`), colors.red(`x`), colors.magenta(`${i}`, `=`, colors.yellow(`${base*i}`)));
}