// web-340 Assignment3.2
// Author: Ben Hilarides
// Date: 6.15.25

"use strict";

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    const result = calculateDistance('Earth', 'Mars');
    assert.StrictEqual(calculateDistance(result, 0.52));
    console.log('testEarthToMars passed');
    return true;
  } catch (error) {
    console.error('Failed testEarthToMars: ${error.message}');
    return false;
  }
}

function testJupiterToVenus() {
 try {
    const result = calculateDistance('Jupiter', 'Venus');
    assert.StrictEqual(calculateDistance(result, 4.48));
    return true;
  } catch (error) {
    console.error('Failed testJupiterToVenus: ${error.message}');
    return false;
  }
}


function testInvalidPlanetName() {
  try {
    assert.StrictEqual(calculateDistance('Earth', 'Ooga-Chaka'), expectedValue);
    return true;
  } catch (error) {
    console.error('Invalid Planet Name: ${error.message}');
    return false;
  }
}

// Run all tests
function runTests() {
  let passed = 0;

  if (testEarthToMars()) passed++;
  if (testJupiterToVenus()) passed++;
  if (testInvalidPlanetName()) passed++;

  console.log(`\n${passed}/${total} tests passed.`);
}

runTests();