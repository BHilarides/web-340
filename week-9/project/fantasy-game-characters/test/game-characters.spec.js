// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");
const child_process = require("child_process");
const { spawn } = child_process;

jest.mock("child_process");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    const mockCharacterData = [
      {
        class: "Mage",
        gender: "Female",
        strength: "Powerful spells, ranged attacks",
        weakness: "Low physical defense, vulnerable in close combat"
      }
    ];

    const mockChild = {
      stdout: {
        on: jest.fn((event, callback) => {
          if (event === "data") {
            callback(JSON.stringify(mockCharacterData));
          }
        }),
      },
      stderr: {
        on: jest.fn((event, callback) => {
          if (event === "data") {

          }
        }),
      },

      on: jest.fn((event, callback) => {
          if (event === "close") callback(0);
      }),
    };

    spawn.mockReturnValueOnce(mockChild);

    const gameCharacters = new GameCharacters("game-characters-data.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(mockCharacterData);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    spawn.mockImplementationOnce(() => {
      throw new Error("Script not found");
    });

    gameCharacters = new GameCharacters("non-existent-script.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err.message).toMatch(/Script not found/);
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const mockChild = {
      stdout: {
        on: jest.fn(),
      },
      stderr: {
        on: jest.fn((event, callback) => {
          if (event === "data") {
            callback("This script failed on purpose");
          }
        }),
      },
      on: jest.fn((event, callback) => {
        if (event === "close") callback(1);
      }),
    };

    spawn.mockReturnValueOnce(mockChild);

    gameCharacters.getCharacters((err, data) => {
      expect(err).toMatch(/This script failed on purpose/);
      expect(data).toBeNull();
      done();
    });
  });
});