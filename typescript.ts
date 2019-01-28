// boolean true/false
let isCool: boolean = true;

// number 1,2,3,4,5 ...
let age: number = 30;

// string 'Shalva'
let firstName: string = 'Shalva'

// Array ['first', 'second', 'third']
// let pets: string[] = ['Shalva', 'Giorgi', 'qaquca'];
let pets: Array<string> = ['Shalva', 'Giorgi', 'qaquca'];

// Object
let wizard: object = {
  a: 'John'
};

// Null and Undefined
let und: undefined = undefined;
let nul: null = null;

// Tuple different types
let basket: [string, number]
basket = ['basketball', 5];

// Enum
enum Size { small = 1, medium = 2, large = 3};
let sizeName: string = Size[2];

console.log(isCool);
console.log(age);
console.log(firstName);
console.log(pets);
console.log(wizard);
console.log(und);
console.log(nul);
console.log(basket);
console.log(sizeName);
const sum = (a:number, b:number) => {
  return a+b;
}
