/**
 * Author: Ben Hilarides
 * Date: 6.19.25
 * File Name: taco-stand.js
 * Description: taco stand event handlers/emitters
 */

"use strict";

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
  }

  // emit a serve event w customer as parameter
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  // emits a prepare event w taco as parameter
  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  // emits a rush event
  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;