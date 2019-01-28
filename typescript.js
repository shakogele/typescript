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
console.log(isCool);
console.log(age);
console.log(firstName);
console.log(pets);
console.log(wizard);
console.log(und);
console.log(nul);
console.log(basket);
console.log(sizeName);
var sum = function (a, b) {
    return a + b;
};
