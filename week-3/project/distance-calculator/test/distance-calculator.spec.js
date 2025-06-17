// web-340 Assignment3.2
// Author: Ben Hilarides
// Date: 6.15.25

"use strict";

const assert = require('assert');
const { calculateDistance } = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    const result = calculateDistance('Earth', 'Mars');
    assert.strictEqual(result, 0.52);
    console.log('testEarthToMars passed');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testJupiterToVenus() {
 try {
    const result = calculateDistance('Jupiter', 'Venus');
    assert.strictEqual(result, 4.48);
    console.log('testJupiterToVenus passed');
    return true;
  } catch (error) {
    console.error(`Failed testJupiterToVenus: ${error.message}`);
    return false;
  }
}


function testInvalidPlanetName() {
  try {
    calculateDistance('Earth', 'Ooga-Chaka');
    console.error(`testInvalidPlanetName failed: No error thrown for invalid planet`);
    return false;
  } catch (error) {
    console.log(`testInvalidPlanetName: passed`);
    return true;
  }
}

// Run all tests
function runTests() {
  const total = 3;
  let passed = 0;

  if (testEarthToMars()) passed++;
  if (testJupiterToVenus()) passed++;
  if (testInvalidPlanetName()) passed++;

  console.log(`\n${passed}/${total} tests passed.`);
}

runTests();