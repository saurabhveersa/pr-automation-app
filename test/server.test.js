const { expect } = require('chai');
const request = require('supertest');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

describe('GET /', () => {
  let app;

  before((done) => {
    app = server.listen(port, hostname, done);
  });

  after((done) => {
    app.close(done);
  });

  it('responds with Hello, World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, World!\n');
        done();
      });
  });
});
