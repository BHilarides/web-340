"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For promises:

const fs = require('fs').promises;
const path = require('path');

const characterFile = path.join(__dirname, 'characters.json');

async function createCharacter(character) {
  try {
    const data = await fs.readFile(characterFile, 'utf-8').catch(() => '[]');
    const characters = JSON.parse(data);
    characters.push(character);
    await fs.writeFile(characterFile, JSON.stringify(characters, null, 2));
  } catch (error) {
    throw new Error("Failed to write character");
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(characterFile, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read characters");
  }
}

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises