// --- SCOPE ---
/*
function bb() {
    var a = "hello";
}
// console.log(a);
// !This will not work because a is a part of the function bb

function bb() {
    var a = "hello";
    console.log(a);
}

bb();
// *This will work

var b = "Can I access this?";
// *This var b and function bb both are part of the window object ("window.a" or "window.bb()"")

function bb() {
    var a = "hello";
    console.log(b);
}
bb();
// * In this case this function have the acess to the var b. as it is the element of the window object

// *Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "byee";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    var fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun); //window 5
funFunction();  // 'hellooo'
funerFunction();  //'byee'
funestFunction(); //'AHHHH'

console.log(fun);  //'AHHHH'
// * here fun is altered last by the funestFunction();
*/
// -------------------------------------------------------------------------------------------------------------------------------













// --- ADVANCED CONTROL FLOW ---
/*
// * Ternary operator
// ?  condition ? expr1 : expr2;
// * Here if the condition is true then the expr1 will be executed otherwise expr 2 will be executed

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
console.log(answer); //You may enter

answer = isUserValid(false) ? "You may enter" : "Access Denied";
console.log(answer); // Access Denied

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available");
console.log(automatedAnswer); //Your account # is not available

automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "not available");
console.log(automatedAnswer); //Your account # is 1234

// * SWITCH STATEMENT

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break; //*the function stops if "forward is true"
            case "back":
                whatHappens = "you arrived home";
                break;
                case "right":
                    whatHappens = "you found a river";
                    break;
                    case "left":
                        whatHappens = "you run into a troll";
                        break;
                        default:
                            whatHappens = "please enter a valid direction";
                            
                        }
                        return whatHappens;
                    }
                    
                    console.log(moveCommand("forward")); //you encounter a monster
                    console.log(moveCommand("back")); //you arrived home
                    console.log(moveCommand("right")); //you found a river
                    console.log(moveCommand("left")); //you run into a troll
                    console.log(moveCommand("yugg")); //please enter a valid direction
                    */
                   // -------------------------------------------------------------------------------------------------------------------------------
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   // --- Exercise:ADVANCED CONTROL FLOW ---
                   /*
                   // var experiencePoints = winBattle() ? 10 : 1;
                   
                   function movingObject(direction) {
                       var caseScenario;
                switch (direction) {
                    case "forward":
                        caseScenario = "Hit the target";
                        break;
                        case "back":
                            caseScenario = "Missed the bull";
                            break;
                            default:
                                caseScenario="Please enter a direction";
                            }
                            return caseScenario;
                        }
                        
                        console.log(movingObject("forward"));
                        console.log(movingObject("back"));
                        console.log(movingObject(1111));
                        */
// -------------------------------------------------------------------------------------------------------------------------------









// --- ES5 and ES6 ---
/*
// * "let" and "const"
const player = "bobby";
// ! const value cannot be changed

   let experience = 100;
   let wizardLevel = false;
   
if (experience > 90) {
    let wizardLevel = true;
    //*This will create a new variable inside of the if statement
    console.log("inside",wizardLevel); //true
}

console.log("outside", wizardLevel); //false

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

obj.wizardLevel = true;

console.log(obj); //{player: 'bobby', experience: 100, wizardLevel: true}
// * The properties of an object can be changed even if we use "const"



// *DESTUCTURING
const { player, experience } = obj;
let { wizardLevel } = obj;

console.log(player, experience, wizardLevel); //bobby 100 true


// *OBJECT PROPERTIES

// const name = "john snow";

// const obj = {
    //     [name]: 'hello',
    //     [1+2] : 'hihi'
    // }
    
    // console.log(obj); //{3: 'hihi', john snow: 'hello'}
    
    const a = 'Simon';
    const b = true;
    const c = {};
    
    const obj = {
        a,
        b,
        c
    }
    console.log(obj); //{a: 'Simon', b: true, c: {…}}
    
    
    // * TEMPLATE STRINGS
    const name = "Sally";
    const age = 34;
    const pet = "horse";
    
    const greetingBest = `Hello ${name} you seem to be ${age - 10}. what a lovely ${pet} you have`;
    console.log(greetingBest); //Hello Sally you seem to be 24. what a lovely horse you have
    
    // *DEFAULT ARGUMENTS
    
    function greet(name = '', age = 30, pet = "cat") {
        return `Hello ${name} you seem to be ${age - 10}. what a lovely ${pet} you have`;
    }
    
    console.log(greet()); //Hello  you seem to be 20. what a lovely cat you have
    // *If the parameters are not defined it will use the default values
    
    
    // * SYMBOLS
    let sym1 = Symbol();
    let sym2 = Symbol("foo");
    let sym3 = Symbol("foo");
    
    console.log(sym2 === sym3); //false
    
    // *ARROW FUNCTION
    // const add = (a, b) => {
        //     return a + b;
        // }
        // OR
        const add = (a, b) => a + b;
        
        console.log(add(4,5)); //9
        */
       // -------------------------------------------------------------------------------------------------------------------------------
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       

 // --- EXERCISE ES5 AND ES6 ---
