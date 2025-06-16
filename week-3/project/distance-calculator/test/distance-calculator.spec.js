// web-340 Assignment3.2
// Author: Ben Hilarides
// Date: 6.15.25

"use strict";

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    const result = calculateDistance('Earth', 'Mars');
    assert.strictEqual(result, 0.52);
    console.log('testEarthToMars passed');
    return true;
  } catch (error) {
    console.error('testEarthToMars failed:', error.message);
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
    console.error('testJupiterToVenus failed:', error.message);
    return false;
  }
}

function testInvalidPlantedName() {
  try {
    calculateDistance('Earth', 'Ooga-chaka');
    console.error('testInvalidPlantedName failed: No error thrown for invalid planet name');
    return false;
  } catch (error) {
    assert.strictEqual(error.message, 'Invalid planet name');
    console.log('testInvalidPlantedName passed');
    return true;
  }
}

// Run all tests
function runTests() {
  const tests = [
    testEarthToMars,
    testJupiterToVenus,
    testInvalidPlanetName
  ];

  const results = tests.map((fn) => fn());
  const passed = results.filter(Boolean).length;

  console.log(`\n${passed}/${tests.length} tests passed.`);
}

runTests();