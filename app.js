// Question 01

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function addNumber(num) {
//   return function(value) {
//     return num + value;
//   }
// }
// let addFive = addNumber(5);

// console.log(addFive(10));



// Question 02

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function searchArray(arr, value) {
//   if (arr.length === 0) {
//     return console.log(false);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (Array.isArray(element)) {
//       if (searchArray(element, value)) {
//         return console.log(true);
//       }
//     } else {
//       if (element === value) {
//         return console.log(true);
//       }
//     }
//   }
//   return console.log(false);
// }

// searchArray(arr,10);


// Question 03

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// let newParagraph = document.getElementById("new-paragraph");
// function addintoParagraph(value) {
//   const p = document.createElement("p");
//   p.innerHTML = value;
//   newParagraph.appendChild(p);
// }

// addintoParagraph("Hello Javascript developers");
// addintoParagraph("Hello Javascript developers");
// addintoParagraph("Hello Javascript developers");
// addintoParagraph("Hello Javascript developers");
// addintoParagraph("Hello Javascript developers");
// addintoParagraph("Hello Javascript developers");

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// let ul = document.getElementById("ul");
// function addintoul(value) {
//   const p = document.createElement("li");
//   p.innerHTML = value;
//   ul.appendChild(p);
// }
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }

// const myElement = document.getElementById("my-element");

// changeBackgroundColor(myElement, "green");


// Question 06


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// function saveObjectToLocalStorage(key, object) {
//   const objectString = JSON.stringify(object);
//   localStorage.setItem(key, objectString);
// }

// const myObject = { name: "John", age: 30 };
// saveObjectToLocalStorage("my-key", myObject);

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function getObjectToLocalStorage(key, object) {
//   const objectString = JSON.stringify(object);
//   localStorage.getItem(key, objectString);
// }

// const myObject = getObjectToLocalStorage("my-key");


// Question 08

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function saveObjectPropertiesToLocalStorage(object) {
//     for (let key in object) {
//       localStorage.setItem(key, JSON.stringify(object[key]));
//     }

//     const newObject = {};

//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const value = JSON.parse(localStorage.getItem(key));
//       newObject[key] = value;
//     }

//     return newObject;
//   }
//   const myObject = { name: 'John', age: 30 };
//   const newObject = saveObjectPropertiesToLocalStorage(myObject);
//   console.log(newObject);
