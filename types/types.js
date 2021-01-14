"use strict";
// string
var userName = 'Osorio';
console.log(userName);
// userName = 28
// numbers
var age = 27;
// age = 'Ana'
age = 27.5;
console.log(age);
// boolean
var hasHobbies = false;
// hasHobbies = 1
console.log(hasHobbies);
// explicit
var myAge;
myAge = 27;
console.log(typeof myAge);
// myAge = '27'
// array
var hobbies = ["Football", "eat"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuples
var address = ["Test Street", 99, ""];
console.log(address);
address = ["New Street", 1260, "Complement"];
console.log(address);
// enums
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Orange"] = 11] = "Orange";
    Color[Color["Yellow"] = 12] = "Yellow";
    Color[Color["Red"] = 100] = "Red";
})(Color || (Color = {}));
var minhaColor = Color.Green;
console.log(minhaColor);
console.log(Color.Blue);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Green, Color.Red);
// any
var car = 'BMW';
console.log(car);
car = { marca: 'BMW', year: 2019 };
console.log(car);
// functions
function getMyName() {
    // return minhaIdade
    return userName;
}
console.log(getMyName());
function sayHello() {
    console.log('Hi');
    // return myAge
}
sayHello();
function multi(numA, numB) {
    return numA * numB;
}
// console.log(multi(2, 'Test'))
console.log(multi(4.7, 9));
// type function
var calc;
// calc = sayHello
// calc()
calc = multi;
console.log(calc(5, 6));
// objects
var user = {
    name: 'osor1o',
    age: 23
};
console.log(user);
// user = {}
// user = {
//     name1: 'test',
//     age1: 30
// }
user = {
    age: 30,
    name: 'test'
};
console.log(user);
var employeer = {
    supervisors: ['s1', 's2'],
    hitPoint: function (hour) {
        if (hour <= 8)
            return 'normal';
        return 'out';
    }
};
var employeer2 = {
    supervisors: ['s3', 's4'],
    hitPoint: function (hour) {
        if (hour <= 8)
            return 'normal';
        return 'out';
    }
};
console.log(employeer.supervisors, employeer.hitPoint(5));
// Union Types
var value = 10;
console.log("value is: " + value);
value = '10';
console.log("value is: " + value);
// value = true
// console.log(`value is: ${value}`);
// Check types
var newValue = 30;
if (typeof newValue === 'number') {
    console.log('is a number!');
}
else {
    console.log(typeof newValue);
}
// never
// function error(msg: string): never {
//     throw new Error(msg)
// }
// const product = {
//     name: 'ball',
//     price: 8,
//     validate() {
//         if (!this.name || this.name.trim().length == 0) {
//             error('Need a name')
//         }
//         if (this.preco <=) {
//             error('Invalid price')
//         }
//     }
// }
// product.validate()
// strict null
var price = 12;
// price = null
var optionalPrice = 12;
optionalPrice = null;
var contact1 = {
    name: 'contract name',
    tel1: '123',
    tel2: null,
};
console.log(contact1.name, contact1.tel1, contact1.tel2);
var allowNull = null;
allowNull = 12;
console.log(allowNull);
allowNull = 'abc';
console.log(allowNull);
var bankAccount1 = {
    balance: 3456,
    deposit: function (value) {
        this.balance += value;
    }
};
var accountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount1,
    contacts: ['34567890', '98765432']
};
accountHolder.bankAccount.deposit(3000);
console.log(accountHolder);
