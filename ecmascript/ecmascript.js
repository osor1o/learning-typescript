"use strict";
// let & const
let notDefined = "?";
console.log(notDefined);
let isCold = true;
if (isCold) {
    let action = "put on coat";
    console.log(action);
}
const cpf = "123.456.000-99";
// cpf = '777.000.000-99'
console.log(cpf);
var secret = "external";
function show() {
    var secret = "key";
    console.log(secret);
}
show();
console.log(secret);
{
    {
        const def = "def";
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);
// Arrow Function
const sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(2, 2));
const sub = (n1, n2) => n1 - n2;
console.log(sub(2, 3));
const sayHi = () => console.log("hi");
sayHi();
const talkFrom = (people) => console.log("Hi" + people);
talkFrom("José");
// function functionWithThis() {
//   console.log(this);
// }
// functionWithThis();
// const functionWithBindThis = functionWithThis.bind({ name: "José" });
// functionWithThis();
// const arrowWithThis = () => console.log(this);
// arrowWithThis();
function regressCounter(start = 3, end = start - 5) {
    console.log(start);
    while (start >= end) {
        start--;
        console.log(start);
    }
    console.log("END!");
}
regressCounter();
regressCounter(3);
// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const group1 = ["a", "b", "c", "d"];
const group2 = ["e", ...group1, "f", "g"];
console.log(group2);
// Destructuring
const items = [1, 2];
// const item1 = items[0];
// const item2 = items[1];
const [item1, item2] = items;
console.log(item1);
console.log(item2);
const item = {
    name: "SSD 480GB",
    price: 670,
    data: {
        w: "import",
    },
};
// const itemName = item.name;
// const itemPrice = item.price;
const { name: n, price: p, data: { w }, } = item;
console.log(n);
console.log(p);
console.log(w);
