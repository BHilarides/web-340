/**
 * Author: Ben Hilarides
 * Date: 6.19.25
 * File Name: index.js
 * Description: CLI for the Taco Stand application
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object

tacoStand.on("serve", (customer) => {
  console.log(`Taco stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const arg = args.join(" ");

  // TODO: Handle the commands
  if (command === "exit") {
    console.log("Taco Stand is closing. Goodbye! 🌮");
    rl.close(); // Close the readline interface
    process.exit(0); // Exit the Node process
  }

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(arg);
      break;
    case "prepare":
      tacoStand.prepareTaco(arg);
      break;
    case "rush":
      tacoStand.handleRush(arg);
      break;
    default:
      console.log(`Unknown command: ${command}. Try "serve", "prepare", or "rush".`);
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);