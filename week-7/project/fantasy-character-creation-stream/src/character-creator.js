const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.buffer = '';
  }

  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim();

    if (!input) {
      this.emit('error', new Error('Input cannot be empty'));
      return callback();
    }

    this.buffer += input;
    callback();
  }

  _read(size) {
    if (this.buffer) {
      const [charClass, gender, funFact] = this.buffer.split(',');

      const output = `You have created a ${gender} ${charClass}.\nFun fact: ${funFact}`;
      this.push(output);
      this.push(null);
      this.buffer = '';
    }
  }
}

module.exports = CharacterCreator;