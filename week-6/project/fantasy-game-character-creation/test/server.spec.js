const http = require('http');
const server = require('../src/server');

describe('Character Creation Server', () => {
  afterAll(() => {
    server.close();
  });


  test('POST /create-character should create a character', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create-character?class=Mage&gender=Female&funfact=Speaks%20Elvish',
      method: 'POST',
    };

    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created: Mage, Female, Speaks Elvish');
        done();
      });
    });

    req.end();
  });

  test('POST /confirm-character should confirm the character', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: "/confirm-character",
      method: 'POST'
  };

  const req = http.request(options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      expect(res.statusCode).toBe(200);
      expect(data).toBe('Character has been confirmed');
      done();
    });
  });

  req.on('error', done);
  req.end();
  });

  test('GET /view-character should return the created character', done => {
    http.get('http://localhost:3000/view-character', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Mage, Female, Speaks Elvish');
        done();
    });
  }).on('error', done);
});
});
