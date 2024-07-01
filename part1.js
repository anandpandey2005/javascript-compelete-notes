// let  name = " anuj pandey";
// document.write(name);
// age =10;
// document.write(age);
// age = 90;

function variableDeclaritive() {
  const studentId = 1;
  let name = " anand pandey ";
  var age = 12;
  // studentId = 2;          //   -------> it doesnt work
  name = "anuj pandey"; //     ------> it works
  age = 13; //     -------> dosnt affeect by global scope
  document.write(studentId);
  document.write(name);
  document.write(age);
}

function variableTypeof() {
  let name = "anand pandey";
  let age = 12;
  let emailid = null;
  let array = ["hii", "iam", "annadpandey", "age", 20];
  let fun = function hello() {};
  let obj = { name: "anand pandey", age: 20 };
  document.write(typeof name + "<br>");
  document.write(typeof age + "<br>");
  document.write(typeof emailid + "<br>");
  document.write(typeof array + "<br>");
  document.write(typeof fun + "<br>");
  document.write(typeof obj + "<br>");
  document.write(typeof undefined + "<br>");
}

function conversion() {
  let score = 33;
  let score2 = "33abc";
  let score3 = "33abc";
  let score4 = null;
  let score5 = 1;
  let valueInNumber = Number(score2);
  let valueInNumber2 = Number(score3);
  let valueInNumber3 = Number(score4);
  let numberToBoolean = Boolean(score5);

  document.write(typeof score);
  document.write(typeof score2);
  document.write(typeof valueInNumber);
  document.write(valueInNumber2);
  document.write(valueInNumber3);
  document.write(numberToBoolean);

  // -----> into number
  // "33" => 33
  // "33abc" => NaN
  // true    => 1
  // false    => 0

  //------> into boolean
  // 1 ----> true ;                                        0 -----> false;
  // "anand " ----> true                                   "  " ----> false ;

  // also convert number into string as above               ----> string()
}

function operation() {
  let value = 3;
  let negValue = -value;

  document.write(negValue);
  document.write("<br>");
  document.write(2 + 2);
  document.write("<br>");
  document.write(2 - 2);
  document.write("<br>");
  document.write(2 / 2);
  document.write("<br>");
  document.write(2 % 2);
  document.write("<br>");
  document.write(2 * 2);
  document.write("<br>");
  document.write(2 ** 3);
  document.write("<br>");

  document.write("---------------------------------" + "<br>");

  document.write("1" + 2);
  document.write("<br>");

  document.write(1 + "2");
  document.write("<br>");

  document.write("1" + 2 + 2);
  document.write("<br>");

  document.write(1 + 2 + "3");
  document.write("<br>");

  document.write("1" + 2 + "3");
  document.write("<br>");

  document.write(true);
  document.write("<br>");

  document.write(+true);
  document.write("<br>");

  document.write(-true);
  document.write("<br>");

  document.write(+"");
  document.write("<br>");

  let num1, num2, valueInNumber3;

  num1 = num2 = num3 = 2 + 2;
  document.write(num1);

  // mdn ---> prefix / postfix
}

