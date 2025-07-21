"use strict";

const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve('[]'));
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  test("writes a new character to a file", async () => {
    const character = {
      class: "Warrior",
      gender: "Male",
      weakness: "Fireballs"
    };

    await expect(createCharacter(character)).resolves.toBeUndefined();

    expect(fs.readFile).toHaveBeenCalled();
    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.any(String),
      JSON.stringify([character], null, 2)
    );
  });

  test("reads characters from a file", async () => {
    const mockCharacters = [
      {
        class: "Mage",
        gender: "Female",
        weakness: "Water"
      }
    ];

    fs.readFile.mockImplementationOnce(() =>
      Promise.resolve(JSON.stringify(mockCharacters))
    );

    const characters = await getCharacters();
    expect(characters).toEqual(mockCharacters);
  });

  test("handles errors when reading characters", async () => {
    fs.readFile.mockImplementationOnce(() =>
      Promise.reject(new Error("Unable to read file"))
    );

    await expect(getCharacters()).rejects.toThrow("Failed to read characters");
  });
});