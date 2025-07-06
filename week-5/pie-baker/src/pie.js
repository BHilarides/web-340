/**
 * Author: Ben Hilarides
 * Date: 6.29.25
 * File Name: pie.js
 * Description: This module exports a function to bake a pie with specified ingredients.
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ["flour", "sugar", "butter"];

  // Check for missing ingredients
  const missing = essentialIngredients.filter(
    ingredient => !ingredients.includes(ingredient));

    if (missing.length > 0) {
      const warning = `Cannot bake ${pieType} pie without essential ingredients: ${missing.join(", ")}`;
      console.warn(warning);
      process.exit(1);
      return warning;
  }
  const success = `Success, baked a ${pieType} pie with: ${ingredients.join(", ")}`
    console.log(success);
    return success;

}

module.exports = { bakePie };