/**
 * Author: Ben Hilarides
 * Date: 6.29.25
 * File Name: pie.spec.js
 * Description: This module contains tests for the bakePie function in pie.js.
 */

"use strict";

const { bakePie } = require("../src/pie");

const exit = jest.spyOn(process, "exit").mockImplementation(code => code);

describe("bakePie", () => {
  let log, warn;

  beforeEach(() => {
    log = jest.spyOn(console, "log").mockImplementation(() => {});
    warn = jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockRestore();
    warn.mockRestore();
  });

  test("bakes a pie successfully with all ingredients", () => {
    bakePie("apple", ["flour", "sugar", "butter", "apples"]);

    expect(log).toHaveBeenCalledWith(`Success, baked a apple pie with: flour, sugar, butter, apples`);
    expect(exit).not.toHaveBeenCalled();
  });

  test("fails to bake a pie when an essential ingredient is missing", () => {
    bakePie("lemon", ["flour", "sugar", "lemons"]);

    expect(warn).toHaveBeenCalledWith(`Cannot bake lemon pie without essential ingredients: butter`);
    expect(exit).toHaveBeenCalledWith(1);
  });

  test("fails to bake pie when multiple essential ingredients are missing", () => {
    bakePie("peach", ["flour", "peaches" ]);

    expect(warn).toHaveBeenCalledWith(`Cannot bake peach pie without essential ingredients: sugar, butter`);
    expect(exit).toHaveBeenCalledWith(1);
  });
});
