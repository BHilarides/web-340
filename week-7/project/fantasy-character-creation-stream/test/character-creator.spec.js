const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    let output = '';

    characterCreator.on('data', (chunk) => {
      output += chunk.toString();
    });

    characterCreator.on('end', () => {
      try {
        expect(output).toContain('You have created a Male Warrior.');
        expect(output).toContain('Fun fact: Loves dragons');
        done();
      } catch (err) {
        done(err);
      }
    });

    characterCreator.write('Warrior,Male,Loves dragons');
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      try {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('Input cannot be empty');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test("should transform data correctly when written to", (done) => {
        let result = '';

    characterCreator.on('data', (chunk) => {
      result += chunk.toString();
    });

    characterCreator.on('end', () => {
      try {
        expect(result).toBe('You have created a Female Mage.\nFun fact: Afraid of forest boars');
        done();
      } catch (err) {
        done(err);
      }
    });

    characterCreator.write('Mage,Female,Afraid of forest boars');
    characterCreator.end();

  });
});