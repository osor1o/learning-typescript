// string
let userName: string = 'Osorio'
console.log(userName)
// userName = 28

// numbers
let age: number = 27
// age = 'Ana'
age = 27.5
console.log(age)

// boolean
let hasHobbies: boolean = false
// hasHobbies = 1
console.log(hasHobbies)

// explicit
let myAge: number
myAge = 27
console.log(typeof myAge)
// myAge = '27'

// array
let hobbies: any[] = ["Football", "eat"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuples
let address: [string, number, string] = ["Test Street", 99, ""]
console.log(address)

address = ["New Street", 1260, "Complement"]
console.log(address)

// enums
enum Color {
    White, // 0
    Green = 100, // 100
    Blue = 10, // 2
    Orange,
    Yellow,
    Red = 100
}

let minhaColor: Color = Color.Green
console.log(minhaColor)

console.log(Color.Blue)
console.log(Color.Orange, Color.Yellow)
console.log(Color.Green, Color.Red)

// any
let car: any = 'BMW'
console.log(car)
car = { marca: 'BMW', year: 2019 }
console.log(car)

// functions
function getMyName(): string {
    // return minhaIdade
    return userName
}

console.log(getMyName())

function sayHello(): void {
    console.log('Hi')
    // return myAge
}

sayHello()

function multi(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multi(2, 'Test'))
console.log(multi(4.7, 9))

// type function
let calc: (a: number, b: number) => number
// calc = sayHello
// calc()

calc = multi
console.log(calc(5, 6));

// objects
let user: { name: string, age: number } = {
    name: 'osor1o',
    age: 23
}

console.log(user);

// user = {}

// user = {
//     name1: 'test',
//     age1: 30
// }

user = {
    age: 30,
    name: 'test'
}
console.log(user);

// Question
// Alias
type Employerr = {
    supervisors: string[],
    hitPoint: (hour: number) => string
}

let employeer: Employerr = {
    supervisors: ['s1', 's2'],
    hitPoint: (hour: number): string => {
        if (hour <= 8)
            return 'normal'
        return 'out'
    }
}

let employeer2: Employerr = {
    supervisors: ['s3', 's4'],
    hitPoint: (hour: number): string => {
        if (hour <= 8)
            return 'normal'
        return 'out'
    }
}

console.log(employeer.supervisors, employeer.hitPoint(5));

// Union Types
let value: number | string = 10
console.log(`value is: ${value}`);
value = '10'
console.log(`value is: ${value}`);
// value = true
// console.log(`value is: ${value}`);

// Check types
let newValue = 30

if (typeof newValue === 'number') {
    console.log('is a number!');
} else {
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
let price = 12
// price = null

let optionalPrice: number | null = 12
optionalPrice = null

type Contact = {
    name: string,
    tel1: string,
    tel2: string | null,
}

const contact1: Contact = {
    name: 'contract name',
    tel1: '123',
    tel2: null,
}

console.log(contact1.name, contact1.tel1, contact1.tel2);

let allowNull = null
allowNull = 12
console.log(allowNull)
allowNull = 'abc'
console.log(allowNull);

// question
type BankAccount = {
    balance: number,
    deposit: (value: number) => void
}

type AccountHolder = {
    name: string,
    bankAccount: BankAccount,
    contacts: string[],
}

let bankAccount1: BankAccount = {
    balance: 3456,
    deposit(value: number): void {
        this.balance += value
    }
}

let accountHolder: AccountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount1,
    contacts: ['34567890', '98765432']
}
 
accountHolder.bankAccount.deposit(3000)
console.log(accountHolder)
