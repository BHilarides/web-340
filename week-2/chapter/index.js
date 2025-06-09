/**
 * Author: Ben Hilarides
 * Date: 6.7.25
 * File Name: index.js
 * Description: To demonstrate functionality of recipes.js
*/

const {
    createRecipe, setTimer, quit
} = require("./recipes.js");

function displayRecipeDemo() {
  console.log("===Recipe Demo===");
  const ingredients = ["ingredient1", "ingredient2"];
  const result = createRecipe(ingredients);
  console.log(result);
  console.log("");
}

function displayTimerDemo() {
  console.log("=== Timer Demo ===");
  const timer = setTimer(30);
  console.log(timer);
  console.log("");
}

function displayQuitDemo() {
  console.log("=== Quit Demo ===");
  const exitMessage = quit();
  console.log(exitMessage);
  console.log("");
}

function runDemos() {
  console.log("Welcome to the Recipe Demo!");
  displayRecipeDemo();
  displayTimerDemo();
  displayQuitDemo();
}

runDemos();