/*
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let { firstName, lastName, age, eyeColor } = person;


const a = 'test';
const b = true;
const c = 789;

const okObj = {
 a,
 b,
 c
};

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const city = "New York";
const message = `Hello  ${person.firstName}  have I met you before? I think we met in ${city} last summer no???"`;
console.log(message);

function isValidAge(age=10) {
    return age
}

const sym1 = Symbol("This is my first Symbol")

const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost";
*/
//---------------------------------------------------------------------------------------------------------------------------------













// --- ADVANCED FUNCTIONS ---
/*
// * CLOSURES: A function ran. The function executed. It's never going to execute again. But it's going to remember that there are references to those variables. So the child scope always has access to the parent scope. But the parent scope doesn't have access to the child scope.

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();


// * CURRYING: Currying in JavaScript is a method that takes one argument at a time and returns a new function that expects the next argument. Using currying, higher-order functions can be created in functional programming. Using Currying, we can also modify the DOM version in JavaScript.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)); //(b) => a * b
console.log(curriedMultiply(3)(4)); //12

const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(11)); //55



// * COMPOSE: Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions.

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

console.log(compose(sum, sum)(5)); //7


// ! Avoiding Side Effects and functional purity
var a = 1;
function b() {
    a = 2;
} //! Here this function is changing the variable which affects the outside world. this is called side effects.

// * FUNCTIONAL PURITY: A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- EXERCISE: ADVANCED FUNCTIONS ---
/*
const add = (a, b) => a + b;


const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3)); //13

// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// console.log(curriedSum(30)(1)); //31

// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// const add5 = curriedSum(5);
// console.log(add5(12)); //17

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); //16

//? What are the two elements of a pure function?
//* 1. Deterministic --> always produces the same results given the same inputs
//* 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- ADVANCED ARRAYS ---
/*
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double); //[2, 4, 20, 32]



// --- MAP ---
// * MAP: map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.

const mapArray = array.map((num) => {
    return num * 2; //! map() Must return something. Otherwise the result will be undefined.
});

console.log(mapArray); //[2, 4, 20, 32]

const mapArray2 = array.map(num => num * 2); //* We can avoid the () parenthesis if an arrow function have a single parameter.
console.log(mapArray2); //[2, 4, 20, 32]



// --- FILTER ---
// * FILTER: The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

const filterArray = array.filter(num => num > 5);

console.log(filterArray); //[10, 16]




// --- REDUCE ---
// * The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change the original array. At the first callback, there is no return value from the previous callback. Normally, array element 0 is used as initial value, and the iteration starts from array element 1. If an initial value is supplied, this is used, and the iteration starts from array element 0.

// const reduceArray = array.reduce((accumulator, num) => {
    //     return accumulator + num;
    // }, 0);

    // console.log(reduceArray); //29
    
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);
//* "5" is the value of the accumulator

console.log(reduceArray); //34
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- EXERCISE: ADVANCED ARRAYS ---
/*
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
    
];

let newArray = [];

array.forEach(user => {
    let {username} = user;
    username = username + "!";
    newArray.push(username);
});

console.log(newArray);

const mapArray = array.map(({ username }) => {
    return username + "?";
})

console.log(mapArray);


const filterArray = array.filter(user => {
    return user.team === "red";
});
console.log(filterArray);

const filterArray1 = array.filter(team => {
    return team === "red"
})
console.log(filterArray1);

const total = array.reduce((accu, user) => {
    return accu + user.score;
}, 0);

console.log(total);


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    return num * 2;
});

const answer = array.map(user => {
    user.items = user.items.map(item => {
        return item + "!";
    });
    return user;
})
console.log(answer);
*/
//---------------------------------------------------------------------------------------------------------------------------------




















