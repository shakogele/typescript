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

// Any - !?
let anyType: any = "asda";
anyType = 5;
anyType = true;
anyType = Size.small;

// Void - deosnot return anything - used in funcitons
let sing = (): void => {
  console.log("Singing")
}

// string return example
let singing = (): string => {
  console.log("Singing");
  return "Singing";
}

// never
let error = (): never => {
  throw Error('error');
}

// Interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}
// Same effect
type RobotArmyType = {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT")
}

// Type Assertions

let dog = {} as RobotArmy;
console.log(dog.count);

// functions

let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("Hello");
}
let fightRobotArmyReturnsString = (robots: RobotArmy): string => {
  return "String";
}
let fightRobotArmyReturnsNumber = (robots: RobotArmy): number => {
  return 20;
}

// classes

class Animal {
  sing: string = "singing....";
  constructor(sound: string){
    this.sing = sound;
  }

  greet(){
    return `hello ${this.sing}`;
  }
}

let lion = new Animal("knuw");
lion.greet();
lion.sing;

// Union
let confused: string | number = "Hello";


console.log(isCool);
console.log(age);
console.log(firstName);
console.log(pets);
console.log(wizard);
console.log(und);
console.log(nul);
console.log(basket);
console.log(sizeName);
console.log(anyType);
console.log(sing)
console.log(singing)
console.log(error)

const sum = (a:number, b:number) => {
  return a+b;
}
