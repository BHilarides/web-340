/**
 * Author: Ben Hilarides
 * Date: 6.7.25
 * File Name: recipes.js
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  if (!Array.isArray(ingredients)) {
    throw new Error("Ingredients must be an array");
  } else {
    const ingredientsList = ingredients.join(", ");
    return `Recipe created with ingredients: ${ingredientsList}.`;
  }
}

// Define the setTimer function
function setTimer(minutes) {
  if (typeof minutes !== "number" || minutes <= 0) {
    throw new Error("Timer must be a positive number");
  }

  return `Timer set for ${minutes} minutes.`;
}


// Define the quit function
function quit() {
  return "Program exited.";
}

module.exports = {
  createRecipe,
  setTimer,
  quit
};