// --- ADVANCED OBJECTS ---
/*
// * 1. Reference type
// ? Reference Value: JavaScript provides three types of Reference values that include Array, Object, and Function. The size of a reference value is dynamic therefore It is stored on Heap. When we access a reference value, we manipulate it through reference, not through its actual value that is stored. Numbers, boolean values, and the null and undefined types are primitive. Objects, arrays, and functions are reference types.


// * 2. Context
// ? "this" refers to what object it's inside of.
// ? Ex: this.alert()

// * 3. Instantiation
// ? In JavaScript, instantiation describes the creation of an object. JavaScript programmers can achieve this by using one of the five available patterns: Functional. Functional-shared.

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

console.log(wizard1.play()); //WEEEE I'm a Healer
console.log(wizard1.introduce()); //Hi I am Shelly, I'm a Healer

console.log(wizard2.play()); //WEEEE I'm a Dark Magic
*/
//---------------------------------------------------------------------------------------------------------------------------------



















// --- PASS BY VALUE VS PASS BY REFERENCE ---
/*
// * Copy by value
var a = 5;
var b = a;

b++;
console.log(b); //6

// * Object

let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); //{name: 'Yao', password: 'easypeasy'}
console.log(obj2); //{name: 'Yao', password: 'easypeasy'}
// * Both the password property of obj1 and obj2 is changed because they are stored in the memory through passed by reference


// * Arrays are simply objects
// var c = [1, 2, 3, 4, 5];
// var d = c;
// d.push(122344);

// console.log(d); //[1, 2, 3, 4, 5, 122344]
// console.log(c); //[1, 2, 3, 4, 5, 122344]
// // * Here variable c is also changed


// todo: To clone an array without changing the original object

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(1829383);

console.log(d); //[1, 2, 3, 4, 5, 1829383]
console.log(c); //[1, 2, 3, 4, 5]
// * Here var c didn't change


// todo: To clone an object without changing the original reference

// let obj = { a: 'a', b: 'b', c: 'c' };
// let clone = Object.assign({}, obj);

// // todo: another clean method to clone an object
// let clone2 = { ...obj };

// obj.c = 5;

// console.log(clone); //{a: 'a', b: 'b', c: 'c'}
// // * Here the clone object didn't change

// console.log(obj); //{a: 'a', b: 'b', c: 5}

// console.log(clone2); // {a: 'a', b: 'b', c: 'c'}


// * Shallow Cloning: In an object if it is cloned then the cloning happens only at the 1st level. If there is another object inside and object then we need to clone the secondary object separately.
// todo: to deep clone an object

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};

let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));
// *Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// *Convert a JavaScript object into a string with JSON.stringify().

obj.c.deep = 'HAHAHA';

console.log(obj); //{ "a": "a","b": "b", "c": { "deep": "HAHAHA"}}
console.log(clone); //{ "a": "a","b": "b","c": {"deep": "HAHAHA"}}
console.log(clone2); //{ "a": "a","b": "b","c": {"deep": "HAHAHA"}}
console.log(superClone); //{"a": "a","b": "b","c": {"deep": "try and copy me"}}
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- TYPE COERCION ---
/*
// * TYPE COERCION: Type coercion is the automatic conversion of a value from one data type to another, performed by JavaScript during the running of a program to ensure that an operation executes successfully.

1 == '1'; //true
// ? In JS type corecion happens by using "==" sign.
// ! using '==' is not suggested

-0 === +0 // true
// *But this is technically different things

Object.is(-0 === +0); //False
// *The object.is() method is used to determine whether two values are the same or not. This Object.is() takes two arguments which are the values to be compared and returns a boolean indicating whether the two arguments are the same or not.
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- EXERCISE: ADVANCED OBJECTS ---
/*
console.log([2] === [2]); //false
console.log({} === {}); //false

const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

console.log(object1); //{a: 4}
console.log(object2); //{a: 4}
console.log(object3); //{a: 4}
console.log(object4); //{a: 5}

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name,type,color)
    }
    sound() {
        console.log(`Hi I am ${this.name}, and I am ${this.color} ${this.type} `);
    }
}

const cow = new Mamal('Shelly', 'cow', 'brown');

console.log(cow);  // Mamal {name: 'Shelly', type: 'cow', color: 'brown'}
console.log(cow.sound()); // Hi I am Shelly, and I am brown cow
*/
//---------------------------------------------------------------------------------------------------------------------------------