function comparision() {
  document.write(2 > 1);
  document.write("<br>");
  document.write(2 >= 1);
  document.write("<br>");
  document.write(2 < 1);
  document.write("<br>");
  document.write(2 == 1);
  document.write("<br>");
  document.write(2 != 1);
  document.write("<br>");

  //  problem occur  when you not compare same data types     for example ->
  // typescript not allow you to comapre diferent types

  document.write("when datatype are not sametype" + "<br>");
  document.write("2" > 1);
  document.write("<br>");

  document.write("02" >= 1);
  document.write("<br>");

  document.write(null > 0);
  document.write("<br>");

  document.write(null >= 0);
  document.write("<br>");

  document.write(null < 0);
  document.write("<br>");

  document.write(null <= 0);
  document.write("<br>");

  document.write(null == 0);
  document.write("<br>");

  document.write(undefined > 0);
  document.write("<br>");

  document.write(undefined >= 0);
  document.write("<br>");

  document.write(undefined == 0);
  document.write("<br>");

  document.write(undefined < 0);
  document.write("<br>");

  document.write(undefined <= 0);
  document.write("<br>");
  /*

  the reason is that an equallity check == and comparision > <> >= <= work differentibility. 
  comparisions convert null to a number , treating it as 0 thats why (3) null >=0 is true 
  and (1) null>0 is false
  
  
  strrict check  ---> it  chack value and also its datatypes if both are satisfied then its through true(1) else false(0)


# DATA TYPES

---> PRIMITIVE 
-> String  Number  Boolean  null  undefined   symbol  BigInt

const id = symbol('123');
const anotherId = symbol('123');

document.write(id===anotherId);   ---->  it through false 


---> NON -PRIMITIVE / REFRENCE 
-> array   object  function

-------------------------------------------------------------
const name = ["anand " , "anuj"];

--------------------------------------------------------------
let obj = {
          nmae: "anand",
          age:20,
}
--------------------------------------------------------------

const myFunction = function(){
document .write("hello coders");

}
---------------------------------------------------------------



Undefined => "undefined"
Null      => "object"
Boolean   => "boolean"
Number    => "number"
string    => "string"
symbol    =>  "symbol"
function  => "function"   ---> object-function
object(native and does not implement [[call]])   => "object"
object(native or host and does implement [[call]])   => "function"
object(host and does not  implement [[call]])   => implementation-defined except may notn be "undefined","boolean","number",or "string"




--------->  javascript is dynamically typed language  
->          This means that variables in JavaScript do not have a fixed type, and their type can 
            change at runtime based on the value assigned to them. For example, a variable can hold 
            a number, then later hold a string or an object without any type declaration or conversion. 
            This flexibility is a key characteristic of dynamically typed languages.

*/
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

stack  (primitive)   , heap  (non-primitive)

example -----> 

const myName="anandpandey";
let anotherName=myName;
anotherNumber="anujpandey";

document.write(myName);
document.write("<br>");

                       ------->   anandpandey

document.write(anotherName);
document.write("<br>");

                      ---------> anujpandey

document.write(myName);
document.write("<br>");

                       --------> anandpandey            

in stack original value doesnt change but in refrencal original value will change 



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

---------> STRING 
const name = "anandpandey";
const value = 10;
document.write(`My  Name is ${name} and my repo count is  ${value}`);

---> another way to declare a srtring 
--> it is an  object 
-->  you are able to use more string function that are available in javascript

const name = new string('anandpandey');


++++++++++++++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/

function number() {
  const score = 2005;
  const score2 = new Number(2005);
  document.write(score);
  document.write("<br>");
  console.log(score2);
  console.log(score2.toString().length); // toFixed(2) => precise the number ----> example => 100.89180791  after using to fixeed ----> 100.89
  const otherNumber = 23.9087;
  document.write(otherNumber.toPrecision(2)); // range between 1 and -21  ---> return string
  document.write("<br>");
  const hundreds = 1000000000;
  document.write(hundreds.toLocaleString("en-IN"));
  document.write("<br>");
}
/*
++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
abs             =>    neg(value)                                                   =>      positive(value) only
round           =>    roundoff                                                     =>      4.3 => 4 / 4.6 => 5    
cieling         =>    top value                                                    =>      4.2 => 5 / 4.6 => 5
floor           =>    lower value                                                  =>      4.2 => 4 / 4.6 => 4
sqrt            =>    it generate the square root of the number 
power           =>    it  multiplies the number in tims of power 
Math.min        =>    find min value from the array
Math.maxx       =>    find max value from the array
Math.randoom    =>    it generate random number in the range beteen (0) and (1)


*/
function Mathe() {
  const max = 10;
  const min = 20;
  document.write(Math.floor(Math.random() * 10));
  document.write("<br>");
  document.write(Math.floor(Math.random() * (max - min + 1)) + min);
}

/*
++++++++++++++++++++++++++++++++++++ DATE AND TIME  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
new Date()                         =>       Sat Jun 29 2024 14:13:29 GMT+0530 (India Standard Time)
toDateString()                     =>       Sat Jun 29 2024
toJSON()                           =>       2024-06-29T08:48:18.823Z
toISOSString()                     =>       2024-06-29T08:48:59.704Z
toLocaleDateString()               =>       29/6/2024
toLocalString                      =>       29/6/2024, 2:20:46 pm
toLocalTimeString                  =>       2:21:47 pm
toString                           =>       Sat Jun 29 2024 14:22:33 GMT+0530 (India Standard Time)
toTimeString()                     =>       14:23:30 GMT+0530 (India Standard Time)
toUTCString()                      =>       Sat, 29 Jun 2024 08:54:13 GMT
.getTimezoneOffset()               =>       -330

type of date -----> object

*/

function seeDateOrTime() {
  const myDate = new Date();
  //document.write(myDate.getTimezoneOffset());
  document.write("<br>");
  let createdDate = new Date(2025, 1, 23);
  let createdDate2 = new Date(2025, 1, 23, 5, 8);
  let createdDate3 = new Date("2005-02-23");
  document.write(createdDate); // => Sun Feb 23 2025 00:00:00 GMT+0530 (India Standard Time)
  document.write("<br>");
  document.write(createdDate2); //  => Sun Feb 23 2025 05:08:00 GMT+0530 (India Standard Time)
  document.write("<br>");
  document.write(createdDate3); //   => Wed Feb 23 2005 05:30:00 GMT+0530 (India Standard Time)
  document.write("<br>");

  let myTimeStamp = Date.now();
  document.write(myTimeStamp); // 1719654027216 milisecond value
  document.write("<br>");

  let myTimeStamp2 = Math.floor(Date.now() / 1000);
  document.write(myTimeStamp2); // 1719654230
  document.write("<br>");

  let newDate = new Date();
  document.write(newDate.getMonth()); // and its have different types of propperty
}

/*
++++++++++++++++++++++++++++++++++++ ARRAYS  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

> colllection of multiple item in singel item 
> javascript arrays are not associative arrays ----> array element can't be accesed via arbituary string as index
> arrays make shallow copy 

-------> methods

push()               =>       push elelment into an an array inn end of  the array (insert / add)
pop()                =>       pop  element into an array into end of the array  (delete / remove)
unshift()            =>       insert elelment into the front of the array by shifting the elemetn of an array 
shift()              =>       remove the element of an array from front of the array         
includes()           =>       check individual element present in an array or not if present then it through true othewise false
indexOf()            =>       check what element present of in this index 
join()               =>       add all the element of an  array into a string seperated  by the specifid seperator      ---> it change the type of the array  ------> array <=> string
slice()              =>       it  doesn't affect the original array here we give range in between  extract word 
splice()             =>       it affect the original array
spread               =>       ... X , ...y      => it is most prefered then concat 
flat()               =>       Returns a new array with all sub array elemets concated into it recursively up to the specified depth      ----> pass the number for  solve how much in depth  ---> infinety
from()               =>       it is used to form / create a array  
of()                 =>       same as from
*/

function seeArray() {
  const myArr = [0, 1, 2, 3, 4, 5];
  const myCar = ["innova", "thar"];

  const myArr2 = new Array(1, 2, 3, 4);
  document.write(myArr[1]);
  document.write("<br>");
  document.write(myArr.push());
  document.write("<br>");

  document.write(myArr.pop());
  document.write("<br>");

  document.write(myArr.unshift(9));
  document.write("<br>");

  const lord = ["ram", "shiv", "narayana"];
  const astra = ["bow", "trident", "chakra"];
  const lord2 = ["ram", "shiv", "narayana"];
  const astra2 = ["bow", "trident", "chakra"];
  const spreader = [...lord, ...astra];
  lord.push(astra); // Adds 'astra' array as a single element in 'lord'
  const combinedArray = lord2.concat(astra2); // Creates a new array combining 'lord2' and 'astra2'

  document.write(lord); // Outputs the 'lord' array with 'astra' as nested array
  document.write("<br>");
  document.write(combinedArray); // Outputs the combined array

  document.write(combinedArray); // Logs the original 'lord2' array to console
  document.write("<br>");

  document.write(spreader); // Logs the original 'lord2' array to console
  document.write("<br>");

  const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
  const realAnotherArray = anotherArray.flat(Infinity);
  document.write(realAnotherArray);
  document.write("<br>");

  document.write(Array.from("anandpandey"));
  document.write("<br>");

  document.write(Array.from({ name: "anandpandey" })); // interesting
  document.write("<br>");

  let phoneNumber = 420;
  let phoneNumber2 = 430;
  let phoneNumber3 = 440;

  document.write(Array.of(phoneNumber, phoneNumber2, phoneNumber3));
  document.write("<br>");
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++   OBJECT    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
> two type  declaration are there 
(1) -> literal
(2) ->  constructer


---> if you want to freezee the objec then must use  this 
> object.freeze(objectName);
constructer se bnega(form)   singleton object
this  --> it is use top refrence the same object     => all the property that are in object are accessiable 

*/
function objectLiteral() {
  const mySymbol = Symbol("key1");

  const user = {
    name: "anandpandey", // here system take name variable as string
    name2: "ujjawalpandey", // it is difficult to access the value  by key using . method
    age: 19,
    mySymbol: "hii", // it is not good
    [mySymbol]: "hii", // it is not good
    location: "new delhi",
    isLoggin: true,
    lastLoginINDays: ["monday", "sunday"],
  };

  // ACCESSING
  document.write(user.name);
  document.write("<br>");

  document.write(user.name2);
  document.write("<br>");

  document.write(user.mySymbol); // datatypes are not symbol
  document.write("<br>");

  document.write(user["mySymbol"]);
  document.write("<br>");

  document.write(user[mySymbol]); // it is goood in  mannner
  document.write("<br>");
}

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ OBJECT PART 2 +++++++++++++++++++++++++++++++++++++++++++++++++
> here we use object as singleton object



*/

function objectPart2() {
  const lenovoUser = {};
  lenovoUser.userId = "20005lenovo";
  lenovoUser.userName = "anandpandey";
  lenovoUser.isLoggin = true;
  //console.log(lenovoUser);

  const regularUser = {
    email: "anandpandey@gmail.com",
    fullName: {
      userFullName: {
        firstName: "anand",
        lastName: "pandey",
      },
    },
  };

  // console.log(regularUser);

  const obj = { 1: "a", 2: "b" };
  const obj2 = { 1: "p", 2: "y" };
  const obj5 = { 1: "p", 2: "y" };

  const obj4 = { ...obj, ...obj2, ...obj5 };
  document.write(obj4); // for extracct keys use .keys(pass paramaeter ) .alues
}

function objectPart3() {
  const course = {
    courseName: "XYZ",
    coursePrice: "free",
    courseInstructor: "anandpandey",
  };

  const { coursePrice } = course; //    => coursePrice : price      this is  the  best or most useful  method
  document.write(coursePrice);
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION AND PARAMETER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
argument       =>  value pass in function call
parameter      =>  value pass in function deffination


> when you not pass argument then it through undefined
+++++++++++
...   => it is a spereder operator
... => its make bundle of variable and return in array format
*/

function calculateCartPrice(...number) {
  return number;
}

//console.log(calculateCartPrice(500, 500, 326));   // it return 500 , 500 ,326 in array format
//document.write("<br>");

function calculateCartPrice2(value, value2, value3, ...number) {
  return number;
}
//console.log(calculateCartPrice2(500,600,200,600,300,900,7000))  // it return  600 , 300 , 900 , 70000 in array format

const user = {
  userName: "Anand Pandey",
  password: "Wrong*Password",
};

function handleObject(anyObject) {
  document.write(
    `username => ${anyObject.userName} <br>password => ${anyObject.password}`
  );
  document.write("<br>");
}

// handleObject(user); // it is not madatory you already make  object
// handleObject({
//   userName: "Anand Pandey", // you pass an array  also like that
//   password: "Wrong*Password",
// }); //  you make object in functon argument

// same as to pass array

const myNewArray = [5, 600, 320];

function returnSecondArrayValue(anyArray) {
  document.write(`the scond value of an array => ${anyArray[1]}`);
}

//returnSecondArrayValue(myNewArray);

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++=== LOCAL AND GLOBAL SCOPE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let a = 10;
const b = 10;
var c = 10;
{}   => it is a scope when come it come with function,conditional oprateor an with othe operation
*/

if (true) {
  let a = 10;
  const b = 10;
  var c = 10;
}

// console.log(a);          it is okay
// console.log(b);          it  is okay
//   document.write(c);      //  it is not okay coz it accesiable  in outer of the scope so here we confidet to say var is a global scope

/*
+++++++++++++++++++++++++++++++++++++++++++++++++ SCOPE LEVEL AND MINI HOISTING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



in JavaScript, functions can be written in several ways, each with its syntax and use cases. Here are the main types of functions in JavaScript:



----------------------------------------------------------------------------
(1)  Function Declarations

function functionName(parameters) {
     function body
}

---------------------------------------------------------------------------
(2)     Function Expressions


const functionName = function(parameters) {
     function body
};

----------------------------------------------------------------------------
(3)      Arrow Functions

const functionName = (parameters) => {
     function body
};

-----------------------------------------------------------------------------
(4)      Anonymous Functions

(function() {
     function body
})();
-------------------------------------------------------------------------------
(5)      Immediately Invoked Function Expressions (IIFE)

(function() {
     function body
})();

--------------------------------------------------------------------------------
(6)       Generator Functions

function* generatorFunction() {
     function body
}

---------------------------------------------------------------------------------
(7)        Async Functions

async function functionName(parameters) {
    function body
}

----------------------------------------------------------------------------------
(8)        Constructor Functions

function ConstructorFunction(parameters) {
     function body
}
const obj = new ConstructorFunction();

-----------------------------------------------------------------------------------
(9)        Class Methods

class ClassName {
    methodName(parameters) {
         function body
    }
}

*/
//addOne(3);
function addOne(num) {
  document.write(num + 1);
}

// addTwo(5);     // if we call this type of function before its defination then its throw error
const addTwo = function (num) {
  document.write(num + 2);
};
//addTwo(5)

/*
+++++++++++++++++++++++++++++++++++++++++++++++++ THIS AND ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++

when you use current context then must use this 

*/

const helloUser = {
  userName: "Anand Pandey",
  userId: "2005ap",
  greetingMessage: function () {
    console.log(`${this.userName} , welcome to the website`);
    console.log(this);
  },
};
// helloUser.greetingMessage();
// helloUser.userName = "Anuj Pandey";
// helloUser.greetingMessage();
// console.log(this);     // wndow object ---> global object    in nodejs environment it give empty object

const arrowFunction = (val1, val2) => {
  document.write(`${userName}, welcome to the website`);
  return val1 + val2;
};

//arrowFunction(52 , 56);

// ------------------------>    implicity return

const arrowFunctionImplicit = (val1, val2) => val1 + val2; // here  need to write return keyword
const arrowFunctionImplicit2 = (val1, val2) => val1 + val2; // here no  need to write return keyword  it is suitable for returning a object

//arrowFunctionImplicit(52 , 56);
//arrowFunctionImplicit2(52 , 56);

/* 
+++++++++++++++++++++++++++++++++++  Immediately invoked function ++++++++++++++++++++++++++++++++++++++++++
Immediately Invoked Function Expressions (IIFEs) in JavaScript are functions 
that are executed right after they are defined, providing a way to create a 
local scope and avoid polluting the global namespace. This technique is
useful for encapsulating code and maintaining privacy of variables and functions 
within the IIFE.

invoked function => Global scope pollution can often cause problems, so we have used this to eliminate the pollution that can occur.  

*/
// named iife     -> its has function name
(function invokedUse() {
  //  document.write("database connected");
})();

// simple iife     -> its dont has function name
((name) => {
  // document.write(` database connected 2 nd time ${name}`);
})("anandpandey");

/* 
+++++++++++++++++++++++++++++++++++ HOW DOES JAVASCRIPT WORKS BEHINND THE SCENE ++++++++++++++++++++++++++++++++++++++++++++++++++++++
 => execution context     ---> how javascript execute your file / program
 => it is a single  threded languge
 javascript run your program / file in two  phase 

 > memorey creation phase               > execution phase

 global execution context --> yeh bnta hi bnta hian jaha gec bnega use refer kr diya jaata hain
                              this mein

broweser ka gec window object 

function execution context -->

eval execution context  -->  

notes not available 


++++++++++++++++++++++++++++++++++++++++++ CONTROl FLOW IN JAVASCRIPT +++++++++++++++=+++++++++++++++++++++++++++++++++++++++++++++++++
====> FALSY VALUE 

> false
> 0
> -0
> BigInt 0n
> "
> undefined
> NaN
> null

====> TRUTHY VALUE

> "0"
> 'false'
> "space"
> []
> {}
> function(){}

 
Nullish coalescing Operator (??) : null   undefined      ---> this operator is only made for null undefined datab types

it is differ from ternary operator 

*/
let val;
val = 5 ?? 10;
val = null ?? 10; // "If your program or file encounters a null or undefined value, it doesn't work properly because we don't know where that value came from."
val = undefined ?? 10;
val = 5 ?? 10 ?? 85; //  first value mil jaati hain whi  assign ho jata hain

//document.write(val);

let icecreamPrice = 50;

// ternory operator
// icecreamPrice <60 ? document.write("you have permission to buy the product") : document.write("you have non permission to buy the product");

let productRating = 1;

if (productRating) {
  if (productRating <= 10) {
    //   document.write(`customer gave you ${productRating} rating `);
  }
}

/*
+++++++++++++++++++++++++++++++++++++++++ LOOPS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 i hope you are already familiar with this in other programming language or in this language 
 its  works same as the other programming language 

break        =>    take  exit from control execution flow 
continue     =>    skip the condition 

=====>  HIGH ORDER ARRAY LOOP

> FOR OF LOOP 
> MAPS    ---> it is a objec that hold key value pair  --> insertion in order  ---> no duplicasy 

*/

const map = new Map();
map.set("IN", "India");
map.set("US", "United Staes");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  // document.write(`Key => ${key} && Value => ${value} `);
}
const mySymbol = Symbol("hii");
const objects = {
  name: "anandpandey",
  age: 20,
  phoneNumber: 875000000,
  emailId: "anandpandey@gmail.com",
};

for (const [key, value] of Object.entries(objects)) {
  // document.write(`Key => ${key} && Value => ${value}<br>`);
}

// To include the Symbol property in the loop
for (const [key, value] of Object.entries({
  ...objects,
  [mySymbol]: objects[mySymbol],
})) {
  //  document.write(`Key => ${String(key)} && Value => ${value}<br>`);
}

for (const key in objects) {
  // document.write(` key => ${key} && value ${objects[key]} `,"<br>");
}

const arrayExplain = ["anandpandey", "anujpandey", "aaditya thakur"];
for (const key in arrayExplain) {
  //   document.write(` key => ${key} && value ${arrayExplain[key]} `, "<br>");
}

// most usefull loop in array                                       // callback function doesnt have any name
arrayExplain.forEach(function (item) {
  // simple function
  // document.write(item, "<br>");
});

arrayExplain.forEach((item) => {
  // arrow  function
  // document.write(item, "<br>");
});

const arrayExplain2 = [
  {
    student1: "anuj pandey",
    age: 19,
    learning: "javascript",
  },

  {
    student2: "anandpandey",
    age: 20,
    learning: "javascript",
  },

  {
    student3: "aaliya pandey",
    age: 21,
    learning: "javascript",
  },
];

arrayExplain2.forEach((item) => {
  //  document.write(item.student1, "<br>");       //   you direct access the object elementt by using ( . )
});

/*
+++++++++++++++++++++++++++++++++++++++++++++++++ FILTER AND REDUCE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

---> also for each loop doesn`t return any item


=> filter take call back function


*/

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = myNumers.filter((num) => num > 5); // itt return the value

let newNumbers2 = myNumers.filter((num) => {
  // if uses a scopre thenyoun use return keyword
  return num > 5;
});

//document.write(newNumbers2);

const books = [
  { title: "book 1", genre: "fiction", publish: 2001 },

  { title: "book 2", genre: "non-fiction", publish: 2002 },

  { title: "book 3", genre: "history", publish: 2003 },

  { title: "book 4", genre: "non-history", publish: 2004 },

  { title: "book 5", genre: "science", publish: 2005 },

  { title: "book 6", genre: "non-science", publish: 2006 },

  { title: "book 7", genre: "psychlogy", publish: 2007 },

  { title: "book 8", genre: "fiction", publish: 2008 },

  { title: "book 9", genre: "non-fiction", publish: 2009 },
];

//const userBooks = books.filter( (bkp) => bkp.genre ==="non-fiction");
let userBooks = books.filter((bkp) => bkp.genre === "non-fiction");

// userBooks = books.filter( (bkp) => {
//   bkp.publish >=2005
//  });

userBooks = books.filter((bkp) => {
  return bkp.publish >= 2005 && bkp.genre === "non-fiction";
});

// console.log(userBooks);  // recieved empty array   --> co  we open scope if you remove scope then its works or write return keyword for return the value

//  que =>  add 5000 in each value

const arrayCoast = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let finalArrayCoast = arrayCoast.map((number) => number + 5000);

// document.write(finalArrayCoast,"<br>");

const chainingArray = [110, 210, 310, 50, 500];

let newChainingArray = chainingArray
  .map((number) => number * 10)
  .map((number) => number + 1)
  .filter((number) => number >= 1000);

// console.log(newChainingArray);

const resultChainigArray = chainingArray.reduce(function (accumulator, value) {
  console.log(`acc => ${accumulator} and currentValue ${value}`);
  return accumulator + value;
}, 0);

// console.log(resultChainigArray);

// =====> using arrow function doing above things

const resultChainigArray2 = newChainingArray.reduce(
  (accumulator, value) => accumulator + value,
  0
);
console.log(resultChainigArray2);

let cart = [
  { domain: "web developemnet", price: 4999 },

  { domain: "app developemnet", price: 5999 },

  { domain: "mobile  developemnet", price: 8999 },

  { domain: "cloud developemnet", price: 3999 },

  { domain: "software developemnet", price: 2999 },
];

const finalMoney = cart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(finalMoney);

//variableDeclaritive();
//variableTypeof();
//conversion();
//operation();
//comparision();
//number();
//Mathe();
//seeDateOrTime();
//seeArray();
//objectLiteral();
//objectPart2();
//objectPart3()
