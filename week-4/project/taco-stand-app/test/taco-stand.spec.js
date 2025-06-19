/**
 * Author: Ben Hilarides
 * Date: 6.19.25
 * File Name: taco-stand.spec.js
 * Description: Tests for the Taco-stand app
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods
// 1. Test for serveCustomer
function testServeCustomer() {
  try {
    const tacoStand = new TacoStandEmitter();
    const testCustomer = "Ben";

    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, testCustomer);
    });

    tacoStand.serveCustomer(testCustomer);

    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

// 2. Test for prepareTaco
function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();
    const testTaco = "Carnitas";

    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, testTaco);
    });

    tacoStand.prepareTaco(testTaco);

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

// 3. Test for handleRush
function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();
    const testRush = "Lunch crowd";

    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, testRush);
    });

    tacoStand.handleRush(testRush);

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Run the tests
testServeCustomer();
testPrepareTaco();
testHandleRush();