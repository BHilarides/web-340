// game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptFileName) {
    this.scriptPath = path.join(__dirname, scriptFileName);
  }

  getCharacters(callback) {
    let output = "";
    let errorOutput = "";

    let child;
    try {
      child = spawn("node", [this.scriptPath]);
    } catch (error) {
      console.error("Error spawning child process:", error);
      return callback(error, null);
    }

    child.stdout.on("data", (data) => {
      output += data;
    });

    child.stderr.on("data", (data) => {
      errorOutput += data;
    });

    child.on("close", () => {
      if (errorOutput) {
        console.error("Child process stderr:", errorOutput);
        return callback(errorOutput, null);
      }

      try {
        const result = JSON.parse(output);
        callback(null, result);
      } catch (error) {
        callback(error.message, null);
      }

    });
  }
}

module.exports = { GameCharacters };