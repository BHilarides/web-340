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

function calculateDistance(planet1, planet2) {
  const distance1 = planetDistances[planet1];
  const distance2 = planetDistances[planet2];

  if (distance1 === undefined || distance2 === undefined) {
    throw new Error('Invalid planet name');
  }

  return Math.abs(distance1 - distance2);
}

module.exports = calculateDistance;