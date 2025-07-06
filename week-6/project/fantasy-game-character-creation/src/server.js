const http = require('http');
const url = require('url');

let character = null;
let confirmed = false;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (pathname === '/create-character' && req.method === 'POST') {
    const { class: charClass, gender, funfact } = query;
    if (charClass && gender && funfact) {
      character = { charClass, gender, funfact };
      confirmed = false;
      res.statusCode = 201;
      res.end(`Character created: ${charClass}, ${gender}, ${funfact}`);
    } else {
      res.statusCode = 400;
      res.end('Missing query parameters');
    }

  } else if (pathname === '/confirm-character' && req.method === 'POST') {
    if (character) {
      confirmed = true;
      res.statusCode = 200;
      res.end('Character has been confirmed');
    } else {
      res.statusCode = 400;
      res.end('No character to confirm');
    }

  } else if (pathname === '/view-character' && req.method === 'GET') {
    if (character) {
      const { charClass, gender, funfact } = character;
      res.statusCode = 200;
      res.end(`${charClass}, ${gender}, ${funfact}`);
    } else {
      res.statusCode = 404;
      res.end('No character found');
    }

  } else {
    res.statusCode = 404;
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;