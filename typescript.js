// boolean true/false
var isCool = true;
// number 1,2,3,4,5 ...
var age = 30;
// string 'Shalva'
var firstName = 'Shalva';
// Array ['first', 'second', 'third']
// let pets: string[] = ['Shalva', 'Giorgi', 'qaquca'];
var pets = ['Shalva', 'Giorgi', 'qaquca'];
// Object
var wizard = {
    a: 'John'
};
// Null and Undefined
var und = undefined;
var nul = null;
// Tuple different types
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
// Any - !?
var anyType = "asda";
anyType = 5;
anyType = true;
anyType = Size.small;
// Void - deosnot return anything - used in funcitons
var sing = function () {
    console.log("Singing");
};
// string return example
var singing = function () {
    console.log("Singing");
    return "Singing";
};
// never
var error = function () {
    throw Error('error');
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT");
};
// Type Assertions
var dog = {};
console.log(dog.count);
// functions
var fightRobotArmy3 = function (robots) {
    console.log("Hello");
};
var fightRobotArmyReturnsString = function (robots) {
    return "String";
};
var fightRobotArmyReturnsNumber = function (robots) {
    return 20;
};
// classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "singing....";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("knuw");
lion.greet();
lion.sing;
// Union
var confused = "Hello";
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
console.log(sing);
console.log(singing);
console.log(error);
var sum = function (a, b) {
    return a + b;
};
