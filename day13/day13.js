// # Day 13: Modules

// ## Tasks/Activities

// ### Activity 1: Creating and Exporting Modules

// - **Task 1**: Create a module that exports a function to add two numbers. Import and use this module in another script.

import { addTwoNumber } from "./export.js";
let result = addTwoNumber(3, 9);
console.log(result);

// - **Task 2**: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { person } from "./export.js";

console.log(person);
person.getName();

// ### Activity 2: Named and Default Exports

// - **Task 3**: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { subTract, multi } from "./export.js";

let multiRes = multi(3, 9);
let subRes = subTract(4, 2);
console.log(multiRes, subRes);

// - **Task 4**: Create a module that exports a single function using default export. Import and use this function in another script.

import defaultFunction from "./export.js";
defaultFunction();

// ### Activity 3: Importing Entire Modules

// - **Task 5**: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as ImportAll from './export.js';

console.log(ImportAll.PI);
console.log(ImportAll.THETA);
ImportAll.printHello();

// ### Activity 4: Using Third-Party Modules

// - **Task 6**: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import array from 'lodash/array.js';
let { chunk } = array;
let arr = [2, 3, 4, 5, 6, 7, 8];

let resChunk = chunk(arr, 2);
console.log(resChunk);

// - **Task 7**: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

async function CallData() {
  let res = await axios.get("https://dummyjson.com/users");
  console.log(res.data.users[0].firstName);
}

CallData();

// ### Activity 5: Module Bundling (Optional)

// - **Task 8**: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// This is not done