// --- ES7 (ES20216) ---
/*
// *INCLUDES Method : The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate. It can be used in case of strings and arrays

console.log('Hellooooo'.includes('o')); //true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('dog')); // true
console.log(pets.includes('bird')); // false


// * EXPONENTIAL OPERATOR:

const square = (x) => x ** 2;

console.log(square(2)); //4
console.log(square(5)); //25

const qube = (x) => x ** 3;

console.log(qube(4)); //64
*/
//---------------------------------------------------------------------------------------------------------------------------------













// --- EXERCISE: ES7 ---
/*
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.includes('John')); // false

console.log(dragons.filter(name => name.includes('John'))); // ['Johnathan']

let multiply = (num) => num ** 100;

console.log(multiply(10000)); // Infinity
*/
//---------------------------------------------------------------------------------------------------------------------------------



















// --- ES8 (ES2017) ---
/*
// ------* String Padding

// ? .padStart()
// ? .padEnd()


console.log('Turtle'.padStart(10)); // "    Turtle"
// *This will add a padding at the start of the string

console.log('Turtle'.padEnd(10));  // "Turtle    "
// *This will add a padding at the end of the string


// ------* Trailing commas in function's parameter lists and calls

const fun = (a, b, c, d, e,) => {
    console.log(a);
}
// * Here the comma after e in function parameter is valid and will not show an error


// ------* Object.values , Object.entries & Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2:'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}) //username0 Santa username1 Rudolf username2 Mr.Grinch
// * Here by using the key method the object will behave like an array and we can use the forEach loop for this. here key is the name of the properties


Object.values(obj).forEach(value => {
    console.log(value); // Santa Rudolf Mr.Grinch
})


Object.entries(obj).forEach(value => {
    console.log(value); // Santa Rudolf Mr.Grinch
}) // ['username0', 'Santa'] ['username1', 'Rudolf'] ['username2', 'Mr.Grinch']
// * By using entries we can get both the properties and values


console.log(Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})); //['Santa0', 'Rudolf1', 'Mr.Grinch2']
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// ---EXERCISE: ES8 ---
/*
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(6);
rabbit = rabbit.padStart(6);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);


// ? The padEnd() method pads a string with another string (multiple times) until it reaches a given length.
// ? The second parameter is the string to pad with
// ? Default is space

let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

console.log(Object.entries(obj).map(value => value.join(" ")).join(" ")); // my name is Rudolf the raindeer

// * The join() method returns an array as a string. The join() method does not change the original array. Any separator can be specified. The default is comma (,).
*/
//---------------------------------------------------------------------------------------------------------------------------------













