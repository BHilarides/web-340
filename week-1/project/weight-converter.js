/**
 * Author: Ben Hilarides
 * Date: 6.1.25
 * File Name: weight-converter.js
 * Description: Converts weights between pounds and kilograms.
*/

"use strict";

// TODO: Implement the weight conversion logic here
const input = process.argv[2];

if (input === undefined) {
  console.error("Usage: node weight-converter.js <pounds>")
  process.exit(1);
}

const pounds = parseFloat(input);

if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = pounds * 0.453592;

console.log(`${pounds} pounds is ${kilograms.toFixed(2)} kilograms.`);
