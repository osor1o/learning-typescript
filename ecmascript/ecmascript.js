"use strict";
// let & const
let notDefined = '?';
console.log(notDefined);
let isCold = true;
if (isCold) {
    let action = 'put on coat';
    console.log(action);
}
const cpf = '123.456.000-99';
// cpf = '777.000.000-99'
console.log(cpf);
var secret = 'external';
function show() {
    var secret = 'key';
    console.log(secret);
}
show();
console.log(secret);
