// web-340 Assignment3.2
// Author: Ben Hilarides
// Date: 6.15.25

"use strict";

const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.0,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.58,
  Uranus: 19.20,
  Neptune: 30.05,
  Pluto: 39.48,
};

/**
 * Calculates the distance in AU between two planets based on their average
 * distance from the Sun.
 *
 * @param {string} planetA - The name of the first planet.
 * @param {string} planetB - The name of the second planet.
 * @returns {number} - The absolute distance in AU between the two planets.
 * @throws {Error} - If either planet name is invalid.
 */
function calculateDistance(planetA, planetB) {
  const distanceA = planetDistances[planetA];
  const distanceB = planetDistances[planetB];

  if (distanceA === undefined || distanceB === undefined) {
    throw new Error('Invalid planet name');
  }

  return Math.abs(distanceA - distanceB);
}

module.exports = {
  calculateDistance
};