// --- ES10 (ES2019) ---
/*
// * Flat: The flat() method concatenates sub-array elements. It removes the nested arrays inside of an array.

const array = [1, [2, 3], [4, 5]];
console.log(array.flat()); //[1, 2, 3, 4, 5]

// *Parameters: How deep a nested array should be flattened.Default is 1.

const array1 = [1, 2, [3, 4, [5]]];

console.log(array1.flat());// [1, 2, 3, 4, Array(1)]
console.log(array1.flat(2)); //[1, 2, 3, 4, 5]

const entries = ['bob', 'sally', , , , , , , , , , , , , 'cindy'];
console.log(entries.flat()); //['bob', 'sally', 'cindy']

const jurassicPark = [['🦎', '🐊'], '🦕', '🐉', ['🐒', '🐬'], [[['🐉']], '🐅']];
console.log(jurassicPark.flat(50)); // ['🦎', '🐊', '🦕', '🐉', '🐒', '🐬', '🐉', '🐅']


//* FLATMAP: The flatMap() method maps all array elements and creates a new flat array. flatMap() creates a new array from calling a function for every array element.

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖');
console.log(jurassicParkChaos);['🦎,🐊🦖', '🦕🦖', '🐉🦖', '🐒,🐬🦖', '🐉,🐅🦖']


// * TRIM Method: Removes white spaces from the string

const email1 = 'JonnyWalker@gmail.com         ';
const email2 = '             logansanders@gmail.com';

console.log(email1.trimEnd()); // 'JonnyWalker@gmail.com'
console.log(email2.trimStart()); //'logansanders@gmail.com'


// * FromEntries: The fromEntries() method creates an object from iterable key / value pairs.

const userProfiles = [['commanderTom', 23], ['ragnarok52', 55], ['warlord88', 30]];

console.log(Object.fromEntries(userProfiles)); //{commanderTom: 23, ragnarok52: 55, warlord88: 30}

// ? Entries are opposite to FromEntries

const obj = Object.fromEntries(userProfiles);

console.log(Object.entries(obj)); //['commanderTom', 23] ['ragnarok52', 55]['warlord88', 30]

// * TRY AND CATCH BLOCK: The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.

try {
    bob+'hi'
} catch {
    console.log(`You've messed up`);
} // You've messed up
// * Here as bob variable is not defined so it couldn't be executed. 
*/
//---------------------------------------------------------------------------------------------------------------------------------















// --- EXERCISE: ES10 (ES2019) ---
/*
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

console.log(array.flat(50)); //[1, 2, 3, 4, 5]

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting.flatMap(x => x.join(" ")).join(" "));

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(50));

const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';

console.log(userEmail3.trim());


const users = { user1: 18273, user2: 92833, user3: 90315 };

console.log(Object.entries(users));
const newUser = Object.entries(users);

const newUser1 = newUser.map((user) => [user[0], user[1] ** 2]);
console.log(newUser1);

console.log(Object.fromEntries(newUser1));
*/
//---------------------------------------------------------------------------------------------------------------------------------



















// --- ADVANCED LOOPS ---
/*
const basket = ['apples', 'oranges', 'grapes'];

//* FOR LOOP

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
} // apples oranges grapes


//* FOREACH Loop

basket.forEach(item => {
    console.log(item);
}) // apples oranges grapes


//* FOR OF LOOP

for (item of basket) {
    console.log(item);
} // apples oranges grapes
// * Basically here we are iterating. In JS we can iterate through 1. Arrays 2. Strings

for (item of 'basket') {
    console.log(item);
} // b a s k e t



//* FOR IN LOOP
// ? The for in loop works with the objects. It allows us to loop over and see the object properties. Here we are not iterating rather enumerating. Objects are not iterable.

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for (item in detailedBasket) {
    console.log(item);
} // apples oranges grapes
// ! We cannot use the FOR OF loop in an Object but we can use the FOR IN loop in arrays. Because arrays are type of OBJECT
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- EXERCISE: ADVANCED LOOPS ---

/*
const array = [-1,0,3,100, 99, 2, 99] 
const array2 = ['a', 3, 4, 2] 
const array3 = [] 

function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i];
        }
    }
    return highest;
}

function biggestNumberInArray2(arr) {
    let highest = 0;
    arr.forEach(element => {
        if (highest < element) {
            highest=element
        }
    });
    return highest;
}

function biggestNumberInArray3(arr) {
    let highest = 0;
    for (item of arr) {
        if (highest < item) {
            highest = item;
        }
    }
    return highest;
}

console.log(biggestNumberInArray(array)); //100
console.log(biggestNumberInArray2(array2)); //4
console.log(biggestNumberInArray3(array3)); //0

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket) {
        if (item === lookingFor) {
            return `${lookingFor} is in your basket`
        }
    }
    return 'that does not exist in your basket'
}


console.log(checkBasket(amazonBasket, "glasses")); //glasses is in your basket
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- ES2020 PART 1, 2, 3 ---
/*
// * BIGINT

console.log(typeof 1n); //bigint
// ? If we put 'n' after a number then we will get the bigint

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// ? Beyond this max safe integer JS cannot calculate properly and will give out wrong results. For bigger numbers we use bigint. In that case we need to add "n" after each number to calculate.


// *OPTIONAL CHAINING OPERATOR: The Optional Chaining Operator returns undefined if an OBJECT is undefined or null (instead of throwing an error).

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}


let weight = andrei_pokemon?.pikachu?.weight;
// ! Here pikachu is not there in the object

console.log('weight', weight); //weight undefined

let weight2 = andrei_pokemon?.raichu?.weight;

console.log(weight2); //30


// * NULLISH COALESCING OPERATOR: The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second. This operator doesn't check for TRUTHY or FALSY values instead it checks if its NULL or UNDEFINED

let power = andrei_pokemon?.raichu?.power || 'no power';

console.log(power); //no power

let power1 = andrei_pokemon?.raichu?.power ?? 'no power';

console.log(power1); // 0
// ! "0" is a falsy value but still the "??" operator returns "0"
*/
//---------------------------------------------------------------------------------------------------------------------------------




// --- EXERCISE: ES2020 ---
/*
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

console.log(3n+4n+1n);

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}


let andrei = andrei_pokemon?.raichu;

let will = will_pokemon?.pikachu?.friend?.charizard;

function pokemon() {
    if (andrei && will) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }
}

pokemon();

console.log(false ?? 'hellooo') // False
console.log(null ?? 'hellooo') // hellooo
console.log(null || 'hellooo') // hellooo 
console.log((false || null) ?? 'hellooo') // hellooo
console.log(null ?? (false || 'hellooo')) // hellooo
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- ES2021 ---
/*
// * REPLACE ALL METHOD: The replaceAll() method searches a string for a value or a regular expression.The replaceAll() method returns a new string with all values replaced.The replaceAll() method does not change the original string. 1st parameter is the search value and the 2nd parameter is the new value.


const str = `ztm is the best of the best`;

console.log(str.replaceAll('best', 'worst')); //ztm is the worst of the worst

console.log(str); //ztm is the best of the best
// ? The original variable doesn't change
*/
//---------------------------------------------------------------------------------------------------------------------------------
















// --- ES2022 ---
/*
// * AT () Method: The at() method returns an indexed element from an array. The at() method returns the same as [].


const arr = [100, 200, 400, 50000, 10];

// todo: To find the 50000 in the arr

console.log(arr[arr.length - 2]); //50000

console.log(arr.at(-2)); //50000

console.log(arr.at(-1)); //10
// ! -1 is always the last item of the array by default.
*/
//---------------------------------------------------------------------------------------------------------------------------------















// --- DEBUGGING ---
/*
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, []
    
    );
    
    console.log(flattened);[0, 1, 2, 3, 4, 5];
    */
   //---------------------------------------------------------------------------------------------------------------------------------
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // --- MODULES ---
   /*
   //    * ES6 + Webpack2
   
   // js1
   export const add = (a, b) => a + b;
   // or
   export default function add() {
       return a + b;
    }
    
    // js2
    import { add } from './add';
    // or
    import add from './add';
    
    // *Webpack
    module.exports = {
        entry: './app/main.js',
        output: {
            path: './dist',
            filename: 'bundle.js'
        }
}
*/
//---------------------------------------------------------------------------------------------------------------------------------

















// --- OPTIONAL PRACTICE: JAVASCRIPT LOGIC ---

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
