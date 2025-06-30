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
      console.warn(`Cannot bake ${pieType} pie without essential ingredients: ${missing.join(", ")}`);
    process.exit(1);
  }
    console.log(
      `Success, baked a ${pieType} pie with: ${ingredients.join(", ")}`
  );
}

module.exports = { bakePie };