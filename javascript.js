//obects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

objectName["propertyName"]

person["firstName"]

//===string operations======================================
let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
//-->Banana
let text = "Apple, Banana, Kiwi";
let part = text.slice(7)
//---Banana, Kiwi
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12,-6)
//---Banana

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");  //to replace case sensitive


let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");//replace all the matching

text = text.replaceAll("Cats","Dogs");
text = text.replaceAll(/Cats/g,"Dogs");   //replace cat with dog everywhere

let text2 = text1.toUpperCase();
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
let text3 = text1.concat(" ", text2);
let text2 = text1.trim();//remove white spaces
let text2 = text1.trimStart();  //remove white space at start only
let text = numb.toString();

//===========>string to array
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray[0])  //--->a

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe


//======>string search
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");//-->7
let index = text.lastIndexOf("locate");//21
let index = text.search("locate");//7
let index = text.search(/locate/);//7

let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
text.match(/ain/g);//gloval search
text.match(/ain/gi); //global serahc and case sensitive


let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
console.log(iterator);//2


let text = `Welcome ${firstName}, ${lastName}!`


let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;//12.50

let x = 9.656;
x.toFixed(0)//9.65

let x = 9.656;
  x.toPrecision()
  x.toPrecision(2) 
  x.toPrecision(4)
  x.toPrecision(6);

  9.656
  9.7
  9.656
  9.65600


  //=========parseInt======
//   parseInt() parses a string and returns a whole number.
//    Spaces are allowed. Only the first number is returned

   parseInt("-10")//-10
   parseInt("-10.33")//-10
   parseInt("10") //10
   parseInt("10.33")//10
   parseInt("10 6") //10 
   parseInt("10 years") //10
   parseInt("years 10");  //NAN


   //====================number properties=====
// EPSILON	The difference between 1 and the smallest number > 1.
// MAX_VALUE	The largest number possible in JavaScript
// MIN_VALUE	The smallest number possible in JavaScript
// MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY	Infinity (returned on overflow)
// NEGATIVE_INFINITY	Negative infinity (returned on overflow)
// NaN	A "Not-a-Number" value


//===============ARRAYS===============================
const cars = ["Saab", "Volvo", "BMW"];
const cars = new Array("Saab", "Volvo", "BMW");

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

let fruit = fruits[fruits.length - 1];//access last element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");
//Banana * Orange * Apple * Mango
let fruit = fruits.pop();
fruits.push("Kiwi");
fruits.shift();//remove first ele
fruits.unshift("Lemon");//add at beginining


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);//creates new array
//Apple,Mango

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
//Orange,Lemon


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();  //for strings
points.sort(function(a, b){return a - b}); //for numbers
fruits.reverse();



//===============array
The forEach() method calls a function (a callback function) once for each array element.

The map() method creates a new array by performing a function on each array element.


const d = new Date();



///======================LOOPS
const letters = ["a","b","c"];
for (const x of letters) {
  // code block to be executed
}


typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"


//push unique item to array
if(this.items.indexOf(item) === -1) {
    this.items.push(item);
    console.log(this.items);
}
//===================================